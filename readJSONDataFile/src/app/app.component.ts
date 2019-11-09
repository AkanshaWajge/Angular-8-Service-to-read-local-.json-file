import { DataServiceService } from './data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
      private appDataService : DataServiceService 
  ) { }
employees: any;
deletedUser : any;
 ngOnInit(){
     this.appDataService.getJSON().subscribe(data => {
          this.employees = data.employees;
      });      
 }
 deleteUser(id: number){
  this.appDataService.deleteJSON(id).subscribe()
 }
}