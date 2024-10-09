// 1.引入 fs 模块
const fs = require('fs');

// 2.调用方法读取文件
// fs.readFile('./xxx.txt', (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(data.toString());
// })


// 3.使用 Promise 封装
const p = new Promise(function (resolve, reject) {
  fs.readFile('./xxx.txt', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})

// 4.指定回调
p.then(
  function (value) {
    console.log(value.toString());
  },
  function (reason) {
    console.log(reason)
  }
);