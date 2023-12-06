function greet(username){
    console.log('Good Morning ' + username)
}

function add(a,b){
    return a + b 
}

const arrowSum = (a,b)=> a + b

const sum = arrowSum(25,25)
console.log(sum)