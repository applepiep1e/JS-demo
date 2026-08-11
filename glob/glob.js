const glob = require("glob");
const path = require("path");

const pkgPath = "./";
const pkgName = "lodash";

// glob pattern
const pattern = `${pkgPath}/{node_modules/${pkgName},repo-${pkgName},package}`;
console.log("glob pattern:", pattern);

// callback
const matches = glob.sync(pattern, {
  // match directory
  nodir: false,
  // match hidden files
  absolute: true,
  dot: false,
}, (err, matches)=> {
  if(err) {
    console.error("glob error:", err);
    return;
  }
  console.log("glob matches the real path list: ");
  console.log(matches);
});

// --------------- promise

async function runDemo() {
  const matches = await glob.glob(pattern, {
    nodir: false, 
    absolute: true
  });
  console.log("\nasync matches:", matches);

  // traverse the path
  for (const fp of matches) {
    console.log("candidate =>", path.resolve(fp));
  }
}

runDemo().catch(e => console.error(e));
