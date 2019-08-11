import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  username:string;
  showDetails:boolean;
  detailsLog = [];

  constructor() { }

  ngOnInit() {

  }
  /**
   * Function to show toggling effect on paragraph and pushing counter into the array on click
   */
  onToggleDetails(){
    this.showDetails = !this.showDetails;
    this.detailsLog.push(this.detailsLog.length + 1);
  }

}
