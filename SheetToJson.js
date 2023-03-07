const reader = require('xlsx')
  
const file = reader.readFile('./Docs/sampledoc.xlsx')
console.log('file--->', file);
let data = []
  
const sheets = file.SheetNames
console.log('sheets--->', sheets);

for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(file.Sheets[sheets[i]]);
    console.log('temp-->',temp)
   data = temp;
}

console.log(data)
console.log(reader.utils)