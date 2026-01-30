const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yay.html";
  });
}

if (noBtn) {
  const dodge = () => {
    const padding = 18;

    const rect = noBtn.getBoundingClientRect();
    const btnW = rect.width || 140;
    const btnH = rect.height || 48;

    const maxX = Math.max(padding, window.innerWidth - btnW - padding);
    const maxY = Math.max(padding, window.innerHeight - btnH - padding);

    const x = Math.floor(padding + Math.random() * (maxX - padding));
    const y = Math.floor(padding + Math.random() * (maxY - padding));

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  };

  dodge();

  noBtn.addEventListener("mouseenter", dodge);
  noBtn.addEventListener("mousemove", dodge);

  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); 
    dodge();
  }, { passive: false });

  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dodge();
  });

  window.addEventListener("resize", dodge);
}
