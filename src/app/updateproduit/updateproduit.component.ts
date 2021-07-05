import { ProduitService } from '../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {

  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService

  ) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id);
    console.log(this.currentProduit); 
  }

  updateProduit(){
    console.log(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(["listproduit"]);
  }



}
