// Read-only FTP inspector — recursively walks the accessible tree to locate
// the REAL document root (the one containing the live "_next" folder).
const ftp = require("basic-ftp");

const HITS = [];

async function walk(client, dir, depth) {
  if (depth > 4) return;
  let entries;
  try {
    entries = await client.list(dir);
  } catch (err) {
    console.log(`  (cannot list ${dir}: ${err.message})`);
    return;
  }
  for (const e of entries) {
    const full = dir === "/" ? `/${e.name}` : `${dir}/${e.name}`;
    if (e.isDirectory) {
      // Flag anything interesting: the live _next folder, or a docroot.
      if (e.name === "_next" || e.name === "next" || e.name === "public_html") {
        console.log(`  >>> ${full}  (${e.name})`);
        if (e.name === "_next" || e.name === "next") HITS.push(full);
      } else {
        console.log(`  [d] ${full}`);
      }
      await walk(client, full, depth + 1);
    } else if (e.name === "index.html" || e.name.endsWith(".htaccess")) {
      console.log(`      ${full}  (${e.size}b)`);
    }
  }
}

async function main() {
  const client = new ftp.Client();
  client.ftp.verbose = false;
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: false,
    });
    console.log(`FTP login directory: ${await client.pwd()}`);
    console.log("=== full tree (dirs, index.html, .htaccess) ===");
    await walk(client, "/", 0);
    console.log("\n=== _next / next folders found ===");
    console.log(HITS.length ? HITS.join("\n") : "NONE — real docroot is NOT reachable from this FTP account.");
  } catch (err) {
    console.error("Inspect failed:", err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
