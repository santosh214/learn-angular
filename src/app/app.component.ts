import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "thi is title";
  color1 = "green";
  show = true;
  show2 = true;
  toggled = true;
  name = "Santosh singh";
  display = "";
  names = ["scroll", "scrollTo", "scrollToNext", "scrollTo"];
  dd = 0;
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
  getEvent() {
    this.show2 = !this.show2;
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
