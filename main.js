const students = [
  {
    id: "1",
    name: "Dinh",
    address: "hue",
  },
  {
    id: "2",
    name: "Nam",
    address: "quang nam",
  },
  {
    id: "3",
    name: "Tan",
    address: "da nang",
  },
  {
    id: "4",
    name: "Hung",
    address: "hue",
  },
  {
    id: "5",
    name: "Tri",
    address: "quang tri",
  },
  {
    id: "6",
    name: "Anh",
    address: "hue",
  },
  {
    id: "7",
    name: "Binh",
    address: "da nang",
  },
];
let listStudents = document.getElementById("list-students");
const renderListStudent = () => {
  let html = "";
  students.map((student) => {
    html += `
          <li class="list-group-item">
              <div >
                  <h3>Name : ${student.name}</h3>
                  <div>Address : ${student.address}</div>
                  <div>
                      <button class="btn btn-primary" onclick="onUpdateStudent('${student.id}')">Edit</button>    
                      <button id ="btn-delete" class="btn btn-danger" onclick="onDelete(${student.id})">Delete</button>
                  </div>
              </div>
          </li>
          `;
  });
  listStudents.innerHTML = html;
};
renderListStudent();
const validateForm = () => {
  const getValueName = document.getElementsByName("name")[0].value;
  const getValueAddress = document.getElementsByName("address")[0].value;
  const errorElement = document.querySelectorAll(".form-message");
  const errorMessages = [];
  if (getValueName.trim() === "") {
    errorElement[0].textContent = "Vui lòng nhập tên.";
    errorElement[0].style.color = "red";
  } else {
    errorElement[0].textContent = "";
  }
  if (getValueAddress.trim() === "") {
    errorElement[1].textContent = "Vui lòng nhập địa chỉ.";
    errorElement[1].style.color = "red";
  } else {
    errorElement[0].textContent = "";
  }
  if (errorMessages.length > 0) {
    errorElement.forEach((element) => {
      element.textContent = errorMessages.join(" ");
    });
    return false;
  }
};
const btnAddStudent = document.getElementById("create");
btnAddStudent.addEventListener("click", () => {
  const getValueName = document.getElementsByName("name")[0].value;
  const getValueAddress = document.getElementsByName("address")[0].value;
  if (validateForm()) {
    let student = {
      id: Math.random().toString(),
      name: getValueName,
      address: getValueAddress,
    };
    students.push(student);
    resetInputFields();
    renderListStudent();
  }
});
const onDelete = (id) => {
  const index = students.filter((student) => student.id !== id);
  if (index) {
    students.splice(index, 1);
  }
  renderListStudent();
};
const updateInputFields = (name, address) => {
  document.getElementsByName("name")[0].value = name;
  document.getElementsByName("address")[0].value = address;
};
const resetInputFields = () => {
  document.getElementsByName("name")[0].value = "";
  document.getElementsByName("address")[0].value = "";
};
const onUpdateStudent = (id) => {
  const studentToUpdate = students.find((student) => student.id === id);
  if (studentToUpdate) {
    updateInputFields(studentToUpdate.name, studentToUpdate.address);
    const btnUpdate = document.getElementById("update");
    btnUpdate.style.display = "inline-block";
    btnUpdate.addEventListener("click", () => {
      const updatedName = document.getElementById("name").value;
      const updatedAddress = document.getElementById("address").value;
      studentToUpdate.name = updatedName;
      studentToUpdate.address = updatedAddress;
      renderListStudent();
      resetInputFields();
      btnUpdate.style.display = "none";
    });
  }
};
