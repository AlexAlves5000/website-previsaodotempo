const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocod = require('./utils/geocod.js')
const forecast = require('./utils/forecast.js')
const port = process.env.PORT || 3000

// const request = require('request')
// const { send } = require('process')

// Define paths for Express config
const diretorioPublic = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static diretory to serve
app.use(express.static(diretorioPublic))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Previsão do Tempo',
        name: "Alexsander"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Sobre",
        name: "Alexsander"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: "É facil usar é só colocar o nome do local que pretende pesquisar!",
        title: "Ajuda",
        name: "Alexsander"
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address
    
    if (!address){
        return res.send({
            error: "Você deve informar o nome de um local"
        })
    }

    geocod(address, (error, { latitude, longitude, location } = {}) => {
       
        if (error) {
            return res.send({ error })
        }

        const local = location        
    
        forecast( latitude, longitude, (error, forecastData) => {
            
            if (error) {
                return res.send({
                    error: error
                })
            }
            
            res.send({
                address: local,
                temperatura: forecastData.temperatura,
                chuva: forecastData.chuva,
                stermica: forecastData.stermica,
                iconedotempo: forecastData.iconedotempo,
                humidade: forecastData.humidade
            }) 
        })
    })  
})


app.get('/products', (req, res) => {
    if (!req.query.search){
        return res.send({
            error: "You must provide a search term"
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('*', (req, res) => {
    res.status(404).render('404', {
        title: "Error 404",
        errorMessage: "Página não encontrada!",
        name: "Alexsander"
    });
})

app.listen(port, () => { 
    console.log('Servidor Funcionando na Porta:' + port)
})