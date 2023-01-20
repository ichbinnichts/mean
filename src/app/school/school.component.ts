import {Component } from "@angular/core";

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html'
})

export class SchoolComponent {
    schoolId: number = 10;
    schoolName: string = "Highriders school";
}