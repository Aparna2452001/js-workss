
function inp_value1(e){
    result.value+=e.target.value
}

function result_inp(){
    exp=result.value
    res=eval(exp)
    result.value=res
}

function clr(){
    result.value=""
}