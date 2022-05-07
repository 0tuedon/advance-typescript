console.log("Hello");
// Creating our first class

class Department {
    name:string;
    private staffs:string[] = []
    constructor(n:string){
        this.name = n;
    }
    describe (this: Department){
        console.log(this.name);
    }
}

const liverpool = new Department("dept")

class ItDepartment extends Department {
    constructor(id:string, public admins: string[]){
        super(id);
        this.admins = []
    }

}
const accounting = new ItDepartment("ITAccounting",[]);
console.log(accounting.name)

console.log(liverpool)




// Private or Public Modifiers