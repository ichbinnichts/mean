import {Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html'
})

export class SchoolComponent {

    constructor () {}

    ngOnInit(): void {
        setTimeout(() => {
            this.acceptNewSchool = true;
        }, 3000);
    }
    schoolId: number = 10;
    schoolName: string = "Highriders school";
    acceptNewSchool: boolean = false;
}