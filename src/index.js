import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
const app = express()

app.use(express.static('public'))

app.get('*',(req,res)=>{ 
    // logic to get the initial data for the store
    const store = createStore()   
    const url = req.url
    res.send(renderer(url,store))
})


app.listen(3000,()=>{
    console.log('server started') 
})