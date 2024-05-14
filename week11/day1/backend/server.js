const express=require("express")
const app=express()
const cors=require('cors')
app.use(cors())
const PORT=5050

const datas=[
    {
        id:1,
        title:"java",
        note:"java is java"
    },
    {
        id:2,
        title:"css",
        note:"java is java"
    }
]

app.get("/api",(req,res)=>{
    res.send("salam")
})

app.get("/api/notes",(req,res)=>{
    const {title}=req.query
    if(title){
        let filtered=datas.filter(x=>x.title.toLowerCase().trim().includes(title.toLowerCase().trim()))
        res.send(filtered)
    }else{
        res.send(datas)
   }
})
app.get('/api/notes/:id',(req,res)=>{
    const item=datas.find(x=>x.id==req.params.id)
    console.log(item)
    res.send(item)
})
app.delete('/api/notes/:id',(req,res)=>{
    const item=datas.find(x=>x.id==req.params.id)
    const idx=datas.findIndex(x=>x.id==item.id)
    const deleted=datas.splice(idx,1)
    console.log(datas)
    // const filtered=datas.filter(x=>x.id!==item.id)
    // res.send(filtered)
 
})

app.listen(PORT,()=>{
    console.log(PORT)
})