const epxress = require('express');

const app = epxress();

app.get('/hello', (req, res)=>{
    res.send('Hii there');
});

app.listen(9000, ()=>{
    console.log('server started');
});