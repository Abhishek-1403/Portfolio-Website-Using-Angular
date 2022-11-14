import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileLinksComponent } from './profile-links/profile-links.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path:'',component:AboutComponent },
  { path:'about',component:AboutComponent },
  { path:'achivements',component:AchivementsComponent },
  { path:'contact',component:ContactComponent },
  { path:'profile-links',component:ProfileLinksComponent },
  { path:'resume',component:ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
