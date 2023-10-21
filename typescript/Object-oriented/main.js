// objektově orientované programování - OOP (+ metody a public vs private)
// 1. vytvoření classy - konstruktor pro tvorbu objektů - obecný přepis
var Department = /** @class */ (function () {
    function Department(na, nu) {
        this.name = na;
        this.number = nu;
    }
    return Department;
}());
// vytvoření nových objektů za použití constructoru
var HRdep = new Department("Human Resources", 100);
var MAdep = new Department("Marketing", 200);
var FIdep = new Department("Finance", 300);
// vypsání nových ojektů
console.log(HRdep.name, HRdep.number);
console.log(MAdep.name, MAdep.number);
console.log(FIdep.name, FIdep.number);
//2. Další příklad + přidání metody:
var House = /** @class */ (function () {
    function House(str, nu, fl) {
        this.street = str;
        this.number = nu;
        this.floors = fl;
    }
    House.prototype.describe = function () {
        console.log("D\u016Fm je na ulici ".concat(this.street, " s popisn\u00FDm \u010D\u00EDslem ").concat(this.number, " a m\u00E1 ").concat(this.floors, " podla\u017E\u00ED"));
    };
    return House;
}());
var House1 = new House("Novákova", 59, 2);
var House2 = new House("Dvořákova", 24, 1);
var House3 = new House("Jilemnického", 63, 2);
House1.describe();
House2.describe();
House3.describe();
//3. Další příklad + přidání metod a public nebo private
var Company = /** @class */ (function () {
    function Company(na, cou) {
        this.employee = [];
        this.name = na;
        this.country = cou;
    }
    //metoda vypsání základních popisků pro dané nové objekty
    Company.prototype.describe = function () {
        console.log("Toto je firma s n\u00E1zvem ".concat(this.name, " a s\u00EDdlem v ").concat(this.country));
    };
    //metoda přidání zaměstnanců do pole stringů pro dané nové objekty
    Company.prototype.addEmployee = function (newEmployee) {
        this.employee.push(newEmployee);
    };
    //metoda vypsání zaměstnanců do pole stringů pro dané nové objekty
    Company.prototype.employees = function () {
        console.log(this.employee);
    };
    //metoda vypsání zaměstnanců pod sebe pro dané nové objekty
    Company.prototype.allEmployees = function () {
        for (var i = 0; i < this.employee.length; i++) {
            console.log(this.employee[i]);
        }
    };
    return Company;
}());
var Company1 = new Company("Akuma", "Czech Republic");
var Company2 = new Company("Ahold", "Italy");
var Company3 = new Company("Siemens", "Germany");
var Company4 = new Company("Subaru", "Japan");
Company1.describe();
Company2.describe();
Company3.describe();
Company4.describe();
Company1.addEmployee("Petr Bříza");
Company1.addEmployee("Pavel Novák");
Company1.addEmployee("Martin Kovařík");
Company1.employees();
Company1.allEmployees();
// Company1.employee[4] = "David Mrkva"
// tento zakomentovaný příkaz je nefunkční z důvodu že hodnota employee je private, nedá se tedy měnit mimo classu Compay. Zbylé hodnoty co nejsou private jsou vždy public a dají se takto měnit mimo classu a její metody.
