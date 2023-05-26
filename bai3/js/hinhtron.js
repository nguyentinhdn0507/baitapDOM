document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const bankinhInput = document.getElementById("bankinh").value;
  const dientichInput = document.getElementById("dientich").value;

  const errorMessages = [];

  if (!bankinhInput && !dientichInput) {
    errorMessages.push("Vui lòng nhập bán kính hoặc diện tích.");
  } else if (bankinhInput && dientichInput) {
    errorMessages.push(
      "Vui lòng chỉ nhập bán kính hoặc diện tích (không nhập cả hai)."
    );
  } else {
    // Tính diện tích và bán kính
    const banKinh = parseFloat(bankinhInput);
    const dienTich = parseFloat(dientichInput);

    if (bankinhInput) {
      document.getElementById("dientich").value =
        Math.PI * Math.pow(banKinh, 2).toFixed(2);
    } else {
      document.getElementById("bankinh").value = Math.sqrt(
        dienTich / Math.PI
      ).toFixed(2);
    }
  }
  const errorElement = document.getElementById("error");
  errorElement.innerHTML = errorMessages
    .map((errorMessage) => `<p>${errorMessage}</p>`)
    .join("");
});
