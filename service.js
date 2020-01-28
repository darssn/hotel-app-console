 var request = require('request');

function listeClient(callback) {
   
   
    request('https://darssn.herokuapp.com/clients', { json: true }, function (err,res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
   
        callback(body);
    });
}

function rechercheClient(nom,callback){

    request('https://darssn.herokuapp.com/clients?nom='+nom, { json: true }, function (err,res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
   
        callback(body);
    });

}

function creerClient(nom,prenom,callback){


    request.post('https://darssn.herokuapp.com/clients',{json :{"nom" : nom, "prenoms":prenom }} , function (err,res, body) {

        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
   
      callback(body);
    });


}



exports.creerClient =creerClient ;
exports.rechercheClient = rechercheClient ;
exports.listeClient = listeClient;