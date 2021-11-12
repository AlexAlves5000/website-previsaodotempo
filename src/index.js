const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = '688722Ta@250775'

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123'}, secret, {expiresIn: 900} )
    console.log(token)

    const data = jwt.verify(token, secret)
    console.log(data)
}

myFunction()