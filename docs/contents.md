# Beezynx — Site Content

このファイルはサイトの編集可能コンテンツを抜き出したものです。編集後、各項目を元のソースに反映します（反映先は各セクションに明記）。

- 見出し番号（01, 02…）やフィールド名（**Title:** など）の構造は**変えないでください**。値（コロンの右側、本文）だけ編集してください。
- リスト項目（Works や Services の各エントリ）は、追加・削除・並べ替えが可能です。追加した場合は番号（No）も振り直してください。
- URL が `#` のものは未設定（リンク無効）を意味します。
- 反映先: `app/data/portfolio.ts`（Spec/Services/Why/Works）、`app/routes/home.tsx`（Hero/各セクション見出し文/Contact）、`app/data/site.ts`（ブランド名・ドメイン）。

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
- リンクラベル: Services / About / Partners / GitHub ↗ / Contact

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

## 02 Why Beezynx

反映先: `app/data/portfolio.ts` の `whyChoose`
- **Section heading:** 02 Why {Brand}?
- **Section intro:** Solutions that not only work, but drive real results.

| Label | Value |
|---|---|
| Experience | 10+ years of industry experience across software and AI. |
| Track Record | 100+ successful projects delivered for businesses of every size. |
| Support | 24/7 support and maintenance to keep your systems running. |
| Approach | We combine technical expertise with business acumen to deliver solutions that drive real results. |

---

## 03 Works

反映先: `app/data/portfolio.ts` の `works`
- **Section intro:** Selected projects and platforms we've delivered.

### Work 01
- **No:** 01
- **Year:** 2022–2023
- **Title:** UGC Asynchronous Processing Platform
- **Role:** Full Stack (Backend focus)
- **Summary:** Modernized a 2000s-era legacy system with Go microservices and AWS Step Functions. Cut media processing time by 70% and built for 20× peak traffic.
- **Tags:** Go, PHP, AWS Step Functions
- **Shot（プレースホルダー文）:** screenshot — processing dashboard
- **URL（Live site）:** #
- **LP（Details）:** #
- **Image:** （未設定）

### Work 02
- **No:** 02
- **Year:** 2016–2022
- **Title:** Fighting Game Backend Platform
- **Role:** Backend / API Design
- **Summary:** API backend for a fighting game played by millions. Averaged 30ms responses and reduced matchmaking wait times by 40%.
- **Tags:** PHP Symfony, AWS, REST API
- **Shot（プレースホルダー文）:** screenshot — game / matchmaking
- **URL（Live site）:** #
- **LP（Details）:** #
- **Image:** （未設定）

### Work 03
- **No:** 03
- **Year:** 2024–
- **Title:** AI Workflow Automation
- **Role:** Full Stack
- **Summary:** (Sample) Business automation tooling with an embedded LLM. Add a 2–3 line project overview here.
- **Tags:** Python, LLM, GCP
- **Shot（プレースホルダー文）:** screenshot — AI tool UI
- **URL（Live site）:** #
- **LP（Details）:** #
- **Image:** （未設定）

### Work 04
- **No:** 04
- **Year:** 2025
- **Title:** Product Landing Page
- **Role:** Full Stack
- **Summary:** (Sample) A landing page / service site built end to end, from frontend to backend. Add an overview here.
- **Tags:** TypeScript, Hono, Vercel
- **Shot（プレースホルダー文）:** screenshot — landing page
- **URL（Live site）:** #
- **LP（Details）:** #
- **Image:** （未設定）

---

## 04 Partners

反映先: `app/routes/home.tsx`（section#partners）＋ `app/components/TopTalBadge.tsx`
- **Section intro:** Trusted by industry leaders.
- **バッジ内容（TopTal）:** TOP 3% TALENT / Vetted by Toptal / Hire me
- **Hire me リンク:** https://www.toptal.com/developers/resume/masayuki-tanaka#kV3Vwm

---

## 05 Contact

反映先: `app/routes/home.tsx`（section#contact）
- **Body:** Ready to get started? Let's discuss your project and see how we can help transform your business.
- **Button 1（label）:** Schedule a Consultation ↗
- **Button 1（link）:** #  ← 要設定（メール or 予約URL）
- **Button 2（label）:** GitHub ↗
- **Button 2（link）:** https://github.com/masayukitanaka
- **Copyright:** © 2026 {Brand} — {Domain}
