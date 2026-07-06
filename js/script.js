// ABOUTページのメニュータブ切り替え
const menuButtons = document.querySelectorAll(".menu-tabs button");
const menuItems = document.querySelectorAll(".menu-item");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    menuButtons.forEach((btn) => {
      btn.classList.remove("is-active");
    });

    button.classList.add("is-active");

    menuItems.forEach((item) => {
      if (item.dataset.category === filter) {
        item.classList.remove("is-hidden");
      } else {
        item.classList.add("is-hidden");
      }
    });
  });
});

menuItems.forEach((item) => {
  if (item.dataset.category !== "coffee") {
    item.classList.add("is-hidden");
  }
});

const calendarBody = document.getElementById("calendarBody");
const calendarTitle = document.getElementById("calendarTitle");
const calendarPrev = document.getElementById("calendarPrev");
const calendarNext = document.getElementById("calendarNext");

if (calendarBody && calendarTitle && calendarPrev && calendarNext) {
  const calendarYear = 2026;

  // 2026年1月〜7月のみ表示
  // JavaScriptでは 0 = 1月, 1 = 2月, ... 6 = 7月
  const startMonth = 0;
  const endMonth = 6;

  let currentMonth = startMonth;

  // 0: 日曜, 1: 月曜, 2: 火曜
  const closedWeekday = 2;

  // 臨時休業日を入れたい場合はここに追加
  const specialClosedDates = [
    // "2026-01-01",
    // "2026-05-06",
  ];

  function formatDate(year, month, day) {
    const monthText = String(month + 1).padStart(2, "0");
    const dayText = String(day).padStart(2, "0");
    return `${year}-${monthText}-${dayText}`;
  }

  function renderCalendar(month) {
    calendarBody.innerHTML = "";
    calendarTitle.textContent = `${calendarYear}年${month + 1}月`;

    const firstDate = new Date(calendarYear, month, 1);
    const lastDate = new Date(calendarYear, month + 1, 0);

    const firstDay = firstDate.getDay();
    const lastDay = lastDate.getDate();

    let day = 1;

    for (let week = 0; week < 6; week++) {
      const tr = document.createElement("tr");

      for (let weekday = 0; weekday < 7; weekday++) {
        const td = document.createElement("td");

        if ((week === 0 && weekday < firstDay) || day > lastDay) {
          td.classList.add("is-empty");
          td.textContent = "";
        } else {
          const dateText = formatDate(calendarYear, month, day);
          const isClosed =
            weekday === closedWeekday || specialClosedDates.includes(dateText);

          td.textContent = day;

          if (isClosed) {
            td.classList.add("is-closed");
          }

          day++;
        }

        tr.appendChild(td);
      }

      calendarBody.appendChild(tr);

      if (day > lastDay) {
        break;
      }
    }

    calendarPrev.disabled = month === startMonth;
    calendarNext.disabled = month === endMonth;
  }

  calendarPrev.addEventListener("click", () => {
    if (currentMonth > startMonth) {
      currentMonth--;
      renderCalendar(currentMonth);
    }
  });

  calendarNext.addEventListener("click", () => {
    if (currentMonth < endMonth) {
      currentMonth++;
      renderCalendar(currentMonth);
    }
  });

  renderCalendar(currentMonth);
}

/* =========================================================
   script.js — スマホのハンバーガーメニュー開閉
   classList.toggle / addEventListener / aria の実戦版
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
