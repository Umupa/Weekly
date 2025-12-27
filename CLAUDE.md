# 赛博周刊 (Cyber Weekly)

> 一个具有「赛博看报」风格的个人周刊站点

## 技术栈

- **框架**: Astro 5.x (SSG)
- **样式**: UnoCSS (兼容 Tailwind 语法)
- **字体**: 思源宋体 + 霞鹜文楷
- **语言**: TypeScript (strict)

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 目录结构

```
src/
├── components/    # 组件
├── layouts/       # 布局
├── pages/         # 页面
├── content/       # 内容 (Markdown)
│   └── posts/     # 周刊文章
└── styles/        # 样式
```

## 代码规范

- 使用中文注释
- 组件文件使用 PascalCase
- 样式使用 UnoCSS 原子类优先
- TypeScript 严格模式

## 设计规范

### 字体
- 标题: Source Han Serif SC (思源宋体)
- 正文: LXGW WenKai (霞鹜文楷)
- 代码: JetBrains Mono

### 排版
- 正文字号: 17px
- 行高: 1.85
- 字间距: 0.03em
