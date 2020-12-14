
"use strict"; 

 let articles = [ { numero : "A1", nom : "Tiguan", carrosserie : "SUV/4X4/PickUp", quantite:8, dateEntree:"11-05-2020", fournisseur: "VW"},
              { numero : "A2", nom : "Touareg", carrosserie : "SUV/4X4/PickUp", quantite:5, dateEntree:"11-06-2020", fournisseur: "VW"},
              { numero : "A3", nom : "Passat", carrosserie : "break", quantite:3, dateEntree:"10-04-2020", fournisseur: "VW"},
			  { numero : "A4", nom : "Polo", carrosserie : "citadine", quantite:10, dateEntree:"29-03-2020", fournisseur: "VW"},
			  { numero : "A5", nom : "Golf", carrosserie : "citadine", quantite:12, dateEntree:"15-02-2020", fournisseur: "VW"}
              ];
let compteurArticle = 6; 

const MIN = 2; 
const MAX = 10; 

 /**
  *  Ajouter article (du formulaire vers le tableau)
  *
  * @param {formulaire} elle recoit les entrées créé par l'utilisateur
  * @return {boolean} elle remplit le tableau avec la liste des articles de l'array.
  */
  
function ajouterArticle(formulaire) {
  
  
  // enregistrer l'article dans le tableau
// { nom, carrosserie, quantite, dateEntree, fournisseur} 
	let numArticle = "A" + compteurArticle;
	let article= {numero:numArticle, nom:formulaire.nom.value, carrosserie: formulaire.carrosserie.value, quantite:Number(formulaire.quantite.value), 
					dateEntree:	formulaire.dateEntree.value,  fournisseur: formulaire.fournisseur.value };
	articles.push(article);
	compteurArticle ++; 
	document.getElementById("articles").innerHTML=genererTable();
	return false;
}	

function initialiserPage(){
	var el = document.getElementsByTagName("section");  
	el[0].innerHTML="<table> <thead><th>numero</th>	<th>nom</th><th>carrosserie</th><th>quantite</th><th>dateEntree</th><th>fournisseur</th>	</thead><tbody id='articles'></tbody> </table>";
	
}

/**
  *  Ajouter article (du formulaire vers le tableau)
  *
  * @param {} pas de parametre 
  * @return {string} génère le code html du tabeau dynamiquement 
  */
 function genererTable(){
	 
	 let codeTable="";
	 for(let i in articles) {
		 codeTable += "<tr>"
		 for (let j in articles[i]){
			codeTable += "<td>"+articles[i][j]+"</td>";
		 }
		 codeTable += "</tr>"
	 }
	 return codeTable;
			
 }	 
 
  