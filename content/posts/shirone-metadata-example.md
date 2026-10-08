---
# 必填：标题与文章归档日期
title: Shirone 文章元数据完整示例
published: 2026-10-08

# 可选：精确时间；时间所属日必须和 published / updated 一致
publishedAt: 2026-10-08T09:30:00+08:00
updated: 2026-10-08
updatedAt: 2026-10-08T14:20:00+08:00

# 发布与展示
pinned: false
draft: true
comment: true
description: 这是一份覆盖 Shirone 文章 frontmatter 字段的草稿示例。
image: "" # 可填写相对文章目录的封面图路径、/ 开头的 public 路径或图片 URL
tags:
  - Shirone
  - 写作示例
category: 使用指南
lang: zh-CN

# 加密设置：本例不加密；开启时再填写非空 password
encrypted: false
password: ""
passwordHint: ""
hideHomeContent: true

# 路由设置：按需选择 alias 或 permalink
alias: ""
permalink: ""

# 以下字段由 Shirone 构建时生成，请勿手写
# prevUrl: ""
# nextUrl: ""
# prevTitle: ""
# prevSlug: ""
# nextTitle: ""
# nextSlug: ""
---

# Shirone 文章元数据示例

此文件用于查看可用的 frontmatter 字段。`draft: true`，生产构建不会发布它。

## 发布与日期

- `published` 是必填的归档日期，格式为 `YYYY-MM-DD`。
- `publishedAt` 是可选的精确发布时间，带时区，并且必须落在 `published` 对应的站点时区日期内。
- `updated` 与 `updatedAt` 用于更新时间；填写 `updatedAt` 时必须同时填写 `updated`，两者日期也必须匹配。
- `pinned` 控制文章是否置顶；`draft` 控制是否作为草稿排除在生产文章列表之外。

## 列表与分类

- `description` 为摘要；留空时页面可回退到标题或正文摘要。
- `image` 为文章封面。
- `tags` 是标签数组，`category` 是分类，`lang` 可覆盖站点默认语言。
- `comment: false` 可关闭这篇文章的评论；`true` 沿用全局评论配置。

## 加密与路由

- 加密文章需要设置 `encrypted: true` 并提供非空 `password`；`passwordHint` 是可选提示。当前实现中，非空 `password` 也会被视为加密内容，因此本例保持为空。
- `hideHomeContent` 控制加密文章在首页是否隐藏正文摘要。
- `alias` 与 `permalink` 用于自定义文章路径；自定义 `permalink` 优先级更高。普通文章可不设置。
- `prev*` / `next*` 是构建时填充的上一篇、下一篇导航数据，只作参考，不应放进有效 frontmatter。