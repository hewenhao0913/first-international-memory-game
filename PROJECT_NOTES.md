# 第一國際端午翻牌遊戲交接筆記

這份檔案給之後的新 Codex 對話快速接手用。開始工作前請先讀這份，再讀 `index.html`、`styles.css`、`script.js` 的相關區塊。

## 專案位置

- 本機路徑：`/Users/hewenhao/Documents/First International/memory-first-international`
- GitHub Pages：`https://hewenhao0913.github.io/first-international-memory-game/`
- 最新測試連結格式：`https://hewenhao0913.github.io/first-international-memory-game/?v=版本號`
- 目前快取版本號：`v=22`

## 發布方式

Codex 這邊常常無法 `git push`，錯誤是 `Could not resolve host: github.com`。檔案修改與 commit 可由 Codex 完成，但發布通常要使用者在自己的終端機執行：

```bash
cd "/Users/hewenhao/Documents/First International/memory-first-international" && git push origin main
```

每次修改 CSS 或 JS 後，請同步更新 `index.html` 內的版本號，例如：

- `styles.css?v=18`
- `script.js?v=18`

這樣手機或 LINE 內建瀏覽器比較不會讀到舊快取。

## 目前遊戲方向

- 遊戲名稱與主標題：
  - `翻牌靠眼力・理財靠實力`
  - `第一國際端午記憶挑戰賽`
- 視覺風格：金色、深咖啡、橘紅、端午節、金融感。
- 要顯示第一國際 Logo 與大光扶輪社 Logo。
- 翻牌內容包含金融符號、端午元素、Lucas、第一國際圓形 Logo。
- 不要使用虛擬貨幣、股票、債券。
- 已改為有「保單」「香港」等圖形。
- Lucas 卡片是男性短髮半身人像，角色文字是「第一國際創辦人」。

## 遊戲規則

- 每消掉一對加 `1000` 分。
- 連擊有額外分數。
- 過關時會依剩餘時間給時間獎勵，目前是每剩 1 秒加 `50` 分。
- 預覽時間目前每關都是 `3000ms`。
- 有進度儲存，玩家回來可從目前關卡繼續，不會每次從第一關重來。
- 進度存在 `localStorage`。

## 關卡設定

目前在 `script.js` 的 `levels`：

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

注意：卡牌總數一定要是偶數，避免出現單張無法配對。

## 闖關說明頁

過關後會出現闖關說明頁，內容包含：

- 三顆星，依剩餘時間比例顯示滿星、半星、空星。
- `LEVEL + 數字`
- 目前分數
- 時間獎勵，顯示在目前分數下一行。
- 每關一句理財文案。
- 下一關資訊。
- 宗旨：
  `我們的宗旨:「運用優質之國際理財工具，協助人們達到財務自由之目的。」`
- 左右兩個按鈕：結束、下一關。

手機版闖關說明頁很容易超出螢幕，已針對 `max-width: 520px` 與 `max-height: 700px` 做矮螢幕樣式。後續改字體或按鈕時一定要重新測手機高度。

## 手機測試重點

使用者很在意手機完整顯示，尤其是 LINE 內建瀏覽器。修改後請至少測：

- `390 x 568`
- `360 x 500`
- `360 x 430`

重點檢查：

- 主畫面上方「關卡／分數／時間」看得到且夠大。
- 闖關說明頁不用上下滑也能看到星星、LEVEL、分數、說明、宗旨、兩個按鈕。
- 卡牌變多時，翻牌仍可操作，名稱不被遮住。

## 常用本機預覽

```bash
cd "/Users/hewenhao/Documents/First International/memory-first-international"
python3 -m http.server 4181
```

本機網址：

`http://127.0.0.1:4181/`

測完要關掉本機 server，避免背景佔用。

## 工作習慣

- 修改檔案後要做語法檢查：
  - `node --check script.js`
  - 用 Python HTMLParser 檢查 `index.html`
- 若修改 CSS/JS，記得更新 `index.html` 的版本號。
- 修改後 commit。
- push 若失敗，就請使用者在自己的終端機執行發布指令。
