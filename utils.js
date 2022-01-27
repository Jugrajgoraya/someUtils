function product(a,b) {
    return a*b;
}

function devide(a,b){
    return a/b;
}

function power(a,b){
    let result = 1;
    for(let i = 0; i < b; i++){
        result = result*a;
    }
    console.log(result);
}