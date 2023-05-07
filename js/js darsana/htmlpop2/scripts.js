students=[
    {name:"ajith",age:20,class:"Bca"},
    {name:"rahul",age:20,class:"Ba"},
    {name:"aji",age:20,class:"el"},
    {name:"manu",age:20,class:"cs"}
    
]
htmlData=''
students.forEach(item=>{
    htmlData+=`
    <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.class}</td>
    <tr/>

    `

})

console.log(htmlData)

document.querySelector("tbody").innerHTML=htmlData

    