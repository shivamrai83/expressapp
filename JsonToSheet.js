const reader = require('xlsx')
  
const file = reader.readFile('./Docs/sampledoc.xlsx')
  
let dataToInsert = [{
    Name:'Shivam',
    Experience:2,
    String:'ISE',
    Percentage: 70
},
{
    Name:'Vasu',
    Experience:3,
    Branch:'EC',
    Marks:80
},
{
    Name:'pulkit',
    Experience:5,
    Branch:'Logistics',
    Marks:80
},
{
    Name:'sobhit',
    Experience:8,
    Branch:'Devlopment',
    Marks:80
},
{
    Name:'ajit',
    Experience:10,
    Branch:'Markiting',
    Marks:80
},
{
    Name:'kulpish',
    Experience:4,
    Branch:'Sales',
    Marks:80
}]
  
const convertedData = reader.utils.json_to_sheet(dataToInsert)
  
reader.utils.book_append_sheet(file,convertedData,"Sheet2")
  
// Writing to our file
reader.writeFile(file, './Docs/sampledoc1.xlsx');