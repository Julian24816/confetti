// spawn via get parameter
const params = new URLSearchParams(window.location.search);
if (params.has("confetti")) confetti(parseInt(params.get("confetti")));
if (params.has("text")) confetti.text = params.get("text");
if (!params.has("confetti")&&!params.has("text")) window.location.href = window.location + "?confetti=1000&text=Welcome"

// spawn via click
document.addEventListener("click", ev => {
    confetti(100, new confetti.ExplosionSpawn(new confetti.Vec2(ev.clientX, ev.clientY)))
});
