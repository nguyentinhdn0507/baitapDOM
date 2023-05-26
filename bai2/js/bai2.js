document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const hotenInput = document.getElementsByName("hoten")[0].value;
  const errorMessages = [];
  if (hotenInput === "") {
    errorMessages.push("Vui lòng nhập tên.");
  }

  const formMessageElements = [
    ...document.getElementsByClassName("form-message"),
  ];
  const errorMessagesHTML = errorMessages.map((errorMessage, index) => {
    formMessageElements[index].innerHTML = errorMessage;
    return errorMessage;
  });

  if (errorMessagesHTML.length > 0) {
    return;
  }

  const greeting = `Câu chào : chào Bạn ${hotenInput}`;
  document.getElementById("greeting").textContent = greeting;
});
