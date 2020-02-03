import uuid from 'uuid/v1'

class BaseEntite {

    private _uuid: string;

    constructor() {

        this._uuid = uuid();

    }

    get uuid(): string {
        return this._uuid
    }

    set uuid(uuid: string) {
        this._uuid = uuid;
    }

}


class Client extends BaseEntite {


    constructor(private _nom: string, private _prenoms: string) {
        super();
    }

    get nom(): string {
        return this._nom;
    }
    set nom(nom: string) {
        this._nom = nom;
    }

    get prenoms(): string {
        return this._prenoms;
    }
    set prenoms(prenoms: string) {
        this._prenoms = prenoms;
    }


}

class Hotel extends BaseEntite {


    constructor(private _nom: string, private _nombreEtoiles: number) {
        super();
    }

    get nom():string{
        return this._nom;
    }

    set nom(nom:string){
        this._nom = nom;
    }

    get nombreEtoiles():number{
        return this._nombreEtoiles;
    }
    set nombreEtoiles(nbEtoile :number){

        this._nombreEtoiles = nbEtoile;
    }


}


class Chambre extends BaseEntite {

    constructor(private _numero: string, private _surfaceEnM2: number,   private _hotel :Hotel) {
        super();
    }

    get numero():string{
        return this._numero;
    }
    set numero(numero:string){
        this._numero = numero;
    }

    get surface():number{
        return this._surfaceEnM2;
    }
    set surface(surface :number){
        this._surfaceEnM2 = surface;
    }

    get hotel():Hotel{
        return this._hotel;
    }
    set hotel(hotel :Hotel){
        this._hotel = hotel;
    }

}

class Reservation extends BaseEntite{


    constructor( private _dateDebut : Date,private _dateFin : Date, private _chambres :Chambre[], private _client :Client){
        super();
    }

    get dateDebut():Date{
        return this._dateDebut;
    }
    set dateDebut(date :Date){
        this._dateDebut = date;
    }

    get dateFin():Date{
        return this._dateFin;
    }
    set dateFin(date :Date){
        this._dateFin = date;
    }

    get tabChambres():Chambre[]{
        return this._chambres;
    }

    set tabChambres(tab:Chambre[]){
        this._chambres = tab;
    }
    get client():Client{
        return this._client;
    }

    set client(client:Client){
        this._client =client;
    }

}

export {Client,Chambre};