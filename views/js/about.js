const cards = document.querySelectorAll(".team-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");

        // đóng tất cả thẻ khác
        cards.forEach(c => c.classList.remove("open"));

        // nếu thẻ đang đóng → mở nó
        if (!isOpen) {
            card.classList.add("open");
        }
    });
});
