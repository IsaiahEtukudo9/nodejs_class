// const file = require('fs');
// file.readFile('text.txt', (err, result)=>{
//     if(err) throw err;
//     console.log(result);
// })

file.writeFile('text.txt','hey welcome', (err)=>{
    if(err)throw err;
    console.log('file successfully changed')
})