// 1.导入fs模块
const fs = require('fs')

// 2.创建写入流对象
const ws = fs.createWriteStream('./test/观书有感.txt');

// 3.write
ws.write("半亩方塘一鉴开\n")
ws.write("天光云影共徘徊\n")
ws.write("问渠那得清如许\n")
ws.write("为有源头活水来\n")

// 4.关闭通道
ws.close()