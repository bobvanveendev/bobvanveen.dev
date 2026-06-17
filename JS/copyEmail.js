export function initCopyEmail() {
  const btn = document.querySelector(".c-contact__email");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const email = btn.getAttribute("data-email") || "";

    function showFeedback() {
      btn.classList.add("is-copied");
      setTimeout(() => btn.classList.remove("is-copied"), 1800);
    }

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(showFeedback)
        .catch(showFeedback);
    } else {
      showFeedback(); // clipboard API unavailable — still acknowledge the click
    }
  });
}
