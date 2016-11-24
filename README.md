# node-restful-sample

### app-restify
  
  use docker deploy mongodb db server. use restify create restful webservice.
  
        npm install restify
        npm install mongojs
  
  - post
    
        curl -i -X POST -H "Content-Type: application/json" -d '{"title":"Penner" , "description":"https://github.com/penneryu" , "location":"Shanghai, China"}' http://127.0.0.1:8080/jobs
        
  - get
  
        http://127.0.0.1:8080/jobs
        http://127.0.0.1:8080/jobs/58353cd84377959505af5f15
        

### app-express

   use docker deploy mongodb db server. use express create restful webservice.
   
   		 npm install express
   		 npm install mongoose
   		 npm install body-parser
   		 
   - post
   
   		 curl -i -X POST -H "Content-Type: application/json" -d '{"twitter_id":"Yu", "name":"Penenr Yu", "age":18}' http://localhost:3000/api/users
   		 
   - get
   
   		http://localhost:3000/api/users/
   		http://localhost:3000/api/users/5836a0d6192814aab942d989
   	
   - put
   	
   		curl -i -X PUT -H "Content-Type: application/json" -d '{"name":"Penenr Yu", "age":19}' http://localhost:3000/api/users/5836a0d6192814aab942d989
   		
   - delete

  		curl -i -X DELETE  http://localhost:3000/api/users/5836a0d6192814aab942d989


 		