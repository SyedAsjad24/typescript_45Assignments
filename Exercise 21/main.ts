// 21. They think of something you could store in a TypeScript Object. Write a program that creates 
// Objects containing these items.


interface itCourse {
    name: string;
    location: string;
    onsiteStudents: number;
}

let itCourse = {
    name:"Typescript and javascript",
    location: "Governor House sindh",
    onsiteStudents: 50000
};

console.log(itCourse);