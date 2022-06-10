const express = require('express')
const app = express()
const port = 4887

//루트 URL(/) 또는 라우트에 대한 요청에 “Hello World!”로 응답
app.get('/', (req, res) => {
    res.send('TEST DOCKER EXPRESS!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})