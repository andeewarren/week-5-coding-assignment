/*
create a menu app that has:
at least 1 array
at least 2 classes
have options to create, view and delete elements
*/

//DAYCARE CLASS
//infant room
//students: name, dob, age, parent phone

class Student {
    constructor (name, age, parentPhone) {
        this.name = name;
        this.age = age;
        this.parentPhone = parentPhone;
    }
}

class Instructor { //want better second property than works fulltime?
    constructor (name, employmentStatus) {
        this.name = name;
        this.employmentStatus = employmentStatus;
    }
}

class Room { //do i want to add age range to this? think Caterpillars - infant, Butterflies - 1-2
    constructor (name){
        this.name = name;
        this.students = [];
        this.instructors = [];
    }
}

class Menu {
    constructor(){
        this.rooms = [];
        this.selectedRoom = "";
    }

    start(){
        let selection = this.showMainMenuOptions();

        while (selection != 0){
            switch(selection) {
                case "1": 
                    this.createRoom();
                    break;
                case "2":
                    this.viewRoom();
                    break;
                case "3":
                    this.deleteRoom();
                    break;
                case "4":
                    this.displayRooms();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert("Goodbye");
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit menu
        1) Create New Room
        2) View Room
        3) Delete Room
        4) View all Rooms
        `);
    }

    showRoomMenuOptions(roomInfo) {
        return prompt(`
        0) Back
        1) Create Instructor
        2) Create Student
        3) Delete Instructor
        4) Delete Student
        ----------------------
        ${roomInfo}
        `);
    }

    displayRooms () {
        let roomString = "";
        //figure out a way to also alert the number of students per class

        for (let i = 0; i < this.rooms.length; i++) {
            roomString += i + ") " + this.rooms[i].name + ": " + this.rooms[i].students.length + " students\n";
        }
        alert (roomString);
    }

    createRoom () {
        let name = prompt(`Enter the name of the new classroom: `);
        this.rooms.push(new Room(name));
    }

    viewRoom () {
        let index = prompt(`Enter the index of the classroom you wish to view: `);
        if (index > -1 && index < this.rooms.length) { //validating user input
            this.selectedRoom = this.rooms[index];
            let description = "Classroom Name: " + this.selectedRoom.name + "\n\n";
            let instructors = "Instructors: \n\n";
            let students = "\nStudents: \n\n";

            for (let i = 0; i < this.selectedRoom.instructors.length; i++) { //listing instructors
                instructors += i +  ") " + this.selectedRoom.instructors[i].name
                + ": " + this.selectedRoom.instructors[i].employmentStatus + "\n";
            }
            

            for (let i = 0; i < this.selectedRoom.students.length; i++) { //listing all the classrooms
                students += i + ") " + this.selectedRoom.students[i].name 
                    + " - " + this.selectedRoom.students[i].age 
                    + " - " + this.selectedRoom.students[i].parentPhone + "\n";
            }   

            console.log( description += instructors + students);

            let selection = this.showRoomMenuOptions(description);
            switch (selection) { //sub menu options
                case "1":
                    this.createInstructor();;
                    break;
                case "2": 
                    this.createStudent()
                    break;
                case "3":
                    this.deleteInstructor();
                    break;
                case "4":
                    this.deleteStudent();
            }
        }
    }

    deleteRoom () {
        let index = prompt(`Enter the index of the classroom you wish to delete: `);
        if (index > -1 && index < this.rooms.length) {
            this.rooms.splice(index, 1); //want user to able to input based on first position being 1 not 0
        }
    }

    //left to do:
    //create student

    createStudent(){
        let name = prompt(`Enter the name for new student: `);
        let age = prompt(`Enter the age of the new student: `);
        let parentPhone = prompt(`Enter a parent's phone number: `);
        this.selectedRoom.students.push(new Student(name, age, parentPhone));
    }
    //delete student

    deleteStudent() {
        let index = prompt(`Enter the index of the student you wish to delete: `);
        if (index > -1 && index < this.selectedRoom.students.length) {
            this.selectedRoom.students.splice(index, 1);
        }
    }

    //create instructor
    createInstructor() {
        let name = prompt(`Enter the name of the new instructor: `);
        let employmentStatus = prompt(`Enter the employment status of the new instructor: `);
        this.selectedRoom.instructors.push(new Instructor(name, employmentStatus));
    }

    //delete instructor

    deleteInstructor() {
        let index = prompt(`Enter the number of the instructor you wish to delete: `);
        if (index > -1 && index < this.selectedRoom.instructors.length) {
            this.selectedRoom.instructors.splice(index, 1);
    }

    //change order of create student and instructor
    //should be 1) create instructor 2)crate student


}
}

let menu = new Menu()
menu.start();



