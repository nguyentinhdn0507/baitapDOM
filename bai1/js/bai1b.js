document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const dayso = document.getElementsByName("dayso")[0].value;
  const errorMessages = [];
  if (dayso === "") {
    errorMessages.push("Vui lòng nhập dãy số.");
  }

  const formMessageElement = document.getElementsByClassName("form-message")[0];
  formMessageElement.innerHTML = "";
  if (errorMessages.length > 0) {
    formMessageElement.innerHTML = errorMessages[0];
    return;
  }

  const daysoArray = dayso.split(",").map(Number);
  const tong = daysoArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  document.getElementById("result").innerHTML = "Tổng: " + tong;
});
