// const mainContainer = document.getElementsByClassName("main-container");

// function fetchProduct (cb){
//     const url = ' https://randomuser.me/api/';
//     fetch(url).then((response) => response.json()).then((data) => cb(data));
// }
// function renderUI(){
//     fetchProduct((data) => {
//         console.log(data);


//         data.forEach((results) => {
//             const showdetail = `
//             <div class="container">
//             <table>
//     <tr>
//         <th>gender</th>
//     </tr>
//     <tr>
//         <td> ${results.gender}</td>
//     </tr>
// </table>
//             </div>
//             `;
//             mainContainer.innerHTML += showdetail;

//         });

//     });
// }
// renderUI();




// fetch('https://randomuser.me/api/?results=10')
// .then(res => res.json())
// .then(data => {

//     let output ="";

//     for( const detail of data.results ){
//         output+=`
        
//   <tr>
//     <td>${detail.name.first}</td>
//     <td>${detail.gender}</td>
//     <td>${detail.dob.age}</td>
//     <td>${detail.email}</td>
//     <td>${detail.phone}</td>
//     <td>${detail.cell}</td>
//     <td>${detail.location.country}</td>
//   </tr>
//     `;
//     }
//     document.querySelector("tbody").innerHTML = output
    
// });


// var i = 1;

//     function next() {
        
//         document.getElementById("num").innerHTML = i++;
//     }

//     function previous() {
     
//       document.getElementById("num").innerHTML = i--;
//       }



const HOST_PATH = "https://randomuser.me/";
const API_PATH = "api";

let pageSize = 15;
let pageNumber = 1;

function fetchUserList(cb) {
  fetch(`${HOST_PATH}${API_PATH}?results=${pageSize}&page=${pageNumber}`)
    .then((data) => data.json())
    .then((json) => {
      let output ="";

    for( const detail of json.results ){
        output+=`
        
  <tr>
    <td>${detail.name.first}</td>
    <td>${detail.gender}</td>
    <td>${detail.dob.age}</td>
    <td>${detail.email}</td>
    <td>${detail.phone}</td>
    <td>${detail.cell}</td>
    <td>${detail.location.country}</td>
  </tr>
    `;
    }
    document.querySelector("tbody").innerHTML = output
    });
}
var data = 0;
document.querySelector("#num").innerText = data;

function next() {
  pageNumber++;
   data = data + 1;
    document.querySelector("#num").innerText = data;
  fetchUserList((data) => {
    console.log(data);
  });
  pageNumber.innerHTML = i++
}

function previous() {
  if (pageNumber === 1) true;
  pageNumber--;
  data=data-1;
document.querySelector("#num").innerText = data;

  fetchUserList((data) => {
    console.log(data);
  });
}

fetchUserList((data) => {
  console.log(data);
});




