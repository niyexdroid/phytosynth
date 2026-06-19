// Local deploy script — uploads the out/ folder directly via FTP
// Usage: set FTP_HOST=... && set FTP_USER=... && set FTP_PASS=... && node scripts/deploy.js
const fs = require("fs");
const path = require("path");
const ftp = require("basic-ftp");

const FTP_HOST = process.env.FTP_HOST;
const FTP_USER = process.env.FTP_USER;
const FTP_PASS = process.env.FTP_PASS;

if (!FTP_HOST || !FTP_USER || !FTP_PASS) {
  console.error(
    "❌ Set FTP_HOST, FTP_USER, and FTP_PASS environment variables.",
  );
  console.error("   Usage:");
  console.error("     set FTP_HOST=ftp.phytosynth.co.uk");
  console.error("     set FTP_USER=youruser");
  console.error("     set FTP_PASS=yourpass");
  console.error("     node scripts/deploy.js");
  process.exit(1);
}

const outDir = path.join(__dirname, "..", "out");

if (!fs.existsSync(outDir)) {
  console.error("❌ out/ folder not found. Run 'npm run build' first.");
  process.exit(1);
}

if (!fs.existsSync(path.join(outDir, "next"))) {
  console.error("❌ out/next/ not found. Run 'npm run build' first.");
  process.exit(1);
}

// Where the site's web root lives, relative to the FTP login directory.
// Override with FTP_REMOTE_DIR if your FTP account already lands inside the
// web root (in that case set FTP_REMOTE_DIR=. to avoid a nested folder).
const REMOTE_DIR = process.env.FTP_REMOTE_DIR || "public_html";

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  let uploaded = 0;
  client.trackProgress((info) => {
    if (info.type === "upload") uploaded++;
  });

  try {
    console.log(`📤 Connecting to ${FTP_HOST}...`);
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASS,
      secure: false,
    });

    console.log(`📂 FTP login directory: ${await client.pwd()}`);
    console.log(`📤 Uploading out/ → ${REMOTE_DIR}/ ...`);
    await client.uploadFromDir(outDir, REMOTE_DIR);

    // Sanity check: confirm index.html actually landed in the remote dir.
    const size = await client.size(`${REMOTE_DIR}/index.html`);
    console.log(`✅ Deploy complete — ${uploaded} files uploaded.`);
    console.log(`✅ Verified ${REMOTE_DIR}/index.html on server (${size} bytes).`);
    console.log("   Refresh phytosynth.co.uk (hard-reload: Ctrl+F5).");
  } catch (err) {
    console.error("❌ Deploy FAILED:", err.message);
    console.error(`   Files uploaded before failure: ${uploaded}`);
    client.close();
    process.exit(1); // fail loudly so a broken deploy can't look like success
  } finally {
    client.close();
  }
}

deploy();
