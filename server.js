const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Mayk Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focando em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/maykbrito/" },
            { name: "Twitter", url: "https://twitter.com/maykbrito/" },
            { name: "Linkedin", url: "https://linkedin.com/in/maykbrito/" }
        ]
    }

    return res.render('about', { about })
})

server.get('/portfolio', (req, res) => {
    return res.render('portfolio', { items: videos })
})

server.get('/video', (req, res) => {
    const { id } = req.query

    const video = videos.find(video => video.id == id)

    if (!video) {
        return res.send('Video not found!')
    }

    return res.render('video', { item: video })
})

server.listen(5000, () => {
    console.log('server is running')
})
