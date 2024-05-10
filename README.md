# TD JavaScript CLASSES & MVC
Les difficultés que j'ai rencontrées lors de ce Tp, étaient dans un premier temps la compréhension du système de vue. Une fois que j'ai compris le fonctionnement, j'ai eu des problèmes pour mettre en place le gestionnaire d’événements « click » sur le bouton incrémenter. La fonction se lançait, mais ne pouvait pas avoir accès à l'ensemble des attributs. Puis après quelques recherche sur stackoverflow, j'ai compris comment résoudre ce conflit. 
## MODULES ES6
### AVEC LES MODULES
Testez à nouveau le fonctionnement. Que constatez-vous ? Comment l’expliquez-vous ?
Après avoir retiré le scripte « counter.js » du fichier « index.html », à présent, on a plus accès à la classe Counter ainsi on ne peut pas créer d'objet associé à cette classe. Pour remédier à ce problème, il faut importer la Classe depuis son fichier associé :
import { counter } from "./../models/counter.js"   
### UN PEU MIEUX
Expliquez le résultat obtenu.

