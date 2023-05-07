interface Parent{
    fun()
    name:String;
}


class Child implements Parent{
    name="aji"
    fun() {
        console.log("hello")
    }
    age=20
}
