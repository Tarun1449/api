
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());







let odd = [];
  let even = [];
  let alphabets = [];

function printOddEvenAlphabets(arr) {
  

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      alphabets.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

}

const userData = {
  is_Success:true,
  user_if:"john_doe_17091999",
  email: "john@xyz.com",
  roll_number:"ABCD123",
  odd_numbers: odd,
  even_numbers: even,
  alphabets: alphabets
}



app.post('/api',(req,res)=>{
  const dataa = req.body.data;
  printOddEvenAlphabets(dataa);
  res.end(JSON.stringify(userData));
});

app.listen(8000,()=>{
  console.log("Server running on port 8000");
})
