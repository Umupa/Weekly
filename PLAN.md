# 史莱姆周刊 (Slime Weekly) 开发规划

> 缓慢但从未停止

## 技术栈

- **框架**: Astro 5.x
- **样式**: UnoCSS
- **字体**: 思源宋体 + 霞鹜文楷
- **部署**: 静态生成 (SSG)

---

## 开发阶段

### Phase 1: 项目初始化

**目标**: 搭建 Astro + UnoCSS 基础项目

**任务**:
- [ ] 初始化 Astro 项目
- [ ] 配置 UnoCSS（兼容 Tailwind 语法）
- [ ] 配置 TypeScript
- [ ] 创建基础目录结构
- [ ] 配置 `.gitignore`
- [ ] 创建 `CLAUDE.md` 项目说明

**产出**: 可运行的空白 Astro 项目

---

### Phase 2: 布局系统

**目标**: 实现基础页面布局

**任务**:
- [ ] 创建 `BaseLayout.astro` 基础布局
- [ ] 创建 `PostLayout.astro` 文章布局
- [ ] 实现侧边栏组件 `Sidebar.astro`
- [ ] 实现报头组件 `Masthead.astro`
- [ ] 响应式适配（移动端隐藏侧边栏）

**产出**: 完整的页面骨架

---

### Phase 3: 排版与字体系统

**目标**: 实现报纸风格的排版

**任务**:
- [ ] 配置中文字体（思源宋体 + 霞鹜文楷）
- [ ] 创建 `typography.css` 排版系统
- [ ] 设置行高、字间距、段落间距
- [ ] 配置 Markdown 渲染样式
- [ ] 实现图片样式（圆角、阴影、懒加载）

**产出**: 优雅的中文排版效果

---

### Phase 4: 主题系统

**目标**: 实现多主题切换

**任务**:
- [ ] 定义 CSS 变量（颜色、间距）
- [ ] 实现亮色主题
- [ ] 实现暗色主题
- [ ] 实现纸张色主题（泛黄护眼）
- [ ] 创建 `ThemeSwitch.astro` 组件
- [ ] 主题持久化（localStorage）

**产出**: 三种可切换的主题

---

### Phase 5: 内容管理

**目标**: 实现 Markdown 内容管理

**任务**:
- [ ] 配置 Astro Content Collections
- [ ] 定义文章 Schema（date, title, description, image）
- [ ] 创建文章列表页 `index.astro`
- [ ] 创建文章详情页 `[...slug].astro`
- [ ] 实现 URL 短链接（/posts/001）
- [ ] 添加示例文章

**产出**: 完整的内容管理流程

---

### Phase 6: 体验增强

**目标**: 提升阅读体验

**任务**:
- [ ] 阅读进度条 `ReadingProgress.astro`
- [ ] 阅读时间估算
- [ ] 键盘导航（← → 切换文章）
- [ ] 字体大小调节 `FontSizer.astro`
- [ ] 文章目录 TOC（长文章）
- [ ] 图片点击放大

**产出**: 流畅的阅读体验

---

### Phase 7: 搜索与导航

**目标**: 实现搜索和导航功能

**任务**:
- [ ] 集成 Pagefind 全文搜索
- [ ] 创建搜索组件 `Search.astro`
- [ ] 侧边栏滚动位置持久化
- [ ] View Transitions 页面动效

**产出**: 便捷的内容发现

---

### Phase 8: RSS 与 SEO

**目标**: 完善订阅和搜索引擎优化

**任务**:
- [ ] 生成 RSS 订阅
- [ ] 配置 Sitemap
- [ ] Open Graph 元标签
- [ ] 添加 robots.txt
- [ ] 性能优化检查

**产出**: 可被订阅和搜索的站点

---

### Phase 9: 部署与优化

**目标**: 部署上线

**任务**:
- [ ] 图片优化流程
- [ ] 构建脚本优化
- [ ] 部署配置（Vercel/Netlify）
- [ ] 域名配置
- [ ] 性能测试（Lighthouse）

**产出**: 上线运行的周刊站点

---

## 目录结构

```
Weekly/
├── src/
│   ├── components/
│   │   ├── Masthead.astro
│   │   ├── Sidebar.astro
│   │   ├── ThemeSwitch.astro
│   │   ├── FontSizer.astro
│   │   ├── ReadingProgress.astro
│   │   ├── TOC.astro
│   │   └── Search.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── posts/
│   │   │   └── [...slug].astro
│   │   └── rss.xml.ts
│   ├── content/
│   │   └── posts/
│   │       ├── 001-first-issue.md
│   │       └── ...
│   └── styles/
│       ├── typography.css
│       └── themes.css
├── public/
│   └── fonts/
├── uno.config.ts
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── PLAN.md
├── CLAUDE.md
└── README.md
```

---

## 设计规范

### 字体

| 用途 | 字体 | 回退 |
|------|------|------|
| 标题 | Source Han Serif SC | Noto Serif SC, serif |
| 正文 | LXGW WenKai | Source Han Serif SC, serif |
| 代码 | JetBrains Mono | monospace |

### 颜色

| 变量 | 亮色 | 暗色 | 纸张色 |
|------|------|------|--------|
| --bg | #ffffff | #1a1a1a | #faf6eb |
| --text | #1a1a1a | #e5e5e5 | #2c2416 |
| --accent | #c41e3a | #e85d75 | #8b4513 |
| --border | #e5e5e5 | #333333 | #d4c5a9 |

### 排版

| 属性 | 值 |
|------|-----|
| 正文字号 | 17px |
| 行高 | 1.85 |
| 字间距 | 0.03em |
| 段落间距 | 1.2em |

---

## 执行记录

| 阶段 | 状态 | 开始时间 | 完成时间 |
|------|------|----------|----------|
| Phase 1 | 待开始 | - | - |
| Phase 2 | 待开始 | - | - |
| Phase 3 | 待开始 | - | - |
| Phase 4 | 待开始 | - | - |
| Phase 5 | 待开始 | - | - |
| Phase 6 | 待开始 | - | - |
| Phase 7 | 待开始 | - | - |
| Phase 8 | 待开始 | - | - |
| Phase 9 | 待开始 | - | - |
