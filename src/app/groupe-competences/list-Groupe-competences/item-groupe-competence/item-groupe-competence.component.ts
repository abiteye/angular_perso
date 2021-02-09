import { Component, Input, OnInit } from '@angular/core';
import { GroupesService } from '../../groupes.service';
import { Groupe } from '../../groupe.model';

@Component({
  selector: 'app-item-groupe-competence',
  templateUrl: './item-groupe-competence.component.html',
  styleUrls: ['./item-groupe-competence.component.css']
})
export class ItemGroupeCompetenceComponent implements OnInit {

  @Input() groupe!: Groupe;

  constructor(private groupesService: GroupesService) { }

  ngOnInit(): void {
  }

}
