const fs = require("fs");

//.............writing file data................................
// Sync file creating....
//  fs.writeFileSync('./test5.txt', "hello world");

// Async file creating....
// fs.writeFile('./test2.txt', "hello file system", (err)=>{
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("File written successfully");
//     }
// });

// ......................................................................

// Sync file data reading ....................
// let fileData = fs.readFileSync('./contact.txt',"utf-8")

// console.log(fileData);

// Async file data reading ....................

// fs.readFile('./contact.txt','utf8',(err,result)=>{
//    if(err){
//      console.log(err);
//    }else{
//     console.log(result);
//    }
// })

// ......................................................................

//Sync appending file data.........................
// fs.appendFileSync('./contact.txt', `\n name : Rajesh\n age : 40`)

//Async appending file data.........................
// fs.appendFile('./grid.txt',`\n Om namah shivay`, (err)=>{
//     if(err){
//         console.log("Error:", err);
//     }else{
//         console.log('file copied successfully')
//     }
// })

// ......................................................................
// Sync  file deleting ...........................
// fs.unlinkSync('./tempCp.txt');

// Async  file deleting ...........................
// fs.unlink('./grid2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('File deleted successfully');
//     }
//  });

// ......................................................................

//Sync  file coping ...............................
// fs.cpSync('./div.txt','./tempCp.txt')

//Async  file  coping...............................
// fs.cp( './div.txt','./grid.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file copied successfully')
//     }

// })

// ......................................................................

// Sync folder creating ..............................
// fs.mkdirSync('div');
// fs.mkdirSync('./parentFolder/childFolder', { recursive: true });

// Async folder creating..............................
//  fs.mkdir('./ram/hello',{recursive:true}, (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('folder created successfully')
//     }
//  })

// ......................................................................

// Sync Folder deletion.........
// fs.rmSync('./parentFolder/childFolder/hello',  {recursive:true} );

// Async Folder deletion.........
// fs.rm('./parentFolder/childFolder',{recursive:true}, (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('folder deleted successfully')
//     }
// })

// .....................................................................
//Sync file moving to another folder.....................
// fs.renameSync('div.txt', './parentFolder/child/div.txt')

//Async file moving to another folder.....................
// fs.rename('test5.txt', './parentFolder/child/test5.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file moved successfully')
//     }

// })

// fs.writeFile('div2.js',`console.log('hello div')`, (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file created successfully')
//     }
//  });

// let result = fs.readFileSync('div2.js', 'utf8' )
// console.log(result)



// fs.appendFileSync('./div2.js', ` \nconsole.log('jai shree ram')`)
// fs.cpSync('./parentFolder/child/div.txt', './div2.js')

// fs.writeFileSync('JSONdata.json', `{
//         "name": "Pratik",
//         "age": 23,
//         "city": "Delhi"
//     }`

// fs.appendFileSync('JSONdata.json',` `)

fs.appendFileSync('./div2.js', ` fetch('JSONdata.json')
    .then(response => response.json())
    .then(data => console.log(data)) `
)

// fs.writeFileSync('./div2.js','')



 
 

 