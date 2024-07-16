// 1.Array creation
let arr=[1,2,3,4,5]
console.log(arr);
//6.Array Sorting
let a=[50,20,10,80,30];
console.log(a.sort());
//Array reverse
let d=[50,40,30,20]
console.log(d.reverse(),);
//2.Array Manipulation
let c=[20,40,60,30,10];
c.pop()
console.log(c)

c.push(50)
console.log(c)

c.shift()
console.log(c)

c.unshift(70)
console.log(c)

//5.Mapping
let dee=[1,2,3,4,5]
console.log(dee.map(x=>x*2))

//3.Array Searching
let vv=[54,60,25,30,24,22,50]
console.log(vv.indexOf(30))
console.log(vv.lastIndexOf(50))

//14.merge array
let rr=[4,5,6,8,3]
let ll=[2,1,7,9]
console.log(rr+","+ll)

//15.Index of first occurence
let  gg=[8,5,6,7,8]
console.log(gg.indexOf(8))

//join & splitting
let oo=[4,7]
console.log(oo.join(10))

let j="4080"
const j2=j.split("")
console.log(j2)
