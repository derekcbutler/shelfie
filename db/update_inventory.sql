update products 
set 
name = ${name},
price = ${price},
url = ${url}
where product_id = ${id};

select * from products;