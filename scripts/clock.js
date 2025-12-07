function renderClock() {
    const now = new Date();
    const timeStr = new Intl.DateTimeFormat("es-CO", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).format(now);
    const dateStr = new Intl.DateTimeFormat("es-CO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(now);
    document.getElementById("time").textContent = timeStr;
    document.getElementById("date").textContent =
        dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
}
setInterval(renderClock, 1000);
renderClock();
