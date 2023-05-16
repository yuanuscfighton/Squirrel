// 1.导入fs模块
const fs = require('fs')

// 2.写入文件
fs.appendFile('./test/测试文件.txt', '\n追加写入', err => {
  if (err) {
    console.log("写入失败")
    return
  }
  console.log("写入成功")

})