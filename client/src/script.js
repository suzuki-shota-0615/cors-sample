console.log("hello");

// const fetchDataFromServer = () => {
//   fetch("http://localhost:5000/data", { method: "PUT", credentials: "include" })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

const fetchDataFromServer = () => {
  fetch("http://localhost:5000/data")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

fetchDataFromServer();
