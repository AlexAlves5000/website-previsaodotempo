const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const Task = mongoose.model('task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })


// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if (!validator.isEmail(value)){
//                 throw new Error('Não é um endereço de email')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if( value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         trim: true,
//         minlengt: 7,
//         validate(value){
//             if (value.toLowerCase().includes('password')){
//                 throw new Error('A senha não pode conter a palavra "password"')
//             }
//         }
//     }
// })

// const me = new User({
//     name: ' Tássia Bicalho  ',
//     email: ' tesasdfasMAIL@EMAIL.com.br',
//     age: 35,
//     password: '1254pass'

// })




// const task= new Task({
//     description: '   Organizar o trabalho dos estagiários    ',
//     completed: true

// })

// task.save().then(() => {
//     console.log(task)
// }).catch( error => {
//     console.log('Error!', error)
// })

// me.save().then(() => {
//     console.log(me)
// }).catch( error => {
//     console.log('Error!', error)
// })
