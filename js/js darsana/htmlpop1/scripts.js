students=["ajith","rahul","aji","manu"]

htmlData=''

students.forEach(item=>{
    htmlData+=`<p>${item}</p>`
})

console.log(htmlData)

document.getElementById("d1").innerHTML=htmlData