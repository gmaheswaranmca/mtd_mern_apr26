# CRUD ops 
```
    Create Read Update Delete 
    Read -> Query 


Example: Trainer Management Platform
- db: trainer_app_db
- collections: 
    - trainers: {id, name, skills, photo}
    - admins: {id, email, password, role}

1. Mobile Management 
    mobiles {id, name, model, price, photo} 
    admins

2. Patient Maangement
    patients {id, name, gender, age, photo}
    admins

3. Cab Management
    cars {id, model, number, type, photo}
    admins
test> show databases
test> use trainer_app_db
trainer_app_db> show databases
trainer_app_db> db.trainers.insertOne({"name":"Nithin", "skills" : "JavaScript", "photo" :""})
trainer_app_db> show databases
trainer_app_db> show collections
trainer_app_db> db.trainers.find()
trainer_app_db> db.trainers.insertOne({"name":"Mahesh", "skills" : "C#", "photo" :""})
trainer_app_db> db.trainers.find()
trainer_app_db> db.trainers.find({name:"Mahesh"})
trainer_app_db> db.trainers.updateOne({"name":"Mahesh"},
    {$set:{"skills":"JS"}})
trainer_app_db> db.trainers.find()
trainer_app_db> db.trainers.deleteOne({"name":"Mahesh"})
trainer_app_db> db.trainers.find()
trainer_app_db> db.admins.insertMany([
    {"email":"jaiswal@gmail.com", "password": "1234", "role": "manager"},
    {"email":"padidar@gmail.com", "password": "1234", "role": "agent"}
])
trainer_app_db> db.admins.find()
trainer_app_db> db.admins.find({"email":"jaiswal@gmail.com"})
trainer_app_db> db.admins.findOne({"email":"jaiswal@gmail.com"})
```
# Mongo DB 
```
    Building Block: document 
    !JSON document (BSON)

    RDBMS           MongoDB
    Database        Database    !Container for data 
    Table           Collection 
    Rows            Documents  
    Referential     Referential and Embedded 
        model 


order 
    user details + billing addres + billing details
    + products selected in cart 
    == order info + line items
    == {id, user_id, bill_amount, address, pay_mode, status} +
       [{id, product_id, order_id, qty, price, amount}]
    == Referential Modeling
        orders:
            id, user_id, bill_amount, address, pay_mode, status 
            1,  10,      18000,       xyz,     gpay,     pending
        order_items: id, product_id, order_id, qty, price, amount
                     1, 1001,        1,        1,   16000, 16000
                     2, 4002,        1,        2,   1000,  2000 
        ---
        In mongo 
        orders
            [
                {id:1, user_id:10, bill_amount:18000, 
                address:xyz, pay_mode:gpay, status:pending },
                ...
            ]
        order_items: 
            [
                {id:1, product_id:1001, order_id:1, qty:1, 
                price:16000, amount:16000},
                {id:2, product_id:4002, order_id:1, qty:2, 
                price:1000, amount:2000}
                ...
            ]
    Embedded modeling:
        orders
            [
                {id:1, user_id:10, bill_amount:18000, 
                address:xyz, pay_mode:gpay, status:pending,
                items: [
                    {id:1, product_id:1001, qty:1, 
                    price:16000, amount:16000},
                    {id:2, product_id:4002, qty:2, 
                    price:1000, amount:2000}
                ]},
                ...
            ]
```