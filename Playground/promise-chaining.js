require('../src/db/mongoose')
const User = require('../src/models/user')

// 615ecdbb3fe02c3dd34ce531

// User.findByIdAndUpdate('61649ac636fd28e5d8e0fb17', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments( {age} )
    return count 
}

updateAgeAndCount('61649516e417d41929e8c1ff', 3 ).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})