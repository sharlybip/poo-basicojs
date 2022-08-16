const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de html y css",
        "Curso practico de html y css"
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
        return this;
    }
};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age =  age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
};


Student.prototype.aprobarCurso = function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    };

    const juanita = new Student(
        "Juanita Alejandra",
        15,
        [
            "Curso de Introduccion a video jeugos",
            "Curso de creacion de personajes"
        ],
    );

    // Prototipos con la sintaxis de clases

    class Student2 {
        constructor({
            name, 
            age,
            email, 
            cursosAprobados = [],

        
        }) {
            this.name = name;
            this.age =  age;
            this.email = email;
            this.cursosAprobados = cursosAprobados;
        }

        aprobarCurso(nuevoCursito) {
            this.cursosAprobados.push(nuevoCursito);
        }
    }

    const miguelito = new Student2({
        name: "Miguel",
        age: 28,
        email: "miguelito@gmail.com",
    });