// const arr = [1, 2, 3];
// arr.forEach(item => {
//   console.log(item)
// });

// setInterval(() => {
//   console.log(1)
// }, 1000)

// document.querySelector('div').addEventListener('click', () => {
//   console.log(1);
// });


const fs = require('fs');

// fs.readFile('../1-常见api/01-events.js', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.readFile('../1-常见api/02-path.js', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


// 回调地狱
fs.readFile('../1-常见api/01-events.js', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.readFile('../1-常见api/02-path.js', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.readFile('../1-常见api/02-path.js', 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data);
      fs.readFile('../1-常见api/02-path.js', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
        fs.readFile('../1-常见api/02-path.js', 'utf-8', (err, data) => {
          if (err) throw err;
          console.log(data);
          fs.readFile('../1-常见api/02-path.js', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
          });
        });
      });
    });
  });
});