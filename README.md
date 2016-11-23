# node-restful-sample

### app-restify
  
  use docker deploy mongodb db server.
  
        npm install restify
        npm install mongojs
  
  - post
    
        curl -i -X POST -H "Content-Type: application/json" -d '{"title":"Penner" , "description":"https://github.com/penneryu" , "location":"Shanghai, China"}' http://127.0.0.1:8080/jobs
        
  - get
  
        http://127.0.0.1:8080/jobs
        http://127.0.0.1:8080/jobs/58353cd84377959505af5f15
        
