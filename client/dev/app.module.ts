import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
import { TodoCmp }   from "./todo/components/todo-cmp";
import { PersonCmp }   from "./person/components/PersonCmp";
import { todoRouting } from "./todo/components/todo-route";
import { personRouting } from "./person/components/person-route";
import { TodoService }   from "./todo/services/todo-service";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      todoRouting,
      personRouting
    ],
    declarations: [
      App,
      TodoCmp,
      PersonCmp
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
