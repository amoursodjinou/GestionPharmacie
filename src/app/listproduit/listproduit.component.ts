import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-listproduit',
	templateUrl: './listproduit.component.html',
	styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {

	produits!: Produit[];

	constructor(private ProduitService: ProduitService, public authService: AuthService) {
		this.produits = ProduitService.listeProduit();
	}

	ngOnInit(): void {
	}

	supprimerProduit(prod:Produit){
		//console.log(prod)
	let conf =confirm("Etes-vous sûr ?")
	if(conf){
		this.ProduitService.supprimerProduit(prod);
	}
		
		
	}

}
