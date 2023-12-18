let array1 = ["g", "h", "n", "n"]
function timkytu(a){
    let tong = 0
    let b = false
    for(i = 0; i < array1.length; i++){
        if(a === array1[i]){
            tong += 1
            b = true
        }
            
    }
    if(b){
        document.write(tong)
    }else{
        b = -1
        document.write(b)
    }

}
let a = prompt('nhập ký tự')
timkytu(a)