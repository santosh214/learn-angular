import { Component } from "@angular/core";
import { ProductsService } from "./services/products.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  products: any;

  constructor(private productData: ProductsService) {
    productData.users().subscribe((data) => {
      console.log("daa", data);
      this.products = data;
    });
    console.log("thihsishis", this.products);
  }
  title = "thi is title";
  color1 = "green";
  show = true;
  show2 = true;
  toggled = true;
  name = "Santosh singh";
  display = "";
  names = ["scroll", "scrollTo", "scrollToNext", "scrollTo"];
  dd = 0;
  way2: any = "";
  pipe = "Pipes in angular uppercase ";
  pipe2 = "Pipes in angular lowercase ";
  pipe3Date = Date();
  userDetails = [
    {
      name: "Santosh",
      email: "Santosh@gmail.com",
    },
    {
      name: "Anil",
      email: "Anil@gmail.com",
    },
    {
      name: "Pawan",
      email: "Pawan@gmail.com",
    },
    {
      name: "Sam",
      email: "Sam@gmail.com",
    },
  ];

  color = "green";

  addNewUser(data: any) {
    console.log("datata", data);
    this.productData.saveUser(data).subscribe((res)=>{
      console.log("save",res)
    });
  }
  getEvent() {
    this.show2 = !this.show2;
  }

  getTemplateReference(val: HTMLInputElement) {
    console.warn("template reference", val);
  }
  getColor(val: string) {
    this.color1 = val.toLowerCase();
    console.log("color: " + this.color1);
  }
  setColor(val: string) {
    this.color1 = val;
    console.log("color11: " + this.color1);
  }
  getName(name: string) {
    console.log("name", name);
    this.toggled = !this.toggled;
    console.log("name after", this.toggled);

    if (this.toggled) {
      this.name = "if";
    } else {
      this.name = "else";
    }
  }
  changeValue() {
    this.dd = Math.random();
  }
}
