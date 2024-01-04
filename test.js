/////////////////////////////////////////////////////////////////// ARROW FUNCTION

// let k= ()=>{
//     console.log('hello world')
// }

// k()


// let mul=(x,y)=>{
//     console.log(x*y)
// }

// mul(5,7)



/////////////////////////////////////////////////////// NORMAL FUNCTION


// function a(){
//     console.log('hello world')
// }

// a()

//////////////////////////////////////////////////////////  MAP

// const num=[1,2,3,4,5]
// const sqr=num.map((num)=>num * num)

// console.log(sqr)



// const apple =[1,3,4,6,7]

// const sum= apple.map((apple)=> apple + apple)

// console.log(sum)

//////////////////////////////////////////////////// FILTER


// num=[42,32,46,34,74,53,73]

// console.log(num.filter(num=>num%2===0))

////////////////   OR

// num=[42,32,46,34,74,53,73]

// const res=num.filter(num=> num %2===0)

// console.log(res)


//////////////////////////////////////////////////// REDUCE

// const num=[1,2,3,4,5]

// const res=num.reduce((a,b)=>a*b)

// console.log(res)


//////////////////////////////////////////////////// DESTRUCTURING

const per={
    name:'shamnad',
    age:23,
    gender:'male'

}

let {name,age,gender='unknown',palce='manjeri'}=per

console.log(name,age,gender,palce)