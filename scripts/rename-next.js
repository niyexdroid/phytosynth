// Post-build script: renames _next folder to next so it works on Namecheap/LiteSpeed
const fs = require("fs");
const path = require("path");

// Resolve relative to the project root, not CWD
const projectRoot = path.resolve(__dirname, "..");
const outDir = path.join(projectRoot, "out");
const underscoreDir = path.join(outDir, "_next");
const regularDir = path.join(outDir, "next");

console.log("Looking for _next in:", outDir);

if (fs.existsSync(underscoreDir)) {
  // Remove old next if exists
  if (fs.existsSync(regularDir)) {
    fs.rmSync(regularDir, { recursive: true, force: true });
  }
  fs.renameSync(underscoreDir, regularDir);
  console.log("✅ Renamed out/_next → out/next for LiteSpeed compatibility");
} else {
  // List contents for debugging
  console.log("Contents of out/:");
  fs.readdirSync(outDir).forEach((f) => console.log("  " + f));
  console.log(
    "⚠️  out/_next not found, skipping rename. _next exists?",
    fs.existsSync(underscoreDir),
  );
}
