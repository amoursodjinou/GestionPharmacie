import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';

@Injectable({
    providedIn: 'root'
})
export class ProduitService {

    produits: Produit[];
    produit: any;


    constructor() {
        this.produits = [
            { idProd: 1, libelleProd: "CAC 1000", descripProd: "Contre la fatigue", prixProd: 2000, statutProd:"dispo", qteProd:100},
            { idProd: 2, libelleProd: "Para 500", descripProd: "Guéri les maux de tête",prixProd: 2755, statutProd:"indispo", qteProd:100},
            { idProd: 3, libelleProd: "Nivaquine", descripProd: "Guéri les maux de ventre",prixProd: 2500, statutProd:"dispo", qteProd:100}
        ];
    }

    listeProduit():Produit[]{
        return this.produits
    }

    ajouterProduit(produit: Produit){
        this.produits.push(produit);
    }

    supprimerProduit(prod: Produit){
        const index = this.produits.indexOf(prod, 0);
        if(index>-1){
            this.produits.splice(index,1)
        }
    }


    consulterProduit(id:number): Produit{
        this.produit = this.produits.find(p => p.idProd == id)
        return this.produit;
    }

    updateProduit(p:Produit){
        this.ajouterProduit(p);
        this.supprimerProduit(p);
        this.trierProduit();
    }

    trierProduit(){
        this.produits = this.produits.sort((n1,n2) => {
            if(n1.idProd > n2.idProd){
                return 1;
            }
            if(n1.idProd < n2.idProd){
                return -1;
            }
                return 0;
        });
    }
}
