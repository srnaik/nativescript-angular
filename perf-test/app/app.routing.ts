import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { RendererTestComponent } from "./renderer/renderer-test.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },

    { path: "home", component: HomeComponent },
    { path: "renderer-test", component: RendererTestComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }