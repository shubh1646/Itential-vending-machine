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



```

## Business Logic








## API Documentation 


### Admins 

    1 Post /api/admin 
        Create a new Admin 
        
            Required Fields in body :
            emailId :
            password :
        
     2. Post api/admin/login 
         Login for admin 
           
            Required Fields in body :
            emailId :
            password :
        
     3. Delete /api/admin/:email
        Delete admin with a given email id



### Sodas 
    1. Get /api/sodas/getAll
        Get Details all sodas in vending machine 

    2. Get /api/sodas/name/:name
        Get details of soda with a given name 

    3. Post /api/sodas/
        Create a new soda 
        Required Fields in body :
            sodaName :
            description :
            cost :
            qunatity:  

    4. Put /api/sodas/price/:sodaname
         Change the price of a given soda 
         Required Fields in body :
            cost :

    5. Put /api/sodas/quantity/:sodaname
         Change the quantity Available of a given soda
         Required Fields in body :
           quantity :
    6. Put /api/sodas//buy/:sodaname
        Buy the soda 

### Machine 
    1.  Get /api/machine/transictions
        Get details of transiction done in vending machine 



'''

If running on system 
1. Install mysql 
2. $ mysql -u root
3. run these commands :
    * create database vendingdb;
    * create user vendinguser identified by 'vendingpass';
    * grant all privileges on vendingdb.* to vendinguser;
    * flush privileges;

'''

