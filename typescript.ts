console.clear()
let f: string= "Welcome to TS Session"
console.log(f)
let name1:string[]=["tarek","ahmad","Amen","Salem"]
let test:number[]=[5,7,6,9,1,2,4,8,6]
let bool_test:boolean[]=[true,false,true,false,true,false]
let tuple_test:[string,number,boolean]=["ahmad",5,true]
console.log(name1)
console.log(test)
console.log(tuple_test)
console.log(bool_test)
enum doorstats{
    open,closed,ajar
}
function func(val:any)
{
    console.log(val)
}
func(doorstats.ajar)