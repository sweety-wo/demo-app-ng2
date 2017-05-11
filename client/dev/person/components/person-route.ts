import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	PersonCmp
} from "../components/PersonCmp";

const personRoutes:Routes = [
	{
		path: "person",
		component: PersonCmp,
		pathMatch: "full"
	}
]

export const personRouting = RouterModule.forRoot(personRoutes);
