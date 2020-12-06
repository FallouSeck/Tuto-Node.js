Consignes et instructions

[*] rassembler tous les controllers(middleware) dans le même fichier
[*] virer les views-engines ainsi que le dossier views
[*] ajouter app.use(body-Parser.json({}))
[*] renvoyer une erreur status 400 en cas d'erreur sur les requetes postman
[*] créer 5 todo (3 => true, 2 => false)
[*] requête GET avec isDone => true
[*] rajouter un critère "afterDate" dans l'URL (pour le controller getAllTodo). Il permet de récupérer les todos qui ont été saisis APRES cette date
[*] rajouter un critère "beforeDate" dans l'URL (pour le controller getAllTodo). Il permet de récupérer les todos qui ont été saisis AVANT cette date
[*] route getAllUser => récuperer tout les users en fontions de isValid (true, false)
[*] route getAllUser => récuperer tout les users en fontions du status (admin, colab)
[*] ajouter un champ userId dans le model Todos en utilisant One-To-Many relationship
[*] ajouter le userId lors de la creation de todos


serverName du server => localhost:3000/api 

collections      
users     todos     agendas  

post     
serverName/collections/     
body => les infos créer     
headers ....  

put      
serverName/collections/:id     
body => les nouvelles info à mettre à jour     
headers ...  

get (one)     
serverName/collections/:id     
body => no pas besoin   

get (all)     
serverName/collections     
body => pas besoins     

delete     
serverName/collections/:id     
body => pas besoins   


Pour les Get =>      get (one) + criteres     
serverName/collections:id?critere1&critere2&critere3&.....     

exemple de critre =>          title egal à "aaa" => title=aaa         version egal à  10 => version=10         
serverName/collections/:id?title=aaa&version=10