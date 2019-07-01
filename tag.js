let { execSync } = require("child_process");
let email = execSync("git config --get user.email");
var currentBranch = execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .replace(/\s+/, "");
const tag = currentBranch.slice(
  currentBranch.length - 10,
  currentBranch.length
);
console.log("当前分支：", currentBranch);
// execSync("git checkout master");

if (currentBranch !== "master") {
  execSync("git add .");
  execSync(`git commit -m ${currentBranch}发版`);
  execSync(`git pull origin ${currentBranch}`);
  execSync(`git push origin ${currentBranch}`);
  execSync("git checkout master");
}

execSync("git pull origin master");
execSync(`git merge ${currentBranch}`);
execSync(`git merge ${currentBranch}`);
execSync(`git tag ${tag}`);
execSync("git push origin --tags");

execSync(`git push origin :${currentBranch}`);
execSync(`git branch ${currentBranch} -D`);
