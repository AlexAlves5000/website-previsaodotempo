console.log('Arquivo cliente JavaScript carregado!')

fetch('http://puzzle.mead.io/puzzle').then((response) =>{
    response.json().then((data)=>{
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const iconedotempo =  document.querySelector('#iconedotempo')

// messageOne.textContent = 'From JavaScript'


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
   
    iconedotempo.src = ''
    messageOne.textContent = 'Lendo dados....'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                // messageTwo.textContent = ''
                // iconedotempo.src = ''

                console.log(data.error)
            } else {
                       
                iconedotempo.src = data.iconedotempo[0]
                messageOne.textContent = 'Cidade: ' + data.address
                messageTwo.textContent = 'Temperatura: ' + data.temperatura + ', sensação térmica é de: ' + data.stermica

            }
        })
    })
})