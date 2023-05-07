class Student{
    constructor(n,a,c){
        this.name=n
        this.age=a
        this.class=c
    }
    fun(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.class)
    }
}

ob1=new Student("surya",21,10)
ob1.fun()
ob2=new Student("farsana",16,12)
ob2.fun()
ob3=new Student("achu",21,10)
ob3.fun()
