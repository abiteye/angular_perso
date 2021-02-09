import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjoutCompetenceComponent } from './competences/ajout-competence/ajout-competence.component';
import { CompetencesComponent } from './competences/competences.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutGroupeCompetencesComponent } from './groupe-competences/ajout-groupe-competences/ajout-groupe-competences.component';
import { ListGroupeCompetencesComponent } from './groupe-competences/list-groupe-competences/list-groupe-competences.component';
import { ListProfilSortieComponent } from './profil-sortie/list-profil-sortie/list-profil-sortie.component';
import { AjoutPromoComponent } from './promotion/ajout-promo/ajout-promo.component';
import { AjoutReferentielComponent } from './referentiel/ajout-referentiel/ajout-referentiel.component';
import { ReferentielComponent } from './referentiel/referentiel.component';
import { AjoutUserComponent } from './user/ajout-user/ajout-user.component';
import { UserComponent } from './user/user.component';
import {AuthGuard} from './__helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion' },
  { path: 'connexion', canActivate: [AuthGuard], component: ConnexionComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'promotion/add', component: AjoutPromoComponent },
  { path: 'users', component:  UserComponent },
  { path: 'users/add', component:  AjoutUserComponent },
  { path: 'profilsortie', component:  ListProfilSortieComponent },
  { path: 'groupecompetences', component:  ListGroupeCompetencesComponent },
  { path: 'groupecompetences/add', component:  AjoutGroupeCompetencesComponent },
  { path: 'referentiel', component:  ReferentielComponent },
  { path: 'referentiel/add', component:  AjoutReferentielComponent },
  { path: 'competences', component:  CompetencesComponent },
  { path: 'competences/add', component:  AjoutCompetenceComponent },
  { path: '**', redirectTo: 'connexion' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
