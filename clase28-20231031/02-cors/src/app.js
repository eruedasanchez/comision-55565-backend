import express from 'express';
import cors from 'cors' // para conectar el back (localhost:3000) con el front (liveserver: 1127.0.0... )
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); // con esto, logro solucionar el problema de conectar back con front

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/datos1',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        resultado:"Datos 1, desde el server"
    });
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
