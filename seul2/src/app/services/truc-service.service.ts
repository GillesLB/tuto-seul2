import { Injectable } from '@angular/core';

import { listeTrucs } from 'src/app/liste/liste-trucs';
import { Truc } from 'src/app/modeles/truc.modele';

@Injectable({
  providedIn: 'root'
})
export class TrucServiceService {

  listeTrucs: Truc[] = [];

  constructor(
  ) {
    this.listeTrucs = listeTrucs;
  }

  supprimer(truc) {
    const trucASupprimer = this.listeTrucs.findIndex(
      (trucTemp) => {
        if (trucTemp === truc) {
          return true;
        }
      }
    );
    this.listeTrucs.splice(trucASupprimer, 1);
  }

}
