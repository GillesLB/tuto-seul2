import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Truc } from 'src/app/modeles/truc.modele';
import { TrucServiceService } from 'src/app/services/truc-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  trucForm: FormGroup;

  listeTrucs: Truc[] = [];

  constructor(
    private trucService: TrucServiceService,
    private router: Router,
  ) {
    this.listeTrucs = this.trucService.listeTrucs;
  }

  ngOnInit() {
    this.trucForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      couleur: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
    });
  }

  idMax() {
    const idMaxStock = [];
    for (const idATrier of this.listeTrucs) {
      idMaxStock.push(idATrier.id);
    }
    const idMax = Math.max(...idMaxStock);
    return idMax;
  }

  fixerStock() {
    const nouveauStock = Math.floor(Math.random() * 10);
    return nouveauStock;
  }

  ajouterTruc() {
    const id =  this.idMax() + 1;
    const nom = this.trucForm.get('nom').value;
    const couleur = this.trucForm.get('couleur').value;
    const prix = this.trucForm.get('prix').value;
    const stock = this.fixerStock();
    const trucAAjouter = new Truc(id, nom, couleur, prix, stock);
    this.listeTrucs.push(trucAAjouter);
    this.router.navigate(['liste']);
  }

}
