var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var service = require("./service.js");

function start() {
    return "** Administration Hotel ** \n1. Lister les clients\n2. Ajouter un client\n3. Rechercher un client par nom\n4. Vérifier la disponibilité d'une chambre \n99. Sortir \nEntrez un numero : ";
}


function affMenu() {

    rl.question(start(), function (saisie) {

        if (saisie == 99) {

            console.log("Au Revoir");
            return rl.close();

        } else if (saisie == 1) {

            console.log(">>> Liste des Clients");
            service.listeClient(function (data) {

                data.forEach(function (client) {
                    console.log(client.nom + " " + client.prenoms);
                });

                affMenu();

            });
        }else if(saisie==2){
            console.log(">>> Ajouter un client");

            rl.question("Saisissez un nom : ", function (nom) {
                rl.question("Saisissez un prenom : ", function (prenom) {

                      service.creerClient(nom,prenom, function(create) {

                       
                            console.log(create);
                        

                            affMenu();
                      });
                });

            });




        } else if (saisie == 3) {
            console.log(">>> Recherche d'un client");

            rl.question("Saisissez un nom : ", function (nom) {

                service.rechercheClient(nom, function (data) {

                    data.forEach(function (client) {
                        console.log(client.nom + " " + client.prenoms);
                    });

                    affMenu();

                });

            });
        } else {

            affMenu();
        }


    });
}

exports.affMenu = affMenu;

