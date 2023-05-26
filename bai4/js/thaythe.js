document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const chuoigoc = document.getElementById("chuoigoc").value;
  const tugoc = document.getElementById("tugoc").value;
  const tuthaythe = document.getElementById("tuthaythe").value;

  const doanthaythe = chuoigoc.replaceAll(tugoc, tuthaythe);
  const errorMessages = [];
  if (chuoigoc.trim() === "") {
    errorMessages.push("Vui lòng nhập đoạn văn gốc.");
  }
  if (tugoc.trim() === "") {
    errorMessages.push("Vui lòng nhập từ gốc.");
  }

  const errorElement = document.getElementById("error");
  errorElement.innerHTML = errorMessages
    .map((errorMessage) => `<p>${errorMessage}</p>`)
    .join("");

  if (errorMessages.length > 0) {
    return;
  }
  document.getElementById("doanthaythe").value = doanthaythe;
});
