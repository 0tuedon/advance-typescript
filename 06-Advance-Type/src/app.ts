type Admin = {
  name:string;
  privileges:string[];
}

type Employee = {
  name:string;
  startDate: Date;
}

type Elevated = Admin & Employee

const el:Elevated = {
  name:'Max',
  privileges:['Create-server'],
  startDate: new Date(),
}

type Employed = Admin | Employee
// string | number

type Combinable =  string |  number
type Numeric = number | boolean

type Universal = Combinable & Numeric

//  type guard

const printEmployees = (emp:Employed)=>{
  // type guard on typescript 
  if('privileges' in emp){
    console.log(emp.privileges)
  }

}