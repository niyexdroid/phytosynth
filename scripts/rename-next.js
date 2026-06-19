// Post-build script: renames _next folder to next + replaces references in HTML
// Needed because LiteSpeed/Namecheap blocks folders starting with underscore
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const outDir = path.join(projectRoot, "out");
const underscoreDir = path.join(outDir, "_next");
const regularDir = path.join(outDir, "next");

// Step 1: Rename the folder
console.log("Looking for _next in:", outDir);
if (fs.existsSync(underscoreDir)) {
  if (fs.existsSync(regularDir)) {
    fs.rmSync(regularDir, { recursive: true, force: true });
  }
  fs.renameSync(underscoreDir, regularDir);
  console.log("✅ Renamed out/_next → out/next");
} else {
  console.log("Contents of out/:");
  fs.readdirSync(outDir).forEach((f) => console.log("  " + f));
  console.log(
    "⚠️  out/_next not found, skipping rename. _next exists?",
    fs.existsSync(underscoreDir),
  );
}

// Step 2: Replace all /_next/ references with /next/ in HTML files
function replaceInHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInHtml(fullPath);
    } else if (entry.name.endsWith(".html")) {
      let content = fs.readFileSync(fullPath, "utf8");
      const oldLen = content.length;
      content = content.replace(/\/_next\//g, "/next/");
      if (content.length !== oldLen) {
        fs.writeFileSync(fullPath, content);
        console.log("🔧 Fixed:", path.relative(outDir, fullPath));
      }
    }
  }
}
replaceInHtml(outDir);
console.log("✅ All HTML files updated — /_next/ → /next/");
