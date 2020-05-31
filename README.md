# calculadora

El main.js lo he planteado de la siguiente forma.

  1.- Primero he extraído el div 'resultado' donde se van a sacar los resultados y los botones metidos en un div general 
  
  2.- Cuando son pulsados esos botones se lanzan eventos en cada uno de los botones de los cuales C y '=' lanzan funciones distintas
    2.1.- La de 'C' borra todo lo que hay en el div 'resultado'
    2.2.- La de '=' lanza otra función que da el resultado.
  
  3.- Por ultimo esta default que es todo el resto de botones que lanzan una funcion que se encarga de evaluar/calcular las operaciones
      que lanzamos y se imprimen en el div 'resultado'
