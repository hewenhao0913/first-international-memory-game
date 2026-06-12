# 翻牌小遊戲開發模板

這份檔案是給之後開發同類型「記憶翻牌小遊戲」使用的共用規格。之後使用者說「開發翻牌小遊戲」時，請先讀這份檔案，再依照新的主題、圖片、Logo、文字內容做替換。

## 快速啟動語

新對話可直接貼：

```text
請先看 /Users/hewenhao/Documents/First International/memory-first-international/FLIP_GAME_TEMPLATE.md。
我要開發翻牌小遊戲，沿用這個架構，但圖片、Logo、卡牌圖案、文字與配色要依新主題更換。
```

## 核心定位

- 類型：手機優先的記憶翻牌遊戲。
- 玩法：玩家先短暫預覽牌面，再翻開兩張，配對相同圖案。
- 主要目的：用簡單互動提高活動、品牌、節慶或宣傳內容的參與感。
- 適合主題：企業活動、節慶活動、品牌宣傳、醫療體系、金融教育、公益社團、校園活動。

## 必要檔案結構

建議每個新版本使用獨立資料夾：

```text
memory-{project-name}/
  index.html
  styles.css
  script.js
  PROJECT_NOTES.md
  FLIP_GAME_TEMPLATE.md
  assets/
    logos/
    images/
```

目前第一國際版專案位置：

```text
/Users/hewenhao/Documents/First International/memory-first-international
```

## 可替換內容

新遊戲通常只需要替換這些部分：

- 遊戲標題與副標題。
- 主 Logo、合作 Logo。
- 卡牌圖案與卡牌名稱。
- 卡牌角色文字，例如英文、中文說明、人物稱謂。
- 主色系與背景質感。
- 關卡通關文案。
- 宗旨、標語、活動口號。
- 關卡數量、時間、難度。
- GitHub Pages repo 名稱與網址。

## 遊戲規則預設

預設規則可沿用：

- 每配對一組加 `1000` 分。
- 連擊可額外加分。
- 翻錯扣分，目前可用 `-100`。
- 過關時依剩餘時間給時間獎勵，目前是每剩 1 秒加 `50` 分。
- 每關開始前預覽牌面 `3000ms`。
- 每關都有失誤上限。
- 卡牌總數一定要是偶數，避免出現無法配對的單張牌。

## 關卡結構範例

目前常用 8 關：

```js
[
  { rows: 2, cols: 2, time: 45, preview: 3000, maxMiss: 7 },
  { rows: 2, cols: 3, time: 55, preview: 3000, maxMiss: 10 },
  { rows: 3, cols: 4, time: 85, preview: 3000, maxMiss: 18 },
  { rows: 4, cols: 4, time: 105, preview: 3000, maxMiss: 24 },
  { rows: 4, cols: 5, time: 130, preview: 3000, maxMiss: 30 },
  { rows: 5, cols: 6, time: 170, preview: 3000, maxMiss: 42 },
  { rows: 6, cols: 6, time: 210, preview: 3000, maxMiss: 48 },
  { rows: 6, cols: 8, time: 270, preview: 3000, maxMiss: 65 }
]
```

若手機畫面塞不下，優先調整：

- `mobileCols`
- 卡牌 `aspect-ratio`
- 卡牌間距 `gap`
- 外框 padding
- 底部安全距離

## 主畫面版面

手機版主畫面應維持同一條左右基準線：

- 上方 Logo + 標題框。
- 關卡 / 分數 / 時間 / 暫停按鈕。
- 遊戲主框。
- 底部統計列。
- 主畫面宗旨或標語。

目前建議手機版外層：

- `game-shell` 使用固定手機框架寬度。
- 最大寬度可限制在約 `430px`。
- 左右保留少量 padding。
- 底部要留安全距離，避免被 LINE 或手機瀏覽器工具列蓋住。

## 上方狀態列

狀態列通常包含：

- 關卡。
- 分數。
- 時間。
- 暫停 / 繼續按鈕。

注意事項：

- 分數數字不能太大，否則五位數、六位數會爆框。
- 分數應 `white-space: nowrap`。
- 時間框可較窄，分數框可較寬。
- 暫停按鈕可做成大圖示按鈕。

## 卡牌設計

每張卡牌建議包含：

- 背面：統一圖案或 Logo 符號。
- 正面：主圖形、名稱、角色文字。
- 圖形可用 SVG、圖片、Logo 或人物卡通圖。

卡牌資料通常在 `script.js` 的陣列中，例如：

```js
{ id: "sample", name: "名稱", role: "說明", label: "符號", bg: "#f6d487", accent: "#c49a20", kind: "custom" }
```

若是新主題，只要替換這批資料與 `symbolSvg()` 裡的圖形生成邏輯。

## 闖關說明頁

過關後的說明頁通常包含：

- 三顆星。
- `LEVEL + 數字`。
- 目前分數。
- 時間獎勵。
- 每關一句座右銘或活動文案。
- 下一關資訊。
- 左右兩個按鈕：結束、下一關。

目前設計決策：

- 過關說明頁不放宗旨文字，避免擠壓畫面。
- 座右銘文字要大到手機上清楚可讀。
- 手機矮螢幕要針對 `max-height` 做專用 CSS。

## Game Over / 時間到視窗

Game Over 或時間到視窗建議包含：

- 三顆空星或失敗狀態。
- 失敗原因，例如 `失誤太多`、`時間到`。
- 到達第幾關與總分。
- 鼓勵文字。
- 目前分數，字要明顯。
- 宗旨或品牌理念可放兩行：

```text
我們的宗旨：
運用優質之國際理財工具，協助人們達到財務自由之目的。
```

按鈕文字建議：

- 結束
- 再來一次

不要用「重新開始」作為主要文字，使用者目前偏好「再來一次」。

## 進度邏輯

目前第一國際版的決策：

- 每次從正式連結進入都從第一關開始。
- 頁面載入時清除暫存進度。
- 遊戲過程仍可使用狀態管理，但不要讓使用者下次進入時停在中途關卡。

如果新遊戲需要接續進度，可以再改回讀取 `localStorage`。

## 手機測試重點

每次改版都要至少檢查：

- `390 x 568`
- `360 x 500`
- `360 x 430`

重點檢查：

- 上方 Logo 是否在黃色框中置中。
- 標題文字是否沒有超出。
- 狀態列是否同寬置中。
- 分數高時是否不爆框。
- 第 1 關、4 關、6 關以後卡牌是否能操作。
- 底部統計列是否不被 LINE 或手機瀏覽器工具列蓋住。
- 闖關說明頁是否完整顯示。
- Game Over 視窗文字是否看得清楚。

## 發布與快取

每次修改 CSS 或 JS 後，都要更新 `index.html` 內版本號：

```html
<link rel="stylesheet" href="styles.css?v=新版本" />
<script src="script.js?v=新版本"></script>
```

測試連結也要帶版本號，例如：

```text
https://hewenhao0913.github.io/first-international-memory-game/?v=28
```

## Git 工作流程

每次改完：

```bash
node --check script.js
```

並用 HTML parser 檢查 `index.html`。

確認後：

```bash
git add index.html styles.css script.js PROJECT_NOTES.md FLIP_GAME_TEMPLATE.md
git commit -m "描述此次修改"
git push origin main
```

目前 Codex 已可執行 `git push origin main`。

## 下次開發新版本時的做法

如果使用者說「開發翻牌小遊戲」，建議流程：

1. 先讀這份 `FLIP_GAME_TEMPLATE.md`。
2. 詢問或確認新主題：
   - 遊戲名稱
   - Logo
   - 卡牌內容
   - 顏色風格
   - 通關文案
   - GitHub repo 名稱
3. 複製現有專案架構到新資料夾。
4. 替換圖片、文字、卡牌資料與配色。
5. 手機尺寸測試。
6. 建立新 GitHub Pages 連結。

## 第一國際版目前狀態

- 目前版本號：`v=28`
- GitHub Pages：
  `https://hewenhao0913.github.io/first-international-memory-game/?v=28`
- 最新設計重點：
  - 金色、深咖啡、橘紅、端午節、金融感。
  - 每次進入從第一關開始。
  - Game Over 按鈕是「再來一次」。
  - 過關說明頁不放宗旨。
  - Game Over / 時間到視窗放兩行宗旨。
