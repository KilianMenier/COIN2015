# COIN2015
Une application pour la COnvention INoubliable lilloise, codée par Konwhald :3, sous licence GPL-3.0. Ne manquez rien des évènements de la journée !

# Comment l'adapter à sa sauce :
1/ Installer Cordova. Il s'agit du framework utilisé pour créer et compiler l'application. Il y a un paquet de tutos sur Internet
2/ Telecharger et placer dans son espace de travail le dossier entier
3/ Editer le fichier "planning.xml" (placé dans le dossier "www") pour mettre son propre planning.
4/ Jeter un coup d'oeil aux fichiers HTML pour adapter 
5/ Effacer le contenu du dossier data. Les fichiers dedans sont autogénérés par un script lisant le planning
6/ Naviguez vers ce dossier en ligne de commande, lancer www/fixDetails.py pour générer des pages HTML selon le nouveau planning
7/ Lancer "cordova build android". Attendez que ca finisse.
8/ Le fichier d'installation est dans platforms/android/output/apk


# TODO
-Des alarmes qui fonctionnent
-Un switch "j'y serais" en détails, avec une page qui affiche le titre et le bouton détails de tous les évènements où c'est en "on"
-Code plus propre
-XML pour la liste des bénévoles
-Trouver un framework plus solide ?