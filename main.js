document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => {
      $("#form").on("submit", () => {
    $("#email").val("");
  });
  }, 0)
});