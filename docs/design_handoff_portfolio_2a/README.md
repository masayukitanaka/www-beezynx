# Handoff: ポートフォリオサイト刷新 — デザイン案「2a Docs」

## Overview
フルスタックエンジニア（Masayuki Tanaka）用のポートフォリオサイトを作り直します。次の **2サイトに同じデザインを使い、サイト名だけを変えます**。

| サイト | 表示名 (brand) | マーク (mark) | ドメイン |
|---|---|---|---|
| フリーランス | `Beezynx` | `BX` | beezynx.dev |
| 個人 | `Masayuki Tanaka` | `MT` | masayukitanaka.github.io |

コンセプトは「技術ドキュメント風」です。落ち着いた明るいベース色を使い、装飾は最小限にします。実績（ポートフォリオ）を主役にし、スクショと簡潔な説明だけを載せます。詳細は外部URL（実サイト／LP）へのリンクで見せます。コンテンツが増えてもうるさくならない構成にしてください。

## About the Design Files
同梱の HTML は **HTMLで作ったデザインの参照用プロトタイプ** です。本番コードとしてそのまま使わないでください。
対象の環境（推奨：Astro または Next.js の静的出力。GitHub Pages / Vercel にデプロイ）で、確立されたパターンに従って**作り直して**ください。
- `Portfolio 2a.dc.html` をブラウザで開くと、採用デザイン（2a）の1ページが表示されます。
- 参照ファイルの実行には同じフォルダの `support.js` が必要です。

## Fidelity
**High-fidelity。** 色・タイポグラフィ・余白・挙動は確定です。ピクセル単位で再現してください。
プロトタイプは 1280px 幅のデスクトップ表示を基準に作っています。本番ではレスポンシブ化してください（後述）。

---

## Screens / Views
1ページ構成（シングルページ）です。上から順に次のセクションが並びます。

### 0. 全体レイアウト
- 背景色 `#f5f7f9`、文字色 `#171b1f`
- 本文フォント：`IBM Plex Sans`、日本語フォールバックは `Noto Sans JP`
- ナビの下は 2カラムのグリッドです。
  - `grid-template-columns: 220px minmax(0,1fr)` / `gap: 64px` / 左右パディング `40px`
  - 左：サイドバー目次（sticky）
  - 右：メインコンテンツ（`max-width: 900px`、`padding-bottom: 40px`）

### 1. ナビゲーション（Header / Nav）
- `position: sticky; top: 0; z-index: 20`、高さ `60px`、左右パディング `40px`
- 背景 `rgba(245,247,249,0.9)` + `backdrop-filter: blur(10px)`、下線 `1px solid #dcdee1`
- 左右に振り分け（`justify-content: space-between`）。
- **左：ロゴ**（`gap: 10px`）
  - マーク：`{mark}`。IBM Plex Mono 500 / 12px、パディング `4px 7px`、背景 `#171b1f`、文字 `#ffffff`、角丸 `3px`
  - サイト名：`{brand}`。600 / 16px
- **右：リンク群**（`gap: 28px`、14px、色 `#51565b`）
  - `Works` `Stack` `Services` `GitHub ↗`（https://github.com/masayukitanaka）
  - `Contact` ボタン：パディング `8px 14px`、枠線 `1px solid #cbced1`、角丸 `6px`、文字 `#171b1f`

### 2. サイドバー目次（Aside）
- `position: sticky; top: 60px; align-self: start; padding-top: 72px`
- 縦並び（`gap: 12px`）。IBM Plex Mono 400 / 13px、色 `#5f6469`
- 項目：`— Overview`（現在地。色 `#171b1f`）、`01 Works`、`02 Stack`、`03 Services`、`04 Contact`
- 実装時の挙動：各項目はページ内アンカーにします。IntersectionObserver で、表示中のセクションの項目を `#171b1f` にしてください。

### 3. ヒーロー（Overview）
- コンテナ：`padding: 72px 0 64px`、縦並び（`gap: 22px`）、下線 `1px solid #dcdee1`
- パララックス：スクロール量 × **0.12** だけ下に移動させます（`translateY(scrollY * 0.12)`）。
- 中身は **テキスト層 + ASCII アート層** の重ね構成で、ラッパーは `position: relative; min-height: 400px` です。

**テキスト層**（`position: relative; z-index: 1; max-width: 330px`、縦並び、`gap: 22px`）
- 小見出し `Full Stack Engineer`：IBM Plex Mono 400 / 13px、色 `#32669a`
- H1 `Backend-first full stack engineering.`：500 / 48px、line-height 1.15、letter-spacing -0.02em。3行に折り返します。
- リード文（16px、line-height 1.9、色 `#51565b`）：
  > 15年以上、数百万ユーザー規模のAPI・マイクロサービス・クラウド基盤を設計／運用。フロントからインフラまで一貫して担当します。

**キービジュアル：ASCII 海岸アート**（`<figure aria-label="ASCII art of a coastline">`）
- `position: absolute; right: -24px; top: -24px; z-index: 0`
- フォント：IBM Plex Mono 400 / **23px** / line-height **1.15** / letter-spacing 0
- 各行は `white-space: pre` で、42桁 × 14行です。表示サイズは約 580 × 390px。
- 行ごとに色を変えます。アートの元データは下記です（空白も含めて正確に再現してください）。

```
                                .-~~-.        ← sun  #ba7331
      .              .         (      )       ← sun  #ba7331
                                '-..-'        ← sun  #ba7331
  .          .                     .          ← sky  #82878c
~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-    ← sea  #32669a
   ~~    ~~~      ~~      ~~~~     ~~         ← sea
 ~~~~  ~~    ~~~~    ~~~      ~~~    ~~~~     ← sea
~~   ~~~~  ~~    ~~~~   ~~~~~   ~~~~   ~~     ← sea
  ~~~~   ~~~~~~    ~~~~~    ~~~~~~   ~~~~     ← sea
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    ← sea
 _.--~~--._.--~~--._.--~~--._.--~~--._.--~    ← foam #7fa5b8
  .  ,  .   ,   .  ,   .  ,  .   ,  .   ,     ← sand #988265
.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:    ← sand
::::::::::::::::::::::::::::::::::::::::::    ← sand
```
（矢印以降は注記です。各行は42文字で、末尾の空白も含みます。正確なデータは参照ファイルのロジック内 `coast` 配列にあります。）
- キャプション `~/coast.txt`：IBM Plex Mono 10px、色 `#7c8186`、右寄せ、アートとの間は `gap: 8px`
- **今後の予定**：波の行（sea / foam）をアニメーションさせます。行を文字列配列として持ち、一定間隔で文字をシフトする実装を想定しています。今回は静止状態でOKですが、行データを配列で持つ構造にしておいてください。`prefers-reduced-motion` のときは静止させます。

**スペック表（dl）** — ヒーローの下部・全幅
- `display: grid; grid-template-columns: repeat(4, minmax(0,1fr))`、枠線 `1px solid #dcdee1`、角丸 `8px`、`overflow: hidden`、上マージン `8px`
- 各セルはパディング `14px 16px`、セル間に縦線 `1px solid #dcdee1`
- dt：IBM Plex Mono 11px、色 `#6d7277`／dd：14px、上マージン 6px

| dt | dd |
|---|---|
| Experience | 15+ years |
| Core | Go · PHP · Python · TS |
| Cloud | AWS · GCP |
| Language | 日本語 · English |

### 4. 01 Works（メインコンテンツ）
- セクション：`padding: 56px 0 24px`
- 見出し `01 Works`：500 / 24px、下マージン 8px
- **実績カード**（1件＝1行、件数は可変）
  - `display: grid; grid-template-columns: 320px minmax(0,1fr); gap: 32px; padding: 32px 0`、下線 `1px solid #e2e5e7`
  - **サムネイル**（リンク＝実サイトURL）：高さ `200px`、角丸 `6px`、枠線 `1px solid #d5d8db`、`overflow: hidden`
    - 内部の画像は枠より上下に 30px ずつ大きくします（`top: -30px; height: 260px`）。**要素単位のパララックス**を付けます（後述）。
    - 画像は `object-fit: cover` のスクショを想定しています。プロトタイプでは斜線ストライプ（`#e9ebee` / `#e2e5e7`、8px 間隔）のプレースホルダーです。
  - **テキスト側**（縦並び、`gap: 12px`）
    - メタ行：左に番号（`01`）、右に期間（`2022–2023`）。IBM Plex Mono 12px、色 `#5f6469`
    - タイトル：500 / 21px
    - 説明：14px、line-height 1.85、色 `#494e52`。2〜3行程度に収めます。
    - 属性表：`grid-template-columns: 72px 1fr; row-gap: 6px`、13px
      - ラベル `Role` / `Stack`：IBM Plex Mono 12px、色 `#6d7277`
      - Stack のチップ：`<code>`、IBM Plex Mono 12px、パディング `2px 6px`、背景 `#e9ebee`、角丸 `3px`、`gap: 6px`、折り返しあり
    - リンク：`Live site ↗`（実サイト）と `Details ↗`（LP／詳細ページ）。14px / 500、色 `#23588a`、`gap: 20px`。外部リンクは `target="_blank" rel="noopener"` にします。

**実績データ**（データファイル化を推奨。例：`works.json` / Content Collections）

| no | title | year | role | 説明 | stack |
|---|---|---|---|---|---|
| 01 | UGC Asynchronous Processing Platform | 2022–2023 | Full Stack (Backend focus) | 2000年代から続くレガシーをGoのマイクロサービスとAWS Step Functionsで刷新。メディア処理時間を70%短縮、20倍のピークにも耐える構成に。 | Go, PHP, AWS Step Functions |
| 02 | Fighting Game Backend Platform | 2016–2022 | Backend / API Design | 数百万人がプレイする対戦格闘ゲームのAPI基盤。平均応答30ms、マッチング待ち時間を40%短縮。 | PHP Symfony, AWS, REST API |
| 03 | AI Workflow Automation（仮） | 2024– | Full Stack | （仮）LLMを組み込んだ業務自動化ツール。 | Python, LLM, GCP |
| 04 | Product Landing Page（仮） | 2025 | Full Stack | （仮）LP／サービスサイト。 | TypeScript, Hono, Vercel |

03・04 はダミーです。各案件には `url`（実サイト）、`lp`（詳細）、`image`（スクショ）が必要です（現在は未設定）。

### 5. 02 Stack
- セクション：`padding: 48px 0`、見出し `02 Stack`（500 / 24px、下マージン 20px）
- 表：枠線 `1px solid #dcdee1`、角丸 `8px`、14px
- 各行：`grid-template-columns: 200px 1fr; padding: 14px 18px`、行間に `1px solid #e2e5e7`。ラベル色は `#5f6469`

| ラベル | 内容 |
|---|---|
| Languages | Go (Gin, Echo) · PHP (Laravel, Symfony) · Python (FastAPI, Django) · TypeScript (Express, Hono) |
| Cloud / Infra | AWS · GCP · Docker · Kubernetes · Terraform |
| Databases | MySQL · PostgreSQL · MongoDB · Redis · BigQuery · DynamoDB |
| Testing / CI | Jest · Pytest · PHPUnit · GitHub Actions · GitLab CI |

> 目次には「03 Services」がありますが、プロトタイプには Services セクションの本体がありません。実装するなら Stack 表と同じ形式で、Software Development / AI & Automation / Consulting の3行にしてください。

### 6. 04 Contact / Footer
- セクション：`padding: 48px 0`、上線 `1px solid #dcdee1`、縦並び（`gap: 16px`）
- 見出し `04 Contact`（500 / 24px）
- 本文：`リモート中心、日本語・英語どちらでも対応可能です。`（15px、色 `#51565b`）
- ボタン（`gap: 12px`、14px、パディング `12px 18px`、角丸 `6px`）
  - `Email ↗`：背景 `#171b1f`、文字 `#fff`（mailto:masayuki.tanaka.swe@gmail.com）
  - `GitHub ↗` / `LinkedIn ↗`：枠線 `1px solid #cbced1`
    - LinkedIn：https://www.linkedin.com/in/masayuki-tanaka-bb45a256/
- コピーライト：`© 2026 {brand} — {domain}`。IBM Plex Mono 12px、色 `#6d7277`、上マージン 40px

---

## Interactions & Behavior
| 対象 | 挙動 |
|---|---|
| ヒーロー全体 | パララックス `translateY(scrollY × 0.12)` |
| 実績サムネイル内の画像 | 要素単位のパララックス。枠の中心とビューポート中心の差を `off` として、`translateY(-off × 0.1)` だけ動かします。**移動量ははみ出し分（上下30px）でクランプ**し、枠内に空白が出ないようにします。 |
| 実績カード（`data-reveal`） | ビューポート下端から 92% の位置に入ったら表示します。`opacity 0→1` と `translateY(40px→0)` を、`0.9s` で変化させます（opacity は ease、transform は `cubic-bezier(.2,.7,.2,1)`）。 |
| ナビ／サイドバー | sticky。サイドバーは表示中セクションをハイライトします（実装時に追加）。 |
| リンク hover | `opacity: .85` |

- スクロール処理は `requestAnimationFrame` で間引き、`passive: true` にしてください。
- `prefers-reduced-motion: reduce` のときは、パララックスとフェードを無効にします。

## Responsive（プロトタイプはデスクトップ基準のため指針）
- **≥1024px**：設計どおり（サイドバー 220px + メイン）
- **768–1023px**：サイドバーを非表示にし、メインは全幅にします。スペック表は2列、ASCII アートは `font-size: 16px` にします。
- **<768px**：ASCII アートはヒーロー内で通常フロー（テキストの上）に置き、`font-size: clamp(9px, 2.6vw, 14px)` にします。H1 は 34px、実績カードは1列（サムネイルが上・全幅・高さ 200px）、スペック表は2列、ナビのリンクはハンバーガー（または Works / Contact のみ）にします。

## State Management
- 必要なのはビルド時の設定だけです：`SITE = 'freelance' | 'personal'`（環境変数 `PUBLIC_SITE` など）
  - `brand` / `mark` / `domain` を出し分けます（冒頭の表を参照）。
  - `<title>`、OGP、favicon（マーク文字）も同様に出し分けます。
- 同じリポジトリから2つのビルドを出すことを推奨します（例：GitHub Actions のマトリクスで `freelance` → Vercel、`personal` → GitHub Pages）。
- 実績・スタックはデータファイルで管理します。ランタイムの状態はスクロール処理だけです。

## Design Tokens
**Colors**
| Token | Hex | 用途 |
|---|---|---|
| bg | `#f5f7f9` | ページ背景 |
| ink | `#171b1f` | 本文・見出し・黒ボタン |
| text-muted | `#51565b` | リード文・ナビリンク |
| text-sub | `#5f6469` | メタ・目次 |
| text-label | `#6d7277` | dt・ラベル・コピーライト |
| text-body | `#494e52` | 実績説明 |
| line | `#dcdee1` | 主要な区切り線 |
| line-soft | `#e2e5e7` | カード間・表の行間 |
| border-btn | `#cbced1` | アウトラインボタン |
| border-thumb | `#d5d8db` | サムネイル枠 |
| chip | `#e9ebee` | コードチップ背景 |
| accent | `#32669a` | 小見出し・海 |
| link | `#23588a` | 実績リンク |
| ascii-sun | `#ba7331` | |
| ascii-sky | `#82878c` | |
| ascii-foam | `#7fa5b8` | |
| ascii-sand | `#988265` | |

（元の値は oklch で定義しています。例：bg = `oklch(0.975 0.003 250)`、accent = `oklch(0.5 0.1 250)`。CSS では oklch のまま使ってもかまいません。）

**Typography**
- Sans：`IBM Plex Sans`（400/500/600）＋ `Noto Sans JP`（400/500/700）
- Mono：`IBM Plex Mono`（400/500）
- スケール：48（H1）/ 24（H2）/ 21（実績タイトル）/ 16（リード）/ 15 / 14（本文）/ 13 / 12 / 11 / 10（キャプション）
- 行間：見出し 1.15、本文 1.85–1.9

**Spacing**：4 / 6 / 8 / 12 / 14 / 16 / 20 / 22 / 28 / 32 / 40 / 48 / 56 / 64 / 72
**Radius**：3（マーク・チップ）/ 6（ボタン・サムネイル）/ 8（表・dl）
**Shadow**：なし（区切りは線だけ）

## Assets
- 実績スクショ：未支給です（プレースホルダー）。推奨比率 16:10、幅 1280px 以上、WebP。
- ASCII アート：テキストデータです（上記）。
- フォント：Google Fonts。
- アイコン：なし（`↗` は文字）。

## Files
- `Portfolio 2a.dc.html`：デザイン参照（採用案のみ）。ロジック内の `coast` 配列（ASCII データ）、`works` 配列（実績データ）、`update()`（パララックス／リビールの計算）が実装の参考になります。
- `support.js`：参照ファイルの表示用ランタイムです（本番では不要）。
