// objektově orientované programování - OOP (+ metody a public vs private)

// 1. vytvoření classy - konstruktor pro tvorbu objektů - obecný přepis

class Department {
    name: string
    number: number

    constructor(na: string, nu: number) {
        this.name = na
        this.number = nu
    }
}

// vytvoření nových objektů za použití constructoru

const HRdep = new Department("Human Resources", 100)
const MAdep = new Department("Marketing", 200)
const FIdep = new Department("Finance", 300)

// vypsání nových ojektů

console.log(HRdep.name, HRdep.number)
console.log(MAdep.name, MAdep.number)
console.log(FIdep.name, FIdep.number)

//2. Další příklad + přidání metody:

class House {
    street: string
    number: number
    floors: number

    constructor(str: string, nu: number, fl: number) {
        this.street = str
        this.number = nu
        this.floors = fl
    }

    describe() {
        console.log(
            `Dům je na ulici ${this.street} s popisným číslem ${this.number} a má ${this.floors} podlaží`
        )
    }
}

const House1 = new House("Novákova", 59, 2)
const House2 = new House("Dvořákova", 24, 1)
const House3 = new House("Jilemnického", 63, 2)

House1.describe()
House2.describe()
House3.describe()

//3. Další příklad + přidání metod a public nebo private

class Company {
    name: string
    country: string
    private employee: string[] = []

    constructor(na: string, cou: string) {
        this.name = na
        this.country = cou
    }

    //metoda vypsání základních popisků pro dané nové objekty
    describe() {
        console.log(
            `Toto je firma s názvem ${this.name} a sídlem v ${this.country}`
        )
    }

    //metoda přidání zaměstnanců do pole stringů pro dané nové objekty
    addEmployee(newEmployee: string) {
        this.employee.push(newEmployee)
    }

    //metoda vypsání zaměstnanců do pole stringů pro dané nové objekty
    employees() {
        console.log(this.employee)
    }

    //metoda vypsání zaměstnanců pod sebe pro dané nové objekty
    allEmployees() {
        for (let i = 0; i < this.employee.length; i++) {
            console.log(this.employee[i])
        }
    }
}

const Company1 = new Company("Akuma", "Czech Republic")
const Company2 = new Company("Ahold", "Italy")
const Company3 = new Company("Siemens", "Germany")
const Company4 = new Company("Subaru", "Japan")

Company1.describe()
Company2.describe()
Company3.describe()
Company4.describe()

Company1.addEmployee("Petr Bříza")
Company1.addEmployee("Pavel Novák")
Company1.addEmployee("Martin Kovařík")

Company1.employees()
Company1.allEmployees()

// Company1.employee[4] = "David Mrkva"
// tento zakomentovaný příkaz je nefunkční z důvodu že hodnota employee je private, nedá se tedy měnit mimo classu Compay. Zbylé hodnoty co nejsou private jsou vždy public a dají se takto měnit mimo classu a její metody.
