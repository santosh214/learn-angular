import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "thi is title";
  show = false;
  show2 = true;
  toggled = true;
  name = "Santosh singh";
  display = "";
  names=['scroll', 'scrollTo', 'scrollToNext', 'scrollTo']

  getEvent() {
this.show2 = !this.show2;
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
