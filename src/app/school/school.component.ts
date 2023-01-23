import {Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html'
})

export class SchoolComponent {

    createdSchoolStatus = "None school created";
    schoolId: number = 10;
    schoolName: string = "";
    acceptNewSchool: boolean = false;

    constructor () {}

    ngOnInit(): void {
        setTimeout(() => {
            this.acceptNewSchool = true;
        }, 3000);
    }
    createSchool(){
        this.createdSchoolStatus = "School created";
    }
    updateSchoolName(event: Event){
        this.schoolName = (<HTMLInputElement>event.target).value;
    }
    
}