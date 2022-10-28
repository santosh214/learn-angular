import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  constructor(private products: ProductsService) {
    products.users().subscribe((products) => {
      console.log("todo", products);
      this.pp = products;
    });
  }

  ngOnInit(): void {}
  pp: any;
  list: any[] = [];

  createTask(val: string) {
    console.warn("create", val);
    this.list.push({ id: this.list.length, name: val });
    console.warn("create", this.list);
  }
  removeTask(id: number) {
    console.warn("id", id);
    this.list = this.list.filter((item) => item.id !== id);
  }
}
