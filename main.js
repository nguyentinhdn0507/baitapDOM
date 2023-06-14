const students = [
  {
    id: 1,
    name: "Dinh",
    toan: 5,
    ly: 6,
    hoa: 7,
  },
  {
    id: 2,
    name: "Nam",
    toan: 10,
    ly: 8,
    hoa: 5,
  },
  {
    id: 3,
    name: "Tan",
    toan: 3,
    ly: 5,
    hoa: 5,
  },
  {
    id: 4,
    name: "Hung",
    toan: 9,
    ly: 7,
    hoa: 7,
  },
  {
    id: 5,
    name: "Tri",
    toan: 9,
    ly: 8,
    hoa: 9,
  },
  {
    id: 6,
    name: "Anh",
    toan: 9,
    ly: 10,
    hoa: 9,
  },
  {
    id: 7,
    name: "Binh",
    toan: 3,
    ly: 8,
    hoa: 9,
  },
];

const tbElement = document.querySelector("#tbl");

renderHTML(students, tbElement);

function renderHTML(arr, tbEl) {
  tbEl.innerHTML = "";
  // Tiêu đề
  const tr1Element = document.createElement("tr");

  var htmlTitle = "";
  for (const key in arr[0]) {
    htmlTitle += `<th>${key}</th>`;
  }

  tr1Element.innerHTML = htmlTitle;
  tbEl.appendChild(tr1Element);

  // Nội dung
  arr.forEach(function (el) {
    const tr2Element = document.createElement("tr");

    var htmlContent = "";
    for (const key in el) {
      htmlContent += `<td>${el[key]}</td>`;
    }

    tr2Element.innerHTML = htmlContent;

    tbEl.appendChild(tr2Element);
  });
}
const filterElement = document.querySelector("#filter");
const addOneMathElement = document.querySelector("#addOneMath");
const addPropertyElement = document.querySelector("#addProperty");
const sortElement = document.querySelector("#sort");
const sortDownElement = document.querySelector("#sortDown");

filterElement.onclick = function () {
  renderHTML(filterGoodStudents(students), tbElement);
};

addOneMathElement.onclick = function () {
  addOneMath(students);
  renderHTML(students, tbElement);
};

addPropertyElement.onclick = function () {
  addPropertySum(students);
  renderHTML(students, tbElement);
};

sortElement.onclick = function () {
  sortStudents(students);
  renderHTML(students, tbElement);
};
sortDownElement.onclick = function () {
  sortDownStudents(students);
  renderHTML(students, tbElement);
};
// 3. Hàm lọc ra các sinh viên xếp loại giỏi
function filterGoodStudents(arrStudents) {
  return arrStudents.filter(
    (item) => item.toan >= 8 && item.ly >= 8 && item.hoa >= 8
  );
}

function addOneMath(arrStudents) {
  arrStudents.filter((item) =>
    item.toan < 10 ? item.toan++ : (item.toan = 10)
  );
}

function addPropertySum(arrStudents) {
  return arrStudents.reduce((acc, student) => {
    const sum = student.toan + student.ly + student.hoa;
    student.sum = sum;
    return acc;
  }, []);
}

function sortStudents(arrStudents) {
  return arrStudents.sort((a, b) => a.sum - b.sum);
}
function sortDownStudents(arrStudents) {
  return arrStudents.sort((a, b) => b.sum - a.sum);
}
