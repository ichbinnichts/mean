import {Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.css']
})

export class SchoolComponent {

    schoolId: number = 10;
    schoolName: string = "";
    schoolStatus: string = 'open';
    schoolCreatedStatus: boolean = false;

    constructor(){
        this.schoolStatus = Math.random() > 0.5 ? 'open' : 'closed';
    }

    getSchoolName(){
        return this.schoolName;
    }
    getStatusColor(){
        return this.schoolStatus === 'open' ? 'green' : 'red'; 
    }
    updateSchoolName(event: Event){
        this.schoolName = (<HTMLInputElement>event.target).value;
    }
    createSchool(){
        this.schoolCreatedStatus = true;
    }
}