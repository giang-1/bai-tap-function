let array1 = [1,23,5,6,89,13,2,4,87,6]
function daonguoc(){
    let temp
    for(i = 0; i < array1.length; i++){
        for( j = array1.length-1; j>i;j--){
            if(i +j == array1.length-1){
                temp = array1[i]
                array1[i] = array1[j]
                array1[j] = temp

            }
        }
    }
    document.write(array1)
}