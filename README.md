# Shirone Content

这是 Shirone 站点的内容仓库，只保存文章、说说、页面数据实体、站点配置和用户图片。主题实现、依赖、构建与部署由代码仓库负责。

## 目录边界

| 内容仓库 | 代码仓库物化路径 |
| --- | --- |
| `content/` | `src/content/` |
| `config/` | 编译进 `src/user/user-config.ts`（见本目录 README） |
| `data/` | `src/data/` |
| `assets/` | `src/assets/` |
| `public/` | `public/` |

`README.md`、`docs/` 和本仓库的 `.github/` 不会被物化，也不会触发站点重建。

## 发布流程状态

内容仓库已准备好保存和版本管理站点内容。自动构建/部署尚未启用：还需要在代码仓加入内容仓读取和 `content-updated` 处理，并配置两个仓库的最小权限令牌。当前工作流仅提供手动入口；没有 `DISPATCH_TOKEN` 时会安全跳过。

Ghost 内容迁移完成后，再启用内容推送触发构建，避免迁移期间意外发布不完整站点。

## 本地预览

在代码仓执行（PowerShell）：

```powershell
$env:CONTENT_DIR = "<本仓库的本地路径>"
pnpm content:sync
pnpm dev
```

边写边看时可以另开一个终端运行 `pnpm content:watch`。

当前导出的 `content/` 只有 1 篇示例文章；Ghost 旧站内容尚未迁入。
