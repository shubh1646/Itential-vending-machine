## Project Structure :

### Backend(Server)
```
src
├── config.js
├── controllers                     # functions to connect routes to db operations
│   ├── admin.js
│   └── sodas.js
├── db                              # db connection and model definitions
│   └── models.js
├── public                          # html/js/css files for static part of site
├── routes                          # express middlewares (route wise)
│   ├── admins
│   │   └── index.js
│   └── sodas
│       └── index.js
├── server.js
└── utils                           #function for add on functionality
    ├── auth.js
    └── validation.js


```
### Frontend (Client Side code)
```
public/
├── css
│   └── style.css                   # css file for styling
├── images
│   └── banner.gif
├── index.html                      #main HTML file
└── js
    ├── jquery.js                   #Jquery
    └── script.js                   # custom js file 


```


## API Documentation 


### Admins 

    1 Post /api/admin 
        Create a new Admin 
        
            Required Fields in body :
            email :
            password :
        
     2. Post api/admin/login 
         Login for admin 
           
            Required Fields in body :
            email :
            password :
        
     3. Delete /api/admin/:email
        Delete admin with a given email id



### Sodas 
    1. Get /api/sodas/getAll
        Get Details all sodas in vending machine 

    2. Get /api/sodas/name/:name
        Get details of soda with a given name 

    3. Post /api/sodas/   (Auth)
        Create a new soda 
        Required Fields in body :
            sodaName :
            description :
            cost :
            qunatity:  

    4. Put /api/sodas/price/:sodaname   (Auth)
         Change the price of a given soda 
         Required Fields in body :
            cost :

    5. Put /api/sodas/quantity/:sodaname     (Auth)
         Change the quantity Available of a given soda
         Required Fields in body :
           quantity :
    6. Put /api/sodas/buy/:sodaname          
        Buy the soda 

### Machine 
    1.  Get /api/machine/transactions       (Auth)
        Get details of transiction done in vending machine 


### Prerequisite
must have docker set up and running on your system


'''
git clone the project
cd Itential-vending-machine 
RUN:  docker build -t vernding-server .
RUN docker compose up -d

1. Create admin 
2. Login using email n password 
2. It will return a JWT Token , Use that token as auth-token as header in order to use authorize ids
3. Initially database is empty, Create new sodas using Post /api/sodas/


'''

