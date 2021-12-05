const express = require('express')
const app = express()
app.get('/',(req, res) => res.sendFile(__dirname+'/index.html'))
app.use("/css", express.static(__dirname + "/css"));

app.get('/invite', (req, res) => res.redirect('https://discord.com/api/oauth2/authorize?client_id=873293263208087613&permissions=8&scope=bot')

    )
    
app.listen(3000)