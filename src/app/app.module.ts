import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReferentielComponent } from './referentiel/referentiel.component';
import { AjoutReferentielComponent } from './referentiel/ajout-referentiel/ajout-referentiel.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AjoutPromoComponent } from './promotion/ajout-promo/ajout-promo.component';
import { UserComponent } from './user/user.component';
import { AjoutUserComponent } from './user/ajout-user/ajout-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { ListProfilSortieComponent } from './profil-sortie/list-profil-sortie/list-profil-sortie.component';
import { GroupeCompetencesComponent } from './groupe-competences/groupe-competences.component';
import { AjoutGroupeCompetencesComponent } from './groupe-competences/ajout-groupe-competences/ajout-groupe-competences.component';
import { ListGroupeCompetencesComponent } from './groupe-competences/list-groupe-competences/list-groupe-competences.component';
import { CompetencesComponent } from './competences/competences.component';
import { AjoutCompetenceComponent } from './competences/ajout-competence/ajout-competence.component';
import { ListCompetenceComponent } from './competences/list-competence/list-competence.component';
import { ItemGroupeCompetenceComponent } from './groupe-competences/list-Groupe-competences/item-groupe-competence/item-groupe-competence.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    AdminComponent,
    NavbarComponent,
    ReferentielComponent,
    AjoutReferentielComponent,
    PromotionComponent,
    AjoutPromoComponent,
    UserComponent,
    AjoutUserComponent,
    ListUserComponent,
    ProfilSortieComponent,
    ListProfilSortieComponent,
    GroupeCompetencesComponent,
    AjoutGroupeCompetencesComponent,
    ListGroupeCompetencesComponent,
    CompetencesComponent,
    AjoutCompetenceComponent,
    ListCompetenceComponent,
    ItemGroupeCompetenceComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgSelectModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
