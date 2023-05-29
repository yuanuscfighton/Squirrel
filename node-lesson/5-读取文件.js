// 1.导入fs模块
const fs = require('fs')

// 2.异步读取
fs.readFile('./test/观书有感.txt', (err, data) => {
  if (err) {
    console.log("读取失败. 错误原因:", err)
    return
  }

  console.log(data.toString())
})

// 3.同步读取
let data = fs.readFileSync("./test/观书有感.txt")
console.log("同步读取: " + data.toString())