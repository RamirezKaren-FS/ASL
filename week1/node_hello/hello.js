console.log("Hello ASL!");

let date_time = new Date();
let day = ("0" + date_time.getDate()).slice(-2);
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
let year = date_time.getFullYear();
console.log(month + "-" + day + "-" + year);