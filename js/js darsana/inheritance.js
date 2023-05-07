class Parent{
    name="parent"
    fun(){
        console.log("parent method")
    }
}

class Child extends Parent{
    age=5
}

ob=new Child()
console.log(ob.name)
console.log(ob.age)
ob.fun()