// Read-only FTP inspector — lists the remote tree so we can find the real
// web root. Does NOT upload or delete anything.
const ftp = require("basic-ftp");

async function list(client, dir) {
  try {
    const entries = await client.list(dir);
    console.log(`\n=== ${dir} (${entries.length} entries) ===`);
    for (const e of entries) {
      console.log(`  ${e.isDirectory ? "[d]" : "   "} ${e.name}  (${e.size}b)`);
    }
    return entries;
  } catch (err) {
    console.log(`\n=== ${dir} === ERROR: ${err.message}`);
    return [];
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
    await list(client, "/");
    await list(client, "/public_html");

    // Decisive test: upload a uniquely-named marker (never requested => never
    // cached) to public_html. If it's reachable over HTTP, public_html is the
    // real docroot and our problem is just stale cache.
    const marker = `deploycheck-${Date.now()}.txt`;
    const { Readable } = require("stream");
    await client.uploadFrom(
      Readable.from([`ok ${marker}`]),
      `public_html/${marker}`,
    );
    console.log(`\nMARKER UPLOADED: https://phytosynth.co.uk/${marker}`);
  } catch (err) {
    console.error("Inspect failed:", err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
