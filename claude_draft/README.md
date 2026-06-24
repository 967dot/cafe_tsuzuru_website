# 喫茶 綴ル — サイト一式（ラフ案）

ワイヤーフレームを元にした、HTML/CSS/JS のたたき台です。

## フォルダ構成
```
kissa-tsuzuru/
├── index.html      … Top（※トップは必ず index.html）
├── about.html      … About
├── coffee.html     … Menu（Coffee）
├── books.html      … Library（Books）
├── event.html      … Event
├── access.html     … Access
├── contact.html    … Contact / 予約（任意の7枚目）
├── css/
│   ├── reset.css   … 最小リセット（ress.css に差し替え可）
│   └── style.css   … 共通スタイル＋各ページ。色はここの :root 変数で一括管理
├── js/
│   └── script.js   … スマホのハンバーガーメニュー
└── img/            … 画像を入れる場所（今は空。グレーの IMAGE 箱が仮）
```

## 使い方
1. このフォルダごと VS Code で開く
2. `index.html` を Live Server 等で開いて確認
3. 画像は `img/` に入れ、各ページの `<div class="placeholder"></div>` を
   `<img src="img/〇〇.jpg" alt="説明">` に置き換える

## 色・フォントを直したいとき
`css/style.css` の冒頭 `:root { ... }` の変数を書き換えるだけで全ページに反映されます。

## 注意
- ヘッダーとフッターは各HTMLに同じものを書いています（静的サイトのため）。
  直すときは全ファイルで揃えて直してください。
- contact.html のフォームは、このままでは送信されません（送信にはバックエンド
  またはフォームサービスが必要）。
