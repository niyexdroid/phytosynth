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

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    console.log(`📤 Connecting to ${FTP_HOST}...`);
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASS,
      secure: false,
    });

    console.log("📤 Uploading out/ → public_html/ ...");
    await client.uploadFromDir(outDir, "public_html");
    console.log("✅ Deploy complete! Refresh phytosynth.co.uk");
  } catch (err) {
    console.error("❌ Deploy failed:", err.message);
  } finally {
    client.close();
  }
}

deploy();
