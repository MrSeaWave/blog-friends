const yaml = require("js-yaml");
const { sync: mkdirp } = require("mkdirp"); // 跨平台创建包
const { writeFileSync, readFileSync } = require("fs");
const { join: pathJoin } = require("path");
const child_process = require("child_process");

function copyDir(src, dist) {
  child_process.spawnSync("cp", ["-r", src, dist]);
}

try {
  const dir = pathJoin(__dirname, "../dist");
  const doc = yaml.load(
    readFileSync(pathJoin(__dirname, "../src/links.yml"), "utf8")
  );
  // 创建dist
  mkdirp(dir);
  // 复制json至dist文件夹
  const filePath = pathJoin(dir, "./links.json");
  writeFileSync(filePath, JSON.stringify(doc));
  // 复制图片至dist文件夹
  copyDir(pathJoin(__dirname, "../src/images"), pathJoin(dir, "./images"));
} catch (e) {
  console.log("error：", e);
}
