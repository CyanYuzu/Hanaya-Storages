# Shirone Content

这是 Shirone 站点的内容仓库，只保存文章、说说、页面数据、站点身份配置和图片/音频资源。主题实现、依赖、构建与部署由 `CyanYuzu/Hanaya` 代码仓库负责。

## 目录边界

| 内容仓库 | 代码仓物化路径 |
| --- | --- |
| `content/` | `src/content/` |
| `config/` | 编译进 `src/user/user-config.ts` |
| `data/` | `src/data/` |
| `assets/` | `src/assets/` |
| `public/` | `public/` |

## 自动构建与发布

内容仓 `main` 分支内 `content/`、`config/`、`data/`、`assets/`、`public/` 或 `shirone.content.json` 发生变化时，工作流会把对应内容 commit SHA 发送给 `CyanYuzu/Hanaya`。代码仓随后检出该精确版本，运行 `pnpm build`（其中包含 `content:sync`），再把 `dist/` rsync 到 VPS 的 `/srv/hanaya/www/`。

启用链路还需要：

- 本仓库 Secret `DISPATCH_TOKEN`：细粒度令牌只需访问 `CyanYuzu/Hanaya`，权限为 `Contents: read and write`。
- 代码仓 Secret `CONTENT_REPO_TOKEN`：细粒度令牌只需访问本仓库，权限为 `Contents: read`。
- 代码仓 Secret `VPS_SSH_KEY`：现有 VPS 发布私钥。

`DISPATCH_TOKEN` 未配置时，触发工作流会安全跳过。代码仓接入私有内容并合并启用前，不会自动部署此仓当前的示例内容。Ghost 旧站文章仍需迁入 `content/` 后再启用生产发布。

## 本地预览

在代码仓 PowerShell 终端执行：

```powershell
$env:CONTENT_DIR = "<本仓库的本地路径>"
pnpm.cmd content:sync
pnpm.cmd dev
```

当前导出的 `content/` 只有 1 篇示例文章；Ghost 旧站内容尚未迁入。
