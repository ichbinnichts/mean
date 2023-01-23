import {Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.css']
})

export class SchoolComponent {

    createdSchoolStatus = "None school created";
    schoolId: number = 10;
    schoolName: string = "";
    acceptNewSchool: boolean = false;
    schoolCreated: boolean = false;

    constructor () {}

    ngOnInit(): void {
        setTimeout(() => {
            this.acceptNewSchool = true;
        }, 3000);
    }
    createSchool(){
        this.createdSchoolStatus = "School created";
        this.schoolCreated = true;
    }
    updateSchoolName(event: Event){
        this.schoolName = (<HTMLInputElement>event.target).value;
    }
    
}