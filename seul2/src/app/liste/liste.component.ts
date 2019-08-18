import { Component, OnInit } from '@angular/core';

import { TrucServiceService } from 'src/app/services/truc-service.service';
import { Truc } from 'src/app/modeles/truc.modele';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  listeTrucs: Truc[] = [];

  constructor(
    private trucService: TrucServiceService,
  ) {
    this.listeTrucs = this.trucService.listeTrucs;
  }

  ngOnInit() {
  }

  supprimer(truc) {
    this.trucService.supprimer(truc);
  }

}
