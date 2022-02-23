const express = require('express')
const app = express()


// index.html 加载时会请求 login 接口
// 设置 cookie
app.get('/login', (req, res) => {
    res.cookie("user", "jay", { maxAge: 2000000, httpOnly: true })
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ code: 0, message: "登陆成功" })
})

// 此接口时 检测 cookie 是否设置成功的 如果设置成功的话 浏览器会自动携带上 cookie
app.get('/user', (req, res) => {
    // req.headers.cookie: user=jay
    // res.setHeader('Access-Control-Allow-Origin', '*');
    const user = req.headers.cookie?.split("=")[1];
    res.json({ code: 0, user })
})

// 托管 index.html 页面
// 在 index.html 中发起的请求 默认的源就是 http:localhost:8000
// 然后再去请求 http://localhost:8003 就会出现跨域了

app.use('/static', express.static("public"))

app.listen("8000", () => {
    console.log("app1 running at port 8000");
})

