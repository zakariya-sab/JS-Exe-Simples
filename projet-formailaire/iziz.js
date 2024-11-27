var Entre;
var Plat;
var Dessert;

document.getElementById("Entre").addEventListener("change", function ChangeNbrPersonne0() {
    Entre = document.getElementById("Entre").value
    if (Entre != "aucun") {
        document.getElementById("Nombre-de-personnes-pour-Entre").value = 1;
        alert(20);
    }
    else {
        document.getElementById("Nombre-de-personnes-pour-Entre").value = 0;
        console.log(-20);
    }
})
document.getElementById("Plat-principal").addEventListener("change", function ChangeNbrPersonne1() {
    Plat = document.getElementById("Plat-principal").value
    if (Plat != "aucun") {
        
        document.getElementById("Nombre-de-personnes-pour-Plat_principal").value = 1;
    }
    else {
        document.getElementById("Nombre-de-personnes-pour-Plat_principal").value = 0;
    }
})
document.getElementById("Dessert").addEventListener("change", function ChangeNbrPersonne3() {
    Dessert = document.getElementById("Dessert").value
    if (Dessert != "aucun") {
        cp = 0
        document.getElementById("Nombre-de-personnes-pour-Dessert").value = 1;
    }
    else {
        document.getElementById("Nombre-de-personnes-pour-Dessert").value = 0;
    }
})















document.getElementById("Command").addEventListener("click", function () {
    
    

        document.getElementById("textarea").innerHTML = `
        <h2 style=" text-align:center; ">Facture :</h2>
        <table>
        <tr>
            <th colspan="5">Facture</th>
        </tr>
        <tr>
            <th>Catégorie</th>
            <th>Plat</th>
            <th>Prix</th>
            <th>Nombre de Personnes</th>
            <th>Prix TTC</th>
        </tr>
        <tr>
            <td>Entrée</td>
            <td id ="Entree_name">Salade</td>
            <td id ="Entree_prix">50 Dhs</td>
            <td id="Entree_nbr_person">2</td>
            <td id ="Entree_le_toutale">100 Dhs</td>
        </tr>
        <tr>
            <td >Plat Principal</td>
            <td id ="plat_principal2" ></td>
            <td id ="plat_prix" ></td>
            <td id ="plat_nombre" ></td>
            <td id ="plat_totale" > </td>
        </tr>
        <tr>
            <td>Dessert</td>
            <td id = "Dessert__plat"></td>
            <td id = "Dessert__prix" ></td>
            <td id = "Dessert__person" ></td>
            <td id = "Dessert__prix_totale" ></td>
        </tr>
    </table> `
        Entree_name = document.getElementById("Entre").value
        if (Entree_name == "aucun") {
            Entree_prix = 0;
        }
        if (Entree_name == "Salade marocaine aux poivrons") {
            Entree_prix = 25;
        }
        if (Entree_name == "Salade marocaine au fromage de chèvre") {
            Entree_prix = 30;
        }
        Entree_nbr_person = document.getElementById("Nombre-de-personnes-pour-Entre").value;
        Entree_le_toutale = ( Entree_nbr_person * Entree_prix ) + " Dhs";
        document.getElementById("Entree_name").innerHTML = Entree_name;
        document.getElementById("Entree_prix").innerHTML = Entree_prix;
        document.getElementById("Entree_nbr_person").innerHTML = Entree_nbr_person;
        document.getElementById("Entree_le_toutale").innerHTML = Entree_le_toutale;
        // le 2eme 

        plat_principal = document.getElementById("Plat-principal").value;
        if (plat_principal == "aucun") {
            plat_prix = 0;
        }
        if (plat_principal == "Tagine") {
            plat_prix = 250;
        }
        if (plat_principal == "Pastilla") {
            plat_prix = 300;
        }
        console.log(plat_prix)
        plat_nombre = document.getElementById("Nombre-de-personnes-pour-Plat_principal").value;
        plat_totale = plat_nombre * plat_prix + " Dhs";
        document.getElementById("plat_principal2").innerHTML = plat_principal;
        document.getElementById("plat_prix").innerHTML = plat_prix;
        document.getElementById("plat_nombre").innerHTML = plat_nombre;
        document.getElementById("plat_totale").innerHTML = plat_totale;
    

        //3eme 
        Dessert__plat = document.getElementById("Dessert").value;
        if (Dessert__plat == "aucun") {
            Dessert__prix = 0;
        }
        if (Dessert__plat == "Chebakia") {
            Dessert__prix = 25;
        }
        if (Dessert__plat == "harch") {
            Dessert__prix = 15;
        }
        console.log(plat_prix)
        Dessert__person = document.getElementById("Nombre-de-personnes-pour-Dessert").value;
        Dessert__prix_totale = Dessert__person * Dessert__prix + " Dhs";
        document.getElementById("Dessert__plat").innerHTML = Dessert__plat;
        document.getElementById("Dessert__prix").innerHTML = Dessert__prix;
        document.getElementById("Dessert__person").innerHTML = Dessert__person;
        document.getElementById("Dessert__prix_totale").innerHTML = Dessert__prix_totale;



})