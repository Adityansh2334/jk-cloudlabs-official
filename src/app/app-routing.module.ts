import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {WorkShowcaseComponent} from "./pages/work-showcase/work-showcase.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work-samples', component: WorkShowcaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',            // ✅ enable anchor scrolling
    scrollPositionRestoration: 'enabled'   // ✅ restore scroll position
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
