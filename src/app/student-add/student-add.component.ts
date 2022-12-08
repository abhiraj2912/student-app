import { Component } from '@angular/core';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  name=""
  admno=""
  rollno=""
  college=""





  readValues=()=>{
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
  }

}
