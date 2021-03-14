function all(arr) {
  let newArr = Array.from(arr.length);  // [ , , ]
  let count = 0; // 表示的是成功的个数
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then(res => {
          // newArr.push(res);
          newArr[i] = res;
          // if (newArr.length === arr.length) {
          //   resolve(newArr);
          // }
          count++;
          if (count === arr.length) {
            resolve(newArr);
          }
        })
        .catch(err => {
          reject(err);
        })
    }
  })
}


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  resolve(222)
})

const p3 = new Promise((resolve, reject) => {
  resolve(333)
})



all([p1, p2, p3])
  .then(res => {
    console.log(res)
  })

// all([p1, p2, p3])
//   .then(res => {
//     // res    数组
//   })
//   .catch(err => {

//   })