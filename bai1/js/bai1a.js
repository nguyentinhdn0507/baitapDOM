document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const chieudai = document.getElementsByName("chieudai")[0].value;
  const chieurong = document.getElementsByName("chieurong")[0].value;

  const errorMessages = [];

  if (chieudai === "") {
    errorMessages.push("Vui lòng nhập chiều dài.");
  }
  if (chieurong === "") {
    errorMessages.push("Vui lòng nhập chiều rộng.");
  }

  const formMessageElements = [
    ...document.getElementsByClassName("form-message"),
  ];
  const errorMessagesHTML = formMessageElements.map((element, index) => {
    if (errorMessages[index]) {
      element.innerHTML = errorMessages[index];
      return errorMessages[index];
    } else {
      element.innerHTML = "";
      return "";
    }
  });
  if (errorMessagesHTML.some((errorMessage) => errorMessage !== "")) {
    return;
  }
  const dienTich = (chieudai * chieurong).toFixed(2);
  const chuVi = 2 * (parseInt(chieudai) + parseInt(chieurong));

  document.getElementById("result").innerHTML = `Diện tích: 
  ${dienTich} <br /> Chu vi: ${chuVi}`;

  document.getElementById("form").reset();
});
