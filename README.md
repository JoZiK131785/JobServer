# devjobs par JoZiK

## Installation

1. Cloner le dépôt 
2. Exécuter la commande `npm install`
3. Créer un fichier `.env` à la racine du projet et y ajouter : `MONGO_URL:<URL de la base de données>`
4. Lancer l'application en exécutant la commande `npm start`

## Endpoints

- `GET /jobs` : Retourne la liste des offres d'emploi.
- `GET /jobs/:jobId` : Retourne les détails de l'offre d'emploi correspondant à l'ID spécifié.
- `POST /jobs` : Crée une nouvelle offre d'emploi.
- `PUT /jobs/:jobId` : Met à jour les informations de l'offre d'emploi existante.
- `DELETE /jobs/:jobId` : Supprime l'offre d'emploi correspondant à l'ID spécifié.

## Modèle d'un Job

- `company` : Nom de l'entreprise.
- `logo` : URL du logo de l'entreprise.
- `logoBackground` : Couleur du logo de l'entreprise.
- `position` : Poste au sein de l'entreprise.
- `postedAt` : Timestamp du moment du post.
- `contract` : Type de contrat (Full Time ou Part Time).
- `location` : Pays où se situe l'entreprise.
- `website` : URL du site de l'entreprise.
- `apply` : URL de la page du site pour postuler.
- `description` : Description de l'offre d'emploi.
- `requirements` :
  - `content` : Texte pour la partie Requirements.
  - `items` : Tableau pour la liste de la partie Requirements.
- `role` :
  - `content` : Texte pour la partie What you will do.
  - `items` : Tableau pour la liste de la partie What you will do.