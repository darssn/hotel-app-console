import request from 'request-promise-native';

  class Service{

    constructor(){}

   listeClient(){

        return request('https://darssn.herokuapp.com/clients', { json: true });
           
        
   }
    rechercheClient(nom:string){

        return request(`https://darssn.herokuapp.com/clients?nom=${nom}`, { json: true });
             
        
    }

    creerClient(nom:string,prenom:string){

        return request.post('https://darssn.herokuapp.com/clients',{json :{"nom" : nom, "prenoms":prenom }}); 
     
    }

    dispoChambre(dateDebut :Date , dateFin :Date){
        return request(`https://darssn.herokuapp.com/reservations?dateDebut=${dateDebut}&dateFin=${dateFin}`, { json: true });
    }

}

export {Service};