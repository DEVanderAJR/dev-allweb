/*
*Exemplo de consumo de api externa com NODE
*Teste API NODE*/

var url =  'https://jsonplaceholder.typicode.com/posts'; // api externa para teste
var request = require('request');
    request(url, function (error, response, body) {        
        console.log('error: ', error); //Exibe erros caso ocorra;
        console.log('status: ', response && response.statuscode);// Exibe codigo do status da conexão
      
        var posts = JSON.parse(body);

        posts.forEach(element => {
           console.log("Id: "+ element['id']);
           console.log("Titulo: "+ element['title']);
           console.log("Descricao: "+ element['body']);
                       
        });
        
    });

   