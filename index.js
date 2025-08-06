
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); 
const express = require("express"); 
const app = express(); 



// create connection to database 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'youtube', 
  password: 'saurabh@009'
});

let getRandomUser = () => {
  return [
      faker.string.uuid(),              // id
    faker.number.int({ min: 18, max: 60 }), // age
    faker.internet.username(),        // name
    faker.internet.email(),           // email
    faker.number.int({ min: 0, max: 1000 }), // followers
    faker.number.int({ min: 0, max: 1000 })  // following
  ];
};


//insert new data
// let q = `INSERT INTO user (id, age, name, email, followers, following) VALUES ?`;
//           // ('83a6b1c7-3953-4591-9b9f-bc7557ca6ff9', 25, 'Filomena_Paucek', 'Nicholas_Langosh@yahoo.com', 100, 200),
//           // ('1d15025c-19ee-4d6a-a9e7-2002fc3bd7f4', 30, 'Garland.Hilpert65', 'Saul_Leuschke32@gmail.com', 50, 75),
// // let user = [123, 22,  "123_newuser", "abc@gmail.com", 23, 34]; 

// let data = []; 
// for (let i=0; i<=100; i++) {
//   data.push(getRandomUser()); 
// }



// random function ------------------
 

app.get("/", (req, res) => {
  let q = `SSELECT count(*) FROM user`;


  try { 
   connection.query(q, (err, result) => {
     if(err) throw err; 
     console.log(result); 
     res.send(result);
   });
 } catch (err) {
   console.log(err);
   res.send("some error in DB"); 
}

 })

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});


// try { 
//   connection.query(q, [data], (err, result) => {
//     if(err) throw err; 
//     console.log(result); 
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end(); 

alkdjfu adfe 


loi 



















