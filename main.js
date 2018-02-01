document.addEventListener("DOMContentLoaded", () => {
  let form = $("form");
  $form.on("submit", () => {
    let $input = $("submit-button");
    $input.text("");
    alert("working");
  })
})