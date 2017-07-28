
// Définition fonction createCols()
function createCols( nbCols, numLg ) {
 var cols = "";
 var numCol = 0;
 for( var i = 0; i < nbCols; i++) {
   numCol = i+1;
   cols += "<td>Cel " + numLg + "." + numCol + "</td>";
 }
 
 return cols;

}// Définition fonction createRows()
function createRows( nbRows, nbCols ) {
 var rows = "";
 for( var i = 0; i < nbRows; i++) {
   rows += "<tr>" + createCols( nbCols, i +1 ) + "</tr>";
 }
 
 return rows;
}var html = "";//Initialisation de la table

html = "<table><tr>"; //boucle de création des colonnes ( td )
html += createRows( 10, 10 ); //Appel de votre fonction//Finalisation de la table
html += "</tr></table>" //Affichage dans le div
$("#container").html(html);