

let muted:boolean =true
muted=false

let numerador:number=42
let denominador:number=6
let resultado= numerador/denominador


let nombre:string="Richard"
let saludo= `me llamo ${nombre}`


let people:string[]=[]
people=["Isabell","Nicole","Raul"]
people.push("9000")

let peopleAndNumbers:Array<string | number>=[]
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(9001)

enum Color{
    Rojo="Rojo",
    Verde="Verde",
    Azul="Azul"
}

let colorfavorito:Color=Color.Verde
console.log(`mi color favorito es ${Color.Rojo}`)

let comodin:any="joker"
comodin={type:"wildcard"}


let someObject:object={type:"wildcard"}

function add(a:number,b:number):number{
    return a+b
}

const sum=add(4,6)

function createAdder (a:number):(number)=>number{
    return function(b:number){
        return a+b
    }
}

const addFour=createAdder(4)
const fourPlus6=addFour(6)

function fullName(firstName:string,lastName:string=`Poveda`,lastName2?:string):string{
     return `${firstName} ${lastName}`
}

const richard=fullName(`sebastian`)

enum Colorsito{
    Rojo="Rojo",
    Verde="Verde"
}

interface rectangulo{
    ancho:number
    alto:number
    color?:Color
}

let rect:rectangulo={
    ancho:4,
    alto:6,
    color:Color.Rojo   
}

function area(r:rectangulo):number{
    return r.alto *r.ancho
}

const areaReact=area(rect)
console.log(areaReact)

rect.toString=function(){
    return this.Color? `Un rectangulo ${this.Color}`:`un rectangulo`
}

console.log(rect.toString())