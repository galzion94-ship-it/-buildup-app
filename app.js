// רשימת המונחים לחיפוש
const searchData = [
    { name: "Kitchens", he: "מטבחים", link: "cabinets.html" },
    { name: "Countertops", he: "משטחי עבודה", link: "countertops.html" },
    { name: "Flooring", he: "ריצוף", link: "flooring.html" },
    { name: "Foundation", he: "יסודות", link: "foundation.html" },
    { name: "Windows", he: "חלונות", link: "windows.html" },
    { name: "Drywall", he: "קירות וצבע", link: "drywall.html" },
    { name: "Checklist", he: "צ'ק ליסט", link: "checklist.html" }
];

// פונקציית חיפוש
function initSearch() {
    const input = document.querySelector('input[type="text"]');
    if (!input) return;

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const term = input.value.toLowerCase();
            const result = searchData.find(item => 
                item.name.toLowerCase().includes(term) || item.he.includes(term)
            );
            if (result) window.location.href = result.link;
            else alert("לא נמצאו תוצאות / No results found");
        }
    });
}

// פונקציית תרגום (פשוטה)
function initLanguage() {
    const langBtn = document.querySelector('button, span'); // מחפש את כפתור HE/EN
    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
        const isHe = document.documentElement.dir === "rtl";
        if (isHe) {
            document.documentElement.dir = "ltr";
            document.documentElement.lang = "en";
            // כאן אפשר להוסיף לוגיקה שמחליפה טקסטים ספציפיים אם תרצה בעתיד
        } else {
            document.documentElement.dir = "rtl";
            document.documentElement.lang = "he";
        }
    });
}

// הפעלה בטעינה
document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initLanguage();
});
