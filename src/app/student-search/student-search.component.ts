import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {

  constructor(private api:ApiService){}
  admno=""

  searchData:any=[]


  readValues=()=>{
    let data:any={"admno":this.admno}

    this.api.searchStudent(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Invalid admission number")
        } else {
          this.searchData=response
        }
      }
    )
  }

}
