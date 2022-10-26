import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string=''
  email:string=''
  password:any=''
  userData:any={}

  getData(data:any){
    console.log("checking",data)
    this.name = data.name
    this.email = data.email
    this.password = data.password
    this.userData =data
  }

}
