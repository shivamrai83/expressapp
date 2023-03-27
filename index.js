const express = require('express');
const reader = require('xlsx')
const fileUpload = require("express-fileupload");
const path = require('path');
const dataToInsert = require('./JsonToSheet');

const app = express();
const PORT = 3000;

const staticPath = path.join(__dirname, '/App/UI')
app.use(fileUpload())
let filePath = "";
let fileData;
app.use(express.static(staticPath))

app.post('/upload', async (req, res) => {
    fileData = req.files.myFile
    res.sendStatus(500)
}
);

app.get('/download', (req,res) => {
    const file = reader.read(fileData, { type: 'buffer' });
    console.log('filter------>', file);
    // reader.utils.sheet_add_json(file.Sheets["Sheet1"], dataToInsert.Sheet1);
    // reader.writeFile(file, './Docs/sampledoc.xlsx')
    // const convertedData = reader.utils.json_to_sheet(dataToInsert)
    // reader.utils.book_append_sheet(file, convertedData, "Sheet1")
    // reader.writeFile(file, './Docs/sampledoc1.xlsx');
    // res.download(filePath);
})

  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
