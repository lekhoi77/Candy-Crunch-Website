const cards = document.querySelectorAll(".team-card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        // Nếu card đang mở → không làm gì (giữ nguyên 1 thẻ mở)
        if (card.classList.contains("open")) return;

        // Đóng tất cả thẻ
        cards.forEach(c => c.classList.remove("open"));

        // Mở thẻ được click
        card.classList.add("open");
    });
});
