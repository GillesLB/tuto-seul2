import { Component, OnInit } from '@angular/core';

import { TrucServiceService } from 'src/app/services/truc-service.service';
import { Truc } from 'src/app/modeles/truc.modele';
import { of } from 'rxjs';

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
    const observExemple$ = of(this.listeTrucs);
    let tableauTruc;
    console.log('1 : ', observExemple$);
    const resultObs = observExemple$.subscribe((x) => tableauTruc = x);
    console.log('2 : ', resultObs);
    console.log('3 : ', tableauTruc);
    resultObs.unsubscribe();
  }

  supprimer(truc) {
    this.trucService.supprimer(truc);
  }

}
