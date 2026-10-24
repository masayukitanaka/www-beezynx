# Beezynx — Site Content

このファイルはサイトの編集可能コンテンツを抜き出したものです。編集後、各項目を元のソースに反映します（反映先は各セクションに明記）。

- 見出し番号（01, 02…）やフィールド名（**Title:** など）の構造は**変えないでください**。値（コロンの右側、本文）だけ編集してください。
- リスト項目（Works や Services の各エントリ）は、追加・削除・並べ替えが可能です。追加した場合は番号（No）も振り直してください。
- URL が `#` のものは未設定（リンク無効）を意味します。
- 反映先: `app/data/portfolio.ts`（Spec/Services/Works）、`app/routes/home.tsx`（Hero/各セクション見出し文/Contact）、`app/data/site.ts`（ブランド名・ドメイン）。
- Works の画像: 原本は `docs/assets/work-*.webp`。配信用に同じファイルを `public/works/` にコピーし、`portfolio.ts` の `image` には `/works/work-*.webp`（ルート相対）を指定する（`docs/` はビルドで配信されないため）。

---

## Site / Brand

反映先: `app/data/site.ts`（`PUBLIC_SITE` で出し分け）

### freelance（本番: beezynx.dev）
- **Brand:** Beezynx
- **Mark:** BX
- **Domain:** beezynx.dev

### personal（masayukitanaka.github.io）
- **Brand:** Masayuki Tanaka
- **Mark:** MT
- **Domain:** masayukitanaka.github.io

### Meta（検索・OGP用）
反映先: `app/routes/home.tsx` の `meta()`
- **Title:** {Brand} - Software Development & AI Solutions
- **Description:** Leading software development company specializing in AI tools, automation, and enterprise consulting solutions.
- **Keywords:** software development, AI tools, automation, consulting, enterprise solutions

---

## Navigation

反映先: `app/routes/home.tsx`（nav）
- **GitHub URL:** https://github.com/masayukitanaka
- リンクラベル: Services / Works / Partners / GitHub ↗ / Contact

---

## Overview（Hero）

反映先: `app/routes/home.tsx`（header#overview）
- **Eyebrow:** Software Development & AI
- **Heading:** Next-Gen software solutions.
- **Lead:** We craft intelligent software, AI-powered tools, and automation solutions that transform businesses and drive innovation.

### Spec strip（4セル）
反映先: `app/data/portfolio.ts` の `specs`

| Label | Value |
|---|---|
| Experience | 10+ years |
| Projects | 100+ delivered |
| Focus | Software · AI · Automation |
| Support | 24/7 |

---

## 01 Services

反映先: `app/data/portfolio.ts` の `services`
- **Section intro:** Comprehensive solutions for modern businesses.

### Service 01
- **Title:** Software Development
- **Summary:** Custom web applications, mobile apps, and enterprise software built with cutting-edge technologies and best practices.
- **Tags:** Web Apps, Mobile, Enterprise

### Service 02
- **Title:** AI Tools & Automation
- **Summary:** Intelligent automation solutions, machine learning integration, and AI-powered tools that streamline operations.
- **Tags:** Automation, Machine Learning, AI Tools

### Service 03
- **Title:** Consulting
- **Summary:** Strategic technology consulting, architecture design, and digital transformation guidance for enterprises.
- **Tags:** Strategy, Architecture, Transformation

---

## 02 Works

反映先: `app/data/portfolio.ts` の `works`
- **Section intro:** Selected projects and platforms we've delivered.

### Work 01
- **No:** 01
- **Year:** 2026
- **Title:** MangaDSL — Manga Layout Creator
- **Type:** OpenSource
- **Role:** Language Design & Development
- **Summary:** A domain-specific language that declares manga panel layouts with four elements: page, row, col and panel. Write a definition to generate a downloadable layout image; the open-source parser and renderer install via pip.
- **Tags:** Manga, DSL, Python, React, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — DSL and generated layout
- **URL（Live site）:** https://manga.beezynx.dev/en/
- **LP（Details）:** #
- **Image:** docs/assets/work-manga-dsl.webp

### Work 02
- **No:** 02
- **Year:** 2026
- **Title:** Manga Editor
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** A visual panel-layout editor for comic pages. Split, drag and resize panels on a live canvas, add speech balloons and image layers, and keep every edit in two-way sync with a readable .manga source file.
- **Tags:** Manga, Visual Editor, MangaDSL, React, Hono, D1, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — panel editor
- **URL（Live site）:** https://manga-editor.ursytsr.workers.dev/
- **LP（Details）:** #
- **Image:** docs/assets/work-manga-editor.webp

### Work 03
- **No:** 03
- **Year:** 2026
- **Title:** Character Palette
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** Keeps a character's look consistent across every panel when making manga art with generative AI. Build a character lineup and turnaround sheets as references, then generate panel illustrations from them.
- **Tags:** Manga, Generative AI, Gemini API, React, R2, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — character palette
- **URL（Live site）:** https://image-creator.ursytsr.workers.dev/
- **LP（Details）:** #
- **Image:** docs/assets/work-character-palette.webp

### Work 04
- **No:** 04
- **Year:** 2026
- **Title:** Life As Comic
- **Type:** Service
- **Role:** Design & Development
- **Summary:** A service that turns your life story into an original comic book. Interview sessions become a script and finished art, delivered as a printed hardcover and a digital edition.
- **Tags:** Manga, Service, Web, React, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — landing page
- **URL（Live site）:** https://lifeascomic.mangacomic.org/
- **LP（Details）:** #
- **Image:** docs/assets/work-life-as-comic.webp

### Work 05
- **No:** 05
- **Year:** 2026
- **Title:** Storyboard Planner
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** A tool for planning a manga's page breakdown — mapping the story onto pages and panels before drawing begins.
- **Tags:** Manga, Storyboard, Planning, React, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — storyboard tool
- **URL（Live site）:** https://storyboard.ursytsr.workers.dev/login
- **LP（Details）:** #
- **Image:** docs/assets/work-storyboard.webp

### Work 06
- **No:** 06
- **Year:** 2026
- **Title:** Small Talk Topic Cards
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** Conversation-starter cards for Japanese learners. Choose categories from food and travel to ethics and politics, then tap a card to reveal a question to talk about.
- **Tags:** Language Learning, Conversation, React, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — topic cards
- **URL（Live site）:** https://smalltalk.ursytsr.workers.dev/
- **LP（Details）:** #
- **Image:** docs/assets/work-smalltalk.webp

### Work 07
- **No:** 07
- **Year:** 2026
- **Title:** Memory Game (Multiplayer)
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** A multiplayer memory card game for putting what you've learned to the test. Match English phrases with their Japanese translations, or hiragana with katakana, and play against others.
- **Tags:** Language Learning, Multiplayer, React, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — game list
- **URL（Live site）:** https://memory-game2.ursytsr.workers.dev/
- **LP（Details）:** #
- **Image:** docs/assets/work-memory-game.webp

### Work 08
- **No:** 08
- **Year:** 2026
- **Title:** Hiragana & Katakana Memory Hint
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** Learn hiragana and katakana through illustrated memory aids. Study the characters in order, practice at random, or drill a custom set.
- **Tags:** Language Learning, Kana, React, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — learning modes
- **URL（Live site）:** https://hiragana-memory-hint.ursytsr.workers.dev/
- **LP（Details）:** #
- **Image:** docs/assets/work-hiragana-hint.webp

### Work 09
- **No:** 09
- **Year:** 2026
- **Title:** Japanese Practice — Kana Puzzle & Flashcards
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** A game where you place each hiragana and katakana in its correct spot on the chart, plus flashcards for JLPT N5 vocabulary and custom CSV-based decks.
- **Tags:** Language Learning, Game, Flashcards, React, Cloudflare Workers
- **Shot（プレースホルダー文）:** screenshot — practice menu
- **URL（Live site）:** https://nihongo-learn.ursytsr.workers.dev/
- **LP（Details）:** #
- **Image:** docs/assets/work-nihongo-learn.webp

### Work 10
- **No:** 10
- **Year:** 2026
- **Title:** YouTube Playlist Editor
- **Type:** Tool
- **Role:** Design & Development
- **Summary:** A simple tool for managing your YouTube playlists. Sign in with Google to reorder videos by drag and drop, copy videos between playlists, remove unwanted items and preview videos before making changes. Available in five languages.
- **Tags:** YouTube Data API, Google OAuth, Productivity
- **Shot（プレースホルダー文）:** screenshot — playlist editor
- **URL（Live site）:** https://youtube-playlist.site/
- **LP（Details）:** #
- **Image:** docs/assets/work-youtube-playlist.webp

---

## 03 Partners

反映先: `app/routes/home.tsx`（section#partners）＋ `app/components/TopTalBadge.tsx`
- **Section intro:** Trusted by industry leaders.
- **バッジ内容（TopTal）:** TOP 3% TALENT / Vetted by Toptal / Hire me
- **Hire me リンク:** https://www.toptal.com/developers/resume/masayuki-tanaka#kV3Vwm

---

## 04 Contact

反映先: `app/routes/home.tsx`（section#contact）
- **Body:** Ready to get started? Let's discuss your project and see how we can help transform your business.
- **Button 1（label）:** Schedule a Consultation ↗
- **Button 1（link）:** mailto:admin@beezynx.dev
- **Button 2（label）:** GitHub ↗
- **Button 2（link）:** https://github.com/masayukitanaka
- **Copyright:** © 2026 {Brand} — {Domain}
