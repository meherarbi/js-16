const table = document.querySelector(".monTableau");

var P1 ={
    Nom: "montre",
    specification : "montre chronologique",
    Quantite:671,
    Prix: 170 
}
var P2 ={
    Nom: "chaussure",
    specification : "chaussure Britanique",
    Quantite:200,
    Prix: 150 
}
var produits=[P1,P2];
AfficherProduit();

function AfficherProduit(){

var TableauProduit = document.querySelector("#TableauProduit tbody");
var produit="" ;
for(i=0;i < produits.length;i++){
    produit += `<tr>
    <td>${produits[i].Nom}</td>
    <td>${produits[i].specification}</td>
    <td>${produits[i].quantite}</td>
    <td>${produits[i].prix}</td>
    <td><button class="btn btn-warning" onClick="modifierProduit(${i})" >Modifier</button></td>
    <td><button class="btn btn-danger " onClick="suppimerProduit(${i})">Supprimer</button></td>
    </tr>`;
    
}
TableauProduit.innerHTML=produit ;
}
function ajoutform(){
   document.querySelector("#ajoutform").removeAttribute("class");
   document.querySelector("#modifProd").className="d-none";
}
document.querySelector("#AjoutFormValidation").addEventListener("click",function(event){
    event.preventDefault();
    var Nom = document.querySelector("#Nom").value;
    var specification = document.querySelector("#spec").value;
    var quantite = document.querySelector("#Quantite").value;
    var prix = document.querySelector("#Prix").value;
    AjoutProduit(Nom,specification,quantite,prix);
    document.querySelector("#ajoutform").reset();
    document.querySelector("#ajoutform").className="d-none";
});
function AjoutProduit(N,s,q,p){
    var produit={
        Nom:N,
        specification:s,
        quantite:q,
        prix:p
    }
    produits.push(produit);
    AfficherProduit(); 
    console.log(produits);
}

function suppimerProduit(indice){
    if(confirm("voulez-vous vraiment supprimez ce produit ? ")){
        produits.splice(indice);
        AfficherProduit(); 
        alert("suppression effectuée");
    } else {
        alert("suppression annuleé");}
    

}

function modifierProduit (indice){
    document.querySelector("#ajoutform").className="d-none";
    document.querySelector("#modifProd").removeAttribute("class")
    document.querySelector("#modifProd #Nom").value=produits[indice].Nom;
    document.querySelector("#modifProd #spec").value=produits[indice].specification;
    document.querySelector("#modifProd #Quantite").value=produits[indice].Quantite;
    document.querySelector("#modifProd #Prix").value=produits[indice].Prix;
    document.querySelector("#modifProd #idnt").value=indice;
    console.log(indice);
} 
document.querySelector("#modifFormValidation").addEventListener("click",function(event){
event.preventDefault();
var Nom = document.querySelector("#modifProd #Nom").value;
var specification = document.querySelector("#modifProd #spec").value;
var Quantite = document.querySelector("#modifProd #Quantite").value;
var Prix = document.querySelector("#modifProd #Prix").value;
var indice= document.querySelector("#modifProd #idnt").value;

produits[indice].Nom=Nom;
produits[indice].specification=specification;
produits[indice].Quantite=Quantite;
produits[indice].Prix=Prix;
AfficherProduit();
document.querySelector("#modifProd").className="d-none";

})                                  