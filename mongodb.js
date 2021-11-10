// CRUD - Create Read Update Delete

const { ObjectID } = require('bson')
const { MongoClient, ObjectId } = require('mongodb')

// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.ObjectId

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = ObjectId()
// console.log(id.toHexString())
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
   
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connect Correctly!')

    const db = client.db(databaseName)

    db.collection('task').deleteMany({
        description : "Limpar Casa"
    }).then((result) => {
         console.log(result.deletedCount)
    }).catch((error) => {
         console.log(error)
    })

    // db.collection.updateMany(filter, update, options)

    // db.collection('task').updateMany({
    //     completed: true
    // },{
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //      console.log(result)
    // }).catch((error) => {
    //      console.log(error)
    // })

    
    // db.collection('user').updateOne({
    //     _id: new ObjectID("60f9f329f273ad462eb9dc11")
    // }, {
    //     $set: {
    //         name: 'Edmar'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('task').findOne({}, {sort:{$natural:-1}}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('task').find({ completed: false }).toArray((error, task) => {
    //     console.log(task)
    // })

    // db.collection('task').find({ age: 21 }).toArray((error, users) => {
    //     // if(error) {
    //     //     return console.log('Unable to fetch')
    //     // }

    //     console.log(users)
    // })

    // db.collection('user').find({ age: 21 }).toArray((error, users) => {
    //     // if(error) {
    //     //     return console.log('Unable to fetch')
    //     // }

    //     console.log(users)
    // })

    // db.collection('user').find({ age: 21 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('user').insertOne({ 
    //     _id: id,
    //     name: 'Elfrida',
    //     age: 70 
    
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(result)

    // })

    // db.collection('users').insertOne({
    //     name: 'Alexsander',
    //     age: 45
    // }, (error, result) => { 
    //     if (error) {
    //         return console.log('Unable to insert user!')
    //     }
    //     console.log(result)
    // })

    // db.collection('user').insertMany([
    //     {
    //         name: 'Simão',
    //         age: 21
    //     },
    //     {
    //         name: 'Tiago',
    //         age: 32
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert documents!')
    //     }

    //     // const resultado = result.ops()
    //     console.log(result.ops)
    // })

    // db.collection('task').insertMany([
    //     {
    //         description: 'Limpar Casa',
    //         completed: true
    //     },
    //     {
    //         description: 'Lava louça',
    //         completed: false
    //     },
    //     {
    //         description: 'Limpar Banheiro',
    //         completed: true
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert documents!')
    //     }

    //     // const resultado = result.ops()
    //     console.log(result.ops)
    // })

})