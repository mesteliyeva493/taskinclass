const express=require("express")
const app=express()

const cors=require("cors")
const mongoose=require("mongoose")

app.use(cors())
const PORT=6060
app.use(express.json())

const gymSchema=new mongoose.Schema(
    {
        image:String,
        title:String,
        price:Number,
        content:String
    },
    {timestamps:true}
)

const GymModel=mongoose.model("gyms",gymSchema)

app.get('/api/gyms',async(req,res)=>{
    try {
        const target =await GymModel.find()
        res.send(target)
    } catch (error) {
        res.send("error")
    }
}),




app.get('/api/gyms/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const found= await GymModel.findById(id)
        
    } catch (error) {
        res.send("error")
    }
})
app.post('/api/gyms/',async(req,res)=>{
  try {
    const {image,title,price,content}=req.body
    const NewGym= new GymModel({image,title,price,content})
    await  NewGym.save()
    res.send(NewGym)
  } catch (error) {
    res.send("error")
  }
})

app.delete('/api/gyms/:id',async(req,res)=>{
    try {
        const{id}=req.params
        await GymModel.findByIdAndDelete(id)
    } catch (error) {
        res.send(" not deleted")
    }
})






app.listen(PORT,(()=>{
console.log("back is running")
}))
mongoose.connect('mongodb+srv://mesteliyeva004:mesteliyeva493@project.du4qrea.mongodb.net/').then(()=>console.log('connected'))





















    
    
    
    
    
    