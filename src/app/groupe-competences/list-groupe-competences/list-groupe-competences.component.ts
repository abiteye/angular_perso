import { Component, OnInit } from '@angular/core';
import { Groupe } from '../groupe.model';
import { GroupesService } from '../groupes.service';

@Component({
  selector: 'app-list-groupe-competences',
  templateUrl: './list-groupe-competences.component.html',
  styleUrls: ['./list-groupe-competences.component.css']
})
export class ListGroupeCompetencesComponent implements OnInit {

  groupes!:Groupe[];

  constructor(private groupesService: GroupesService) { }

  ngOnInit(): void {

    this.groupes = this.groupesService.getGroupes();
  }

}
