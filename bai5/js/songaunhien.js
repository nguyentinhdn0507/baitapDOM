var randomNumber = Math.floor(Math.random() * 10);

var p1Element = document.getElementsByTagName("p")[0];

p1Element.innerText = "Số vừa tạo ra là " + randomNumber;

var p2Element = document.getElementsByTagName("p")[1];
randomNumber % 2 == 1
  ? (p2Element.innerText = "Đây là số lẻ!")
  : (p2Element.innerText = "Đây là số chẵn!");
