require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findOneAndDelete('61602f9e393a2c338faf31c8').then((task) => {
//     console.log(task)
//     return Task.find({ completed: false })
// }).then((result) => {
//     console.log(result)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findOneAndDelete({ _id: id})
    const count = await Task.countDocuments({ completed: false })
    return count 
}

deleteTaskAndCount('61683a0aa9ff154077470206').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})