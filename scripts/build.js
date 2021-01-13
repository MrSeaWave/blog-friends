const yaml = require("js-yaml");
const { sync: mkdirp } = require("mkdirp"); // 跨平台创建包
const { writeFileSync, readFileSync } = require("fs");
const { join: pathJoin } = require("path");

try {
  const dir = pathJoin(__dirname, "../dist");
  const doc = yaml.load(readFileSync(pathJoin(__dirname,'../src/links.yml'), "utf8"));
  mkdirp(dir);
  const filePath = pathJoin(dir, "./links.json");
  writeFileSync(filePath, JSON.stringify(doc));
} catch (e) {
  console.log("error：", e);
}
