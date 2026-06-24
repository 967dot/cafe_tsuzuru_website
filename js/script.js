/* =========================================================
   script.js — スマホのハンバーガーメニュー開閉
   学んだ classList.toggle / addEventListener / aria の実戦版
   ========================================================= */

const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

// 開閉を切り替える関数（開く・閉じる両方をこれ1つで）
function toggleNav() {
  const isOpen = navList.classList.toggle("is-open"); // 付いてなければ付け、付いてれば外す
  hamburger.classList.toggle("is-active", isOpen); // ボタンを×印に変形
  hamburger.setAttribute("aria-expanded", isOpen); // 支援技術に開閉状態を伝える
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く",
  );
}

// ハンバーガーを押したら開閉
hamburger.addEventListener("click", toggleNav);

// メニュー内のリンクを押したら自動で閉じる
navList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navList.classList.contains("is-open")) toggleNav();
  });
});

// Escキーで閉じる
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navList.classList.contains("is-open")) toggleNav();
});
