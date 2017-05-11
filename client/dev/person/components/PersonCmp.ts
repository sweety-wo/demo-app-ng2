import {
  Component,
  Inject
} from "@angular/core";

@Component({
  selector: "PersonCmp",
  templateUrl: "person/templates/PersonCmp.html",
  styleUrls: ["person/styles/PersonCmp.css"]
})
export class PersonCmp {
  name: string = `yo, I"m your component :D`;
}
