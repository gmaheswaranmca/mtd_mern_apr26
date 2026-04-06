E-Commerce system Tables/Collections, Problem Statements and Solution on MySQL

# Tables / Collections
```text
users: id, name, email
products: id, name, price, stock
orders: id, user_id, total, created_at
order_items: order_id, product_id, quantity
```

# Data:
```csv
## **users.csv**
id,name,email
1,Arun Kumar,arun@example.com
2,Divya Raj,divya@example.com
3,Vikram Singh,vikram@example.com
4,Meena Lakshmi,meena@example.com
5,Karthik R,karthik@example.com

## **products.csv*
id,name,price,stock
1,Mobile Phone,15000,50
2,Laptop,60000,20
3,Headphones,2000,100
4,Smart Watch,5000,75
5,Keyboard,1500,60

## **orders.csv**
id,user_id,total,created_at
1,1,17000,2026-03-25 10:15:00
2,2,60000,2026-03-26 12:30:00
3,3,3500,2026-03-27 09:45:00
4,1,65000,2026-03-28 14:10:00
5,4,5000,2026-03-29 16:20:00

## **order_items.csv**
order_id,product_id,quantity
1,1,1
1,3,1
2,2,1
3,3,1
3,5,1
4,2,1
4,3,1
5,4,1
```

# 🧠 Practice Problems 
```text
1. Create a database named `ecommerce_db` and switch to it.
2. Create all four tables (`users`, `products`, `orders`, `order_items`) with appropriate data types.
3. Add primary keys to all tables.
4. Modify the `products` table to change `price` to `DECIMAL(10,2)`.
5. Drop and recreate the `order_items` table with proper structure.

6. Insert all given CSV data into respective tables.
7. Update stock of all products by reducing 5 units.
8. Increase price of all products by 10%.
9. Delete users who have not placed any orders.
10. Insert a new order with multiple items.

11. Fetch all users.
12. Fetch all products with price greater than 5000.
13. Retrieve all orders placed by user_id = 1.
14. Display product names and their stock.
15. Find total number of orders.

16. Get products with stock between 50 and 100.
17. Find users whose name starts with 'A'.
18. Retrieve orders placed after a specific date.
19. Find products not in stock (stock = 0).
20. Get orders with total between 3000 and 20000.

21. Calculate average product price.
22. Find maximum and minimum product price.
23. Convert all user names to uppercase.
24. Extract date from `created_at`.
25. Count number of products available.

26. Find total orders per user.
27. Calculate total revenue generated per user.
28. Find number of products sold per product_id.
29. Get users who placed more than 1 order.
30. Find products with total sales quantity > 1.
```