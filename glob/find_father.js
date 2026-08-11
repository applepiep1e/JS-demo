const fs = require("fs");
const path = require("path");

const pkgPath = "./";
const pkgName = "lodash";

let cur = process.cwd();

while(true) {
  const candidate = path.join(cur, "node_modules", pkgName);
  if(fs.existsSync(candidate)) {
    console.log("found", candidate);
    break;
  }
  const parent = path.dirname(cur);
  if (parent === cur) break;
  cur = parent;
}
