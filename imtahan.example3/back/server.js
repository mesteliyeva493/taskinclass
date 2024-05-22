const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
app.use(cors())
const PORT=5050
app.use(express.json())

const productShema=new mongoose.Schema({
    title:String,
    price:Number,
    img:String
})

const productModel=mongoose.model('example',productShema)


app.get('/api/product',async(req,res)=>{
    try {
        const target=await productModel.find()
        res.send(target)
    } catch (error) {
        res.send("error")
    }
})


app.get('/api/product/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const target= await  productModel.findById(id)
        res.send(target)

    } catch (error) {
        res.send("error")
    }
})

app.delete('/api/product/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const target= await productModel.findByIdAndDelete(id)
        res.send(target)

    } catch (error) {
        res.send("error")
    }
})

app.post('/api/product',async(req,res)=>{
    try {
        const {title,price,img}=req.body
        const newItem=new productModel({title,price,img})
        await newItem.save()
    } catch (error) {
        res.send("error")
    }
})



mongoose.connect('mongodb+srv://mesteliyeva004:mesteliyeva493@project.du4qrea.mongodb.net/').then(()=>{
    console.log('connect')
})
app.listen(PORT,(()=>{
    console.log('back is running')
}))