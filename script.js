// Client Side Storage 
// 1=> dataset & variable
// 2=>a: persistent:save in local Storage in browser, b: volatile: save in browser but removed bye close the tap

// local Storage => persistent - 5MB
// localStorage.setItem("name","saro");

// JSON.stringify => for save Object ot Array
// const data={name:"saro",age:15};
// const dataToString=JSON.stringify(data);
// localStorage.setItem("data",dataToString);

// JSON.parse
// const data = localStorage.getItem("data");
// console.log(data);
// const dataParse = JSON.parse(data);
// console.log(dataParse);
// // How Update in data?
// localStorage.setItem("name","benita");

// console.log(localStorage.length);
// console.log(localStorage.key(1));
// localStorage.clear()
// localStorage.removeItem("name");

// sessionStorage => volatile: save in browser but removed bye close the tap
// sessionStorage.setItem("name","saro")

// JSON.stringify
// const data={name:"saro",age:15};
// const dataToString=JSON.stringify(data);
// sessionStorage.setItem("data",dataToString);

// JSON.parse
// const data = sessionStorage.getItem("data");
// console.log(data);
// const dataParse = JSON.parse(data);
// console.log(dataParse);
// // How Update in data?
// sessionStorage.setItem("name","benita");

// console.log(sessionStorage.length);
// console.log(sessionStorage.key(1));
// sessionStorage.clear()
// sessionStorage.removeItem("name");

// cookies => persistent => 80KB 
// document.cookie="name=saro";
// document.cookie="age=15";
// // don't use <;> <,> or <space> in cookie
// document.cookie=`name=${encodeURIComponent("Benita farzamnia")}`;
// console.log(document.cookie);

// document.cookie="name=saro; max-age=5";
// console.log(document.cookie);


// (dataset مقاله ای در مورد انواع)
// https://www.sitepoint.com/clinet-side-storage-opition-comparison