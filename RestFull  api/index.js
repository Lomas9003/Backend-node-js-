const user = require("./MOCK_DATA.json")

const express = require('express');

const app = express()


app.get('/user', (req , res) => {
    return res.json(user)
})

// by this we can send html from the server to the frontend which is know as server side genration 

app.get('/api/user', (req , res) => {
    const html = `
    <li>
    ${
    user.map((val) =>` <li>${val.first_name}</li>`).join("")
    }
    </li>
    `
    res.send(html)
})

// write the api on the basis of id 

app.get("/user/:id" , (req , res) => {
    const id = Number(req.params.id)
    const val = user.find((val) => val.id === id)
    return res.json(val) // return is use to send the data 
})

// write the path of post api 

app.post('/api/user' , (req , res) => {
    //todo we have to write a logic to add the new user 
})

app.listen(8000, () => console.log("Server is listening on port 8000"));