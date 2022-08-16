class Comentario {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
        repuestas = [],
    }) {
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.content = content;
        this.repuestas = repuestas;
        this.likes = 0;
    }
    publicar() {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}

const respuesta__comentarioMiguelito = new Comentario({
    studentName: "Juan David",
    contenido: "con mucho gusto te ayudo que es lo que no te quedó claro",
    likes: 2,
    repuestas: undefined,
})
const comentarioMiguelito = new Comentario({
    studentName : "Miguelito",
    contenido : "Oye me quedo una duda de la clase y mi programa no corre, ¿ alguien puede ayudarme?",
    likes : 12,
    repuestas : [respuesta__comentarioMiguelito],

});

class Classes {
    constructor({
        title,
        archivosDeLaClase = [],
        comentarios = [],
        marcadores = [],
    }) {
        this._title = title;
        this.archivosDeLaClase = archivosDeLaClase;
        this.comentarios = comentarios;
        this.marcadores =  marcadores;
    }
    get title() {
        return this._title
    }
    set(newTitle){
        this._title = newTitle;
    }
}
const progClasses = new Classes({
    title: "introducción",
    archivosDeLaClase: [
        "codigo de la clase",
        "links de referencia",
        "enlace al codigo en github",
    ],
    comentarios : [comentarioMiguelito] 
});

class Course {
    constructor({
        name,
        longitude,
        numberClasses,
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name; // con esta sintaxis "_name" le pedimos por favor que no manden llamar name
        this.classes = classes;
        this.longitude = longitude;
        this.numberClasses = numberClasses;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() { 
        return this._name;
    }
    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malito de programacion básica"){
            console.error("please no!... choose a diferent name");

        }else{
            this._name = nuevoNombre;
        }
    }
    changeName(nuevoNombre){
        this._name = nuevoNombre;
    }
}

const cursoProgramacionBasica = new Course({
    name: "Curso Gratis de Programación Gratis", 
    longitude: "10 horas de contenido",
    numberClasses: 54,
    classes: [progClasses],
    isFree: true,
});
const cursoDefinitivo = new Course({
    name: "Curso Definitivo de Html y Css",
    longitude: "2 horas de contenido",
    numberClasses: 13,
    classes: [progClasses]
});
const cursoPractico = new Course({
    name: "Curso practico de HTML y CSS",
    longitude: "2 horas de contenido",
    numberClasses: 25,
    classes: [progClasses],
    lang: "english",
});

class LearningPaths {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgramacionBasica,
        cursoDefinitivo,
        cursoPractico,
    ]
}  
);
const escuelaDiseno = new LearningPaths({
    name: "Escuela de Diseño",
    courses: [
        "Maquetacion con Css",
        "Curso de Html semantico"
    ]
}  
);
const escuelaData = new LearningPaths({
    name: "Escuela de Data science",
    courses: [
        "curso de base de datos",
        "Curso de Historia de BD"
    ]
}
);






class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    publicarComentario(commentContent){
        const comentario = new Comentario({
            content: commentContent,
            studentName: this.name,
        });
        comentario.publicar();
    }
}
class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent){
        const comentario = new Comentario({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comentario.publicar();
    }
}

class FreeStudent extends Student{
    constructor(properties){
        super(properties);
    }
    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("El curso no es gratis");
        }
    }
}
class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Solo puedes tomar cursos en español");
        }
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
        }
}




const juandc2 = new FreeStudent({
    name: "Carlos",
    username: "sharlybip",
    email: "sharlybip@gmail.com",
    twitter: "@sharlybip",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
}
);

const miguelito = new BasicStudent({
    name : "Miguelito",
    username : "mikehappy",
    email : "mikehappy@gmail.com",
    twitter : "@happymike01",
    learningPaths : [
        escuelaWeb,
        escuelaDiseno,
    ]
}
);
const freddy = new TeacherStudent({
    name : "Freddy Vega",
    username : "freddyviga",
    email : "freddy@gmail.com",
    twitter : "@freddy01",
}
);

