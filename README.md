# blog-friends

博客的友链,MrSeaWave 的好伙伴们

## 申请友链须知：

- 请将 `MrSeaWave` 的网站添加到自己的友链中：

  - 站点名称：`MrSeaWave's Blog`
  - `url`：`https://mrseawave.github.io/blogs/`
  - `desc`：'人生就像一场游戏，做任务，刷怪，刷经验，角色升级'
  - `avatar`：
    - [401\*401](https://avatars2.githubusercontent.com/u/21967852?s=460&u=6cef4ed9001ee2a99639fcdf59db1676ee507bd9&v=4)

- 准备一个自己站点

  - 站点名称
  - 站点地址
  - 站点 `avatar`
    - `avatar` 的要求是中心对称图形，如正方形、圆形、菱形等
    - 长度与宽度应小于 `512px`
    - 使用常见图形文件格式（如 `png、jpg、svg、ico` 等，不包括 `tiff、webp、icns`）。
    - 文件大小应小于 `1 MiB`
  - 站点介绍

- 在 `GitHub` 上 `Fork` 这个仓库

- 在 `src/images` 下提交 `avatar`

  - 文件名格式为 `[domain].[format]`，如 `example.com.png`，`blog.example.com.jpg`

- 修改 `src/links.yml` 文件。

  - 按照如下格式将你的网站信息添加到 `links.yml` 文件中：

  ```yml
  "站点名称": # 请使用双引号包裹
    url: https://example.com # 你的网站的 URL
    avatar: example.com.png # avatar 的文件名
    desc: "Hello, World" # desc，请使用双引号包裹
  ```

- 完成上述步骤后，请新建一个 `Pull Request`。

- 当 `Pull Request` 被 `Review` 并被通过、合并后，你的网站将会在 `12` 个小时内显示在 `MrSeaWave's Blog` 的友链上。

- 排名不分先后!
