import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }
  @Input() item:{name:string,email:string}={
    name:'',
    email:''
  };
  ngOnInit(): void {
  }

}
