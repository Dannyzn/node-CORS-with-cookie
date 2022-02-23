const express = require('express')

const app = express()

// 定义一个接口  index.html  页面请求这个接口的 就是 跨域 (因为端口不同)
app.get('/anotherService', (req, res) => {
    res.json({ code: 0, msg: "这是8003 端口返回的"})
})

app.listen("8003", () => {
    console.log("app2 running at port 8003");
})