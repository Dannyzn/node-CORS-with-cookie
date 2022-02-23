const express = require('express')

const app = express()

// 定义一个接口  index.html  页面请求这个接口的 就是 跨域 (因为端口不同)
// app.get('/anotherService', (req, res) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8003");
//     res.json({ code: 0, msg: "这是8003 端口返回的"})
// })
app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增
    next();
});

app.listen("8003", () => {
    console.log("app2 running at port 8003");
})