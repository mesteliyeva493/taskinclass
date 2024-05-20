const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
app.use(cors())
const PORT=4048
app.use(express.json())


const clothesShema=new mongoose.Schema({
    img:String,
    name:String,
    describtion:String

})
const clothesModel=mongoose.model("clothes",clothesShema)


app.get('/api/clothes',async(req,res)=>{
    try {
        const target=await clothesModel.find()
        res.send(target)
    } catch (error) {
        res.send("error")
    }
})

app.get('/api/clothes/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const found=await clothesModel.findById(id)
        res.send(found)
    } catch (error) {
        res.send("error")
    }
})

app.delete('/api/clothes/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const deleted=await clothesModel.findByIdAndDelete(id)
        res.send(deleted)
    }  catch (error) {
        res.send("not delet")
    }
}
)



app.post('/api/clothes',async(req,res)=>{
  try {
    const {img,name,describtion}=req.body
    const NewClothes=new clothesModel({img,name,describtion})
    await NewClothes.save()
  } catch (error) {
    res.send("error")
  }
})





mongoose.connect("mongodb+srv://mesteliyeva004:mesteliyeva493@project.du4qrea.mongodb.net/").then(res=>{
    console.log("run olur")
})

app.listen(PORT,(()=>{
    console.log("connected")
}))


