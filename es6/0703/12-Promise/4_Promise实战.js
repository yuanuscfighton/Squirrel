// 1.引入 fs 模块
const fs = require('fs');

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// 【回调地狱】
fs.readFile('./file1.txt', (err, data1) => {
  fs.readFile('./file2.txt', (err, data2) => {
    fs.readFile('./file3.txt', (err, data3) => {
      const result = data1 + "\r\n" + data2 + "\r\n" + data3;
      // console.log(result);
    })
  })
})

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// 【使用 Promise 实现】
const p = new Promise((resolve, reject) => {
  fs.readFile(
    './file1.txt',
    (err, data) => {
      resolve(data.toString());
    });
});

p.then((value) => { // 这行里的 value 是 file1.txt 文件的内容
  return new Promise((resolve, reject) => {
    fs.readFile(
      './file2.txt',
      (err, data) => {
        resolve([value, data.toString()]); // 这里成功的值，就是 then 方法返回的值
      });
  })
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        './file3.txt',
        (err, data) => {
          value.push(data.toString());
          resolve(value);
        })
    });
  })
  .then((value) => {
    console.log(value.join('\r\n'));
  });