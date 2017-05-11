"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var PersonCmp_1 = require("../components/PersonCmp");
var personRoutes = [
    {
        path: "person",
        component: PersonCmp_1.PersonCmp,
        pathMatch: "full"
    }
];
exports.personRouting = router_1.RouterModule.forRoot(personRoutes);
