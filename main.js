document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");
  form.on("submit", () => {
    let $input = $("submit-button");
    $input.text("");
    alert("working");
  })
})