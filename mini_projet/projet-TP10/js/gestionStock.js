
"use strict"; 
//création d'articles pour la gestion de stock (automobiles)

 let articles = [ { numero : "L1", nom : "Tiguan", carrosserie : "SUV/4X4/PickUp", quantite:8, dateEntree:"11-05-2020", fournisseur: "VW"},
              { numero : "L2", nom : "Touareg", carrosserie : "SUV/4X4/PickUp", quantite:5, dateEntree:"11-06-2020", fournisseur: "VW"},
              { numero : "L3", nom : "Passat", carrosserie : "break", quantite:3, dateEntree:"10-04-2020", fournisseur: "VW"},
			  { numero : "L4", nom : "Polo", carrosserie : "citadine", quantite:10, dateEntree:"29-03-2020", fournisseur: "VW"},
			  { numero : "L5", nom : "Golf", carrosserie : "citadine", quantite:12, dateEntree:"15-02-2020", fournisseur: "VW"},
			  { numero : "L6", nom : "A1", carrosserie : "citadine", quantite:12, dateEntree:"19-02-2020", fournisseur: "Audi"},
			  { numero : "L7", nom : "Q2", carrosserie : "SUV/4X4/PickUp", quantite:3, dateEntree:"1-03-2020", fournisseur: "Audi"},
			  { numero : "L8", nom : "Q3", carrosserie : "SUV/4X4/PickUp", quantite:3, dateEntree:"1-03-2020", fournisseur: "Audi"}
              ];
let compteurArticle = 9; 

const MIN = 3; 
//const MAX = 10; 

 /**
  *  Ajouter article (du formulaire vers le tableau)
  *
  * @param {formulaire} elle recoit les entrées créé par l'utilisateur
  * @return {boolean} elle remplit le tableau avec la liste des articles de l'array.
  */
  
function ajouterArticle(formulaire) {
	
  // enregistrer l'article dans le tableau
// { nom, carrosserie, quantite, dateEntree, fournisseur} 
	let numArticle = "L" + compteurArticle;
	let article= {numero:numArticle, nom:formulaire.nom.value, carrosserie: formulaire.carrosserie.value, quantite:Number(formulaire.quantite.value), 
					dateEntree:	formulaire.dateEntree.value,  fournisseur: formulaire.fournisseur.value };
	articles.push(article);
	compteurArticle ++; 
	document.getElementById("articles").innerHTML=genererTable();
	return false;
}	

function initialiserPage(){
	var el = document.getElementsByTagName("section");
	el[0].innerHTML="<table> <thead><th>Numéro</th>	<th>Nom</th><th>Carrosserie</th><th>Quantité</th><th>Date d'entrée</th><th>Fournisseur</th>	</thead><tbody id='articles'></tbody> </table>";
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
			 if (j=="fournisseur"){
				 if (articles[i][j]=="Audi"){
					codeTable += "<td><img src=\"img/audi.jpg\" alt=\"audi\" width=\"50\" height=\"50\"></td>";
				 }
				 else{
					 codeTable += "<td><img src=\"img/vw.jpg\" alt=\"audi\" width=\"50\" height=\"50\"></td>";
				 }					 
			 }
			 else{
				codeTable += "<td>"+articles[i][j]+"</td>";
			 }
		 }
		 codeTable += "</tr>"
	 }
	 return codeTable;
			
 }	 
 function afficherQuantiteTrier(){
	//articles.sort(function(x,y){return x.quantite - y.quantite}).sort(sortParfournisseur);  ==>si tri par quantite et fournisseur 
	articles.sort(function(x,y){return x.quantite - y.quantite});
	genererTable();
	document.getElementById("articles").innerHTML=genererTable();
	 
	 
 }
 function aCommander(){
	let codeTable="";
	for (let i in articles){
		
		if (articles[i].quantite<= MIN) { 
			codeTable += "<tr>";
			for (let j in articles[i]){
			 if (j=="fournisseur"){
				 if (articles[i][j]=="Audi"){
					codeTable += "<td><img src=\"img/audi.jpg\" alt=\"audi\" width=\"50\" height=\"50\"></td>";
				 }
				 else{
					 codeTable += "<td><img src=\"img/vw.jpg\" alt=\"audi\" width=\"50\" height=\"50\"></td>";
				 }					 
			 }
			 else{
				codeTable += "<td style=\"color: red\">"+articles[i][j]+"</td>";
			 }
			 
			}
			codeTable += "</tr>"
		}
	}
	document.getElementById("articles").innerHTML=codeTable;
	
	
 }
 
 function sortParfournisseur(x,y){
		if(x.fournisseur<y.fournisseur)return -1;
		else if(x.fournisseur>y.fournisseur)return 1;
		else return 0;
}
	
 function trierParFournisseur(){
	articles.sort(sortParfournisseur);
	genererTable();
	document.getElementById("articles").innerHTML=genererTable();
	 
 }
 
 function sortParCarrosserie(x,y){
		if(x.carrosserie<y.carrosserie)return -1;
		else if(x.carrosserie>y.carrosserie)return 1;
		else return 0;
}
 
 function trierParCarrosserieFournisseur(){
	articles.sort(sortParCarrosserie).sort(sortParfournisseur); // ==>tri par quantite et fournisseur 
	genererTable();
	document.getElementById("articles").innerHTML=genererTable();
	 
 }
 
  function trierParCarrosserie(){
	articles.sort(sortParCarrosserie); 
	genererTable();
	document.getElementById("articles").innerHTML=genererTable();
  }
