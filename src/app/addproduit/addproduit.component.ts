import { Router } from '@angular/router';
import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  message!:string;

  newProduit = new Produit(); 

  constructor(private ProduitService: ProduitService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  addProduit(){
    //return console.log(this.newProduit)
    this.ProduitService.ajouterProduit(this.newProduit);
    this.message = "Le produit " + this.newProduit.libelleProd + " est ajouté avec succès";
    this.router.navigate(["listproduit"]);
  }

}
