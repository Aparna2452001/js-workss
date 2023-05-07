class Main{
    constructor(n,a){
        this.name=n
        this.age=a
    }

    fun(){
        console.log(this.name)
    }
}

ob1=new Main("ajith",20)
ob1.fun()

ob2=new Main("amal",2)
ob2.fun()
