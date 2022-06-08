# nodejs

mysql> create database customers;
Query OK, 1 row affected (0.01 sec)

mysql> use customers
Database changed
mysql> CREATE TABLE  customers (id INT NOT NULL AUTO_INCREMENT, name varchar(255), email varchar(255), PRIMARY KEY (id)  );
