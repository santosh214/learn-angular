import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  list: any[]= [];
  
  createTask(val: string) {
    console.warn("create", val);
    this.list.push({id:this.list.length, name:val});
    console.warn("create", this.list) ;

  }
  removeTask(id:number){
    console.warn("id", id);
    this.list=this.list.filter(item=>item.id!==id);
  }
}
