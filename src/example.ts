let firstName:string = "fruit"
let count:number = 0
let isLoading:boolean=true
let numbers //Any data type

let numbers1:undefined=undefined
let age:null|string = null //union we can use for getting two different data types.

//Defining object
const user:{name:string,id:number,city:string}={
    name: "surnera",
    id:24,
    city: "Indore"
}

//array
const fruits:string[] = ["banana","apple","orange"]

const num:number[] = [12,2,3]

const users = []

//functions
const sum =(a:number,b:number)=>{
    return a+b
}

sum(4,5)

const handleApiResponse=(payload:{userId:number},callback:()=>void)=>{

}


//Interface

interface User{
    name: string,
    id:number,
    getUser:()=>void

}


interface Person extends User{
    department:string
}

let data:User[]=[{
    name:"fruits",
    id:10,
    getUser:()=>{

    }
}]

type Date1={
    
}

type employee={
    id:number,
    name:string

}

type manager={
    department:string
} &employee

let employeewithmanager:manager={
    department:"A",
    id:12,
    name:"test"
}