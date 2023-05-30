const listHoa = [
  {
    id: 1,
    followerName: "Hoa Phong Lan",
    purposeUse: "Khai trương",
    imageFollower: "images/hoa1.jpg",
  },
  {
    id: 2,
    followerName: "Hoa tỷ muội",
    purposeUse: "Khai trương",
    imageFollower: "images/hoa2.jpg",
  },
  {
    id: 3,
    followerName: "Hoa Violet",
    purposeUse: "Hoa kỷ niệm",
    imageFollower: "images/hoa3.jpg",
  },
  {
    id: 4,
    followerName: "Hoa thủy tiên",
    purposeUse: "Hoa tình yêu",
    imageFollower: "images/hoa4.jpg",
  },
  {
    id: 5,
    followerName: "Hoa cẩm chướng",
    purposeUse: "Hoa hạnh phúc",
    imageFollower: "images/hoa5.jpg",
  },
];
let renderTable = document.querySelector("#tbl");
const headerTable = ["ID", "Tên hoa", "Loại Hoa", "Hình ảnh"];
const renderHeader = () => {
  let html = "";
  headerTable.map((item) => {
    html += `<th>${item}</th>`;
  });
  return `<thead>${html}</thead>`;
};
const renderBody = () => {
  let html = "";
  listHoa.map((item) => {
    const { id, followerName, purposeUse, imageFollower } = item;
    html += `<tr>
        <td>${id}</td>
        <td>${followerName}</td>
        <td>${purposeUse}</td>
        <td><img src="${imageFollower}" alt=""></td>
        </tr>`;
  });
  return html;
};
renderTable.innerHTML = renderHeader() + renderBody();
