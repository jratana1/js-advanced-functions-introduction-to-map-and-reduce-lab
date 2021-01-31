// Your code here
function mapToNegativize(array){
    let answer = []
    for (let i = 0; i < array.length; i++ ){
        answer.push(array[i]*-1)
      }
    return answer
}

function mapToNoChange(array){
    let answer = []
    for (let i = 0; i < array.length; i++ ){
        answer.push(array[i])
    }
    return answer
}

function mapToDouble(array){
    let answer = []
    for (let i = 0; i < array.length; i++ ){
        answer.push(array[i]*2)
    }
    return answer
}

function mapToSquare(array){
    let answer = []
    for (let i = 0; i < array.length; i++ ){
        answer.push(array[i]**2)
    }
    return answer
}

function reduceToTotal(array, start=0){
    let answer = start
    for (let i = 0; i < array.length; i++ ){
        answer += array[i]
    }
    return answer
}

function reduceToAllTrue(array){
    let answer= true
    for (let i = 0; i < array.length; i++ ){
        if (array[i] === false){
            return answer= false
        }
    }
    return answer
}

function reduceToAnyTrue(array){
    let answer= false
    for (let i = 0; i < array.length; i++ ){
        if (array[i] === true){
            return answer= true
        }
    }
    return answer
}