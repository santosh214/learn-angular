import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { ChildComponent } from "./child/child.component";

const routes: Routes = [
  {
    path: "todo",
    component: TodoComponent,
  },
  {
    path: "child",
    component: ChildComponent,
  },
  {
    path: "user/:id",
    component: UserDetailComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
