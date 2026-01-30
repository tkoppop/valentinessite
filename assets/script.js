const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yay.html";
  });
}

if (noBtn) {
  // Move the button somewhere else on the screen
  const dodge = () => {
    const padding = 18;

    // Ensure the button has measurable size
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

  // Start somewhere fun so it doesn't overlap the Yes button forever
  dodge();

  // Desktop: dodge on hover / approach
  noBtn.addEventListener("mouseenter", dodge);
  noBtn.addEventListener("mousemove", dodge);

  // Mobile: dodge on touch
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // stops the "click" from firing on mobile
    dodge();
  }, { passive: false });

  // If a click event somehow triggers anyway, block it and dodge again
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dodge();
  });

  // If the window resizes, keep it in bounds
  window.addEventListener("resize", dodge);
}
