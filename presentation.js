const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Service = require('./service.js');
const serv = new Service();


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

            serv.listeClient().then(
                listeClient => {
                    listeClient.forEach(client => {
                        console.log(`${client.nom} ${client.prenoms}`);
                    })
                    affMenu();
                }
            ).catch(error => console.log(error));




        } else if (saisie == 2) {
            console.log(">>> Ajouter un client");

            rl.question("Saisissez un nom : ", function (nom) {
                rl.question("Saisissez un prenom : ", function (prenom) {

                    serv.creerClient(nom, prenom).then(
                        reponse => {
                            console.log(reponse);
                            affMenu();
                        }
                    ).catch(error => {
                        console.log(error.message);
                        affMenu();
                    });
                });
            });

        } else if (saisie == 3) {
            console.log(">>> Recherche d'un client");

            rl.question("Saisissez un nom : ", function (nom) {

                serv.rechercheClient(nom).then(
                    listeClient => {
                        listeClient.forEach(client => {
                            console.log(`${client.nom} ${client.prenoms}`);
                        })
                        affMenu();
                    }

                ).catch(error => {
                    console.log(error.message);
                    affMenu();
                });
            });



        } else if (saisie == 4) {
            console.log(">>> Disponibilité d'une chambre");

            rl.question("Saisissez une date de début : ", function (dateDebut) {
                rl.question("Saisissez une date de fin: ", function (dateFin) {


                    affMenu();

                });

            });


        } else {

            affMenu();
        }


    });
}

exports.affMenu = affMenu;

