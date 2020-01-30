const request = require('request-promise-native');

  class Service{

    constructor(){}

   listeClient(){

        return request('https://darssn.herokuapp.com/clients', { json: true });
           
        
   }
    rechercheClient(nom){

        return request(`https://darssn.herokuapp.com/clients?nom=${nom}`, { json: true });
             
        
    }

    creerClient(nom,prenom){

        return request.post('https://darssn.herokuapp.com/clients',{json :{"nom" : nom, "prenoms":prenom }}); 

         
    }

}

module.exports = Service;