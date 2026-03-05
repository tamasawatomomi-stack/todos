# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured yet.

## Architecture

This is a Next.js 16 app using the App Router (`src/app/`), React 19, TypeScript, and Tailwind CSS v4.

- **Entry point**: `src/app/page.tsx` — the home page (currently a scaffold placeholder)
- **Layout**: `src/app/layout.tsx` — root layout with Geist font variables applied globally
- **Styles**: `src/app/globals.css` — imports Tailwind, defines CSS variables for `--background`/`--foreground`, and sets dark mode via `prefers-color-scheme`
- **Path alias**: `@/*` maps to `src/*`

Tailwind v4 is configured via PostCSS (`postcss.config.mjs`) with `@tailwindcss/postcss`. There is no `tailwind.config.js` — theme customization is done inside CSS using `@theme inline` blocks in `globals.css`.

## Custom Agents

### /ship
プロジェクトをビルドし、テストを実行し、すべて成功したら変更をコミットしてプッシュする。

1. `npm run build` を実行してビルドが成功することを確認する
2. テストフレームワークが設定されている場合はテストを実行する
3. ビルド・テストがすべて成功した場合のみ、変更をコミットしてリモートにプッシュする
4. いずれかのステップが失敗した場合は処理を中断し、エラー内容を報告する

## Guidelines

- 常に日本語で思考し、日本語で回答すること
