import { Injectable } from '@angular/core';
import { Groupe } from './groupe.model';

@Injectable({
  providedIn: 'root'
})
export class GroupesService {

  groupes: Groupe[] =[
    {
      id:1, 
      libelle:'Développer en back-end',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'créer une base de données',
    },
    {
      id:2, 
      libelle:'Développer en front-end',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'Avoir la main sur le html',
    },
    {
      id:3, 
      libelle:'Maquetter une application',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'Prise en main de figma',
    },
    {
      id:4, 
      libelle:'Modeliser une application',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'Prise en main de UML',
    },
    {
      id:5, 
      libelle:'Développer en back-end',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'créer une base de données',
    },
    {
      id:6, 
      libelle:'Développer en front-end',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'Avoir la main sur le html',
    },
    {
      id:7, 
      libelle:'Maquetter une application',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'Prise en main de figma',
    },
    {
      id:8, 
      libelle:'Modeliser une application',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae', 
      competences: 'Prise en main de UML',
    }
  ];

  constructor() { }

  getGroupes():Groupe[]{
    return this.groupes;
  }
}
