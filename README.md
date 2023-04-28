devjobs by JoZiK

##### Installation #####

1/ Cloner le dépôt
2/ `npm install`
3/ Créer un fichier .env à la racine du projet et y ajouter : MONGO_URL:<URL de la base de donnée>
4/ `npm start`

##### Endpoints #####

GET /jobs : Retourne la liste des jobs
GET /jobs/:jobId : Retourne les détails du job correspondant à l'ID spécifié
POST /jobs : Crée un nouveau job
PUT /jobs/:jobId : Met à jour les informations d'un job existant
DELETE /jobs/:jobId : Supprime un job existant

##### Model d'un Job #####

company : Nom de la company
logo : URL du logo de la company
logoBackground : Couleur du logo de la company
position : Poste au sein de la company
postedAt : Timestamp du moment du post
contract : Full Time ou Part Time
location : Pays
website : URL du site de la company
apply: URL de la page du site pour postuler
description : description de l'offre
requirements :
    content : texte pour la partie Requirements
    items : tableau pour la liste de la partie Requirements
role :
    content : texte pour la partie What you will do
    items : tableau pour la liste de la partie What you will do