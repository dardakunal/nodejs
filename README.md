# nodejs

mysql> create database customers;
Query OK, 1 row affected (0.01 sec)

mysql> use customers
Database changed
mysql> CREATE TABLE  customers (id INT NOT NULL AUTO_INCREMENT, name varchar(255), email varchar(255), PRIMARY KEY (id)  );





ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'test123#';Query OK, 0 rows affected (0.00 sec)

mysql> flush privileges;Query OK, 0 rows affected (0.00 sec)

