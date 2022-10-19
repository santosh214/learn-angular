import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "thi is title";
  show = false;
  show2 = "abc";
  toggled = true;
  name = "Santosh singh";
  display = "";

  getEvent(val: any) {
    this.display = val;
    console.log("eventNames", val);
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
}
