// PostgreSQL:
sql
SELECT * 
FROM products 
WHERE price BETWEEN 50 AND 200 
ORDER BY price ASC 
LIMIT 10 OFFSET :offset;

// MongoDB:
db.products.find({ 
    category: "Electronics" 
}).sort({ 
    price: -1 
}).limit(5).skip(page_number * 5);


// How would you optimize the queries for high traffic scenarios (e.g., indexing, caching)?

// index:
// PostgreSQL
CREATE INDEX idx_price ON products (price);

// MongoDB
db.products.createIndex({ category: 1, price: -1 });

// -----
// chaching
// PostgreSQL:
EXPLAIN ANALYZE SELECT * FROM products WHERE price BETWEEN 50 AND 200 ORDER BY price ASC LIMIT 10 OFFSET :offset;

// MongoDB:
db.products.find({ 
    category: "Electronics" 
}).sort({ 
    price: -1 
}).limit(5).explain("executionStats");
