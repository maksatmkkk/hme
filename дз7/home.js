class User {
    constructor(name, surname, yearOfAdmission) {
        this.name = name;
        this.surname = surname;
        this.yearOfAdmission = yearOfAdmission;
    }
getFullName() {
        return `${this.name} ${this.surname}`;
    }
    
    }

class Student extends User {
    
   
constructor(name, surname, yearOfAdmission) {
        super(name, surname);
        this.yearOfAdmission = yearOfAdmission;
    }
getCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.yearOfAdmission + 1;
        return Math.min(Math.max(course, 1), 5); 
    }

    
    }
const student = new Student("Иван", "Иванов", 2020);
console.log(` ${student.getFullName()}`);
console.log(`${student.getCourse()} курс`);



const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.output = function () {
    console.log(`Name ${this.make} speed: ${this.speed}`);
};

Car.prototype.plus = function () {
    this.speed += 10;
    console.log(`Name ${this.make} speed: ${this.speed}`);
};

Car.prototype.stoping = function () {
    this.speed -= 10;
    console.log(`Name ${this.make} speed: ${this.speed}`);
};

const ford = new Car('Ford', 130);

ford.output(); 
ford.plus(); 
ford.plus();
ford.stoping();
ford.stoping();


class senuor {
    way() {
        console.log('кокое у вас напровление');
    }
}

class medium extends senuor {
    way() {
        console.log('Frontent');
    }
}

class junior extends senuor {
    way() {
        console.log('Android');
    }
}