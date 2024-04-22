USE e_commerce;
-- Vaciar la tabla `users` si ya tiene datos y restablecer los valores de autoincremento
TRUNCATE TABLE users;
ALTER TABLE `users` AUTO_INCREMENT = 1;

-- Inserción de datos para la tabla `users`
INSERT INTO users (id, name, last_name, address, email, card_number, password, `role`) VALUES
(1, 'John', 'Doe', '123 Main Street', 'john@example.com', 1234567890, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'user'),
(2, 'Jane', 'Smith', '456 Elm Street', 'jane@example.com', 9876543210, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'user'),
(3, 'Michael', 'Johnson', '789 Oak Street', 'michael@example.com', 1357924680, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'user'),
(4, 'Emily', 'Williams', '101 Maple Street', 'emily@example.com', 2468135790, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'user'),
(5, 'David', 'Brown', '222 Pine Street', 'david@example.com', 3692581470, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'user'),
(6, 'Sarah', 'Jones', '333 Cedar Street', 'sarah@example.com', 9753108642, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'user'),
(7, 'Christopher', 'Garcia', '444 Birch Street', 'christopher@example.com', 7531908642, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'user'),
(8, 'Jennifer', 'Martinez', '555 Spruce Street', 'jennifer@example.com', 9517530864, '$2a$08$P23pfwfT/RRC4YbGyaDFoeVfxiP.oiKVA2zIjoNE5iP4h3t1rmamW', 'admin'),
(9, 'Daniel', 'Lopez', '666 Walnut Street', 'daniel@example.com', 3571594862, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(10, 'Lisa', 'Gonzalez', '777 Cherry Street', 'lisa@example.com', 1594872630, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(11, 'Matthew', 'Rodriguez', '888 Apple Street', 'matthew@example.com', 8529637410, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(12, 'Ashley', 'Hernandez', '999 Peach Street', 'ashley@example.com', 3698521470, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(13, 'Justin', 'Wilson', '111 Plum Street', 'justin@example.com', 1472583690, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(14, 'Samantha', 'Lopez', '222 Grape Street', 'samantha@example.com', 2581473690, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(15, 'Andrew', 'Perez', '333 Mango Street', 'andrew@example.com', 1239874560, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(16, 'Jessica', 'Sanchez', '444 Banana Street', 'jessica@example.com', 4567891230, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(17, 'Joshua', 'Ramirez', '555 Orange Street', 'joshua@example.com', 7894561230, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(18, 'Amanda', 'Torres', '666 Lemon Street', 'amanda@example.com', 9876543210, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(19, 'Brandon', 'Flores', '777 Lime Street', 'brandon@example.com', 6543219870, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user'),
(20, 'Elizabeth', 'Rivera', '888 Grapefruit Street', 'elizabeth@example.com', 3216549870, '$2a$08$DCtW6IvuJ3nPhYYp3lnV2.HVRx5ozq8LbZIrRxvcsO2h4CCjOvNQS', 'user');

-- Vaciar la tabla `orders` si ya tiene datos y restablecer los valores de autoincremento
TRUNCATE TABLE orders;
ALTER TABLE `orders` AUTO_INCREMENT = 1;

-- Inserción de datos para la tabla `orders`
INSERT INTO orders (id, created_at, code, updated_at, quantity, users_id, products_id) VALUES
(1, '2024-04-18 10:00:00', 'ORD001', '2024-04-18 10:00:00', 2, 1, 2),
(2, '2024-04-17 09:30:00', 'ORD002', '2024-04-17 09:30:00', 1, 2, 5),
(3, '2024-04-16 14:45:00', 'ORD003', '2024-04-16 14:45:00', 3, 3, 1),
(4, '2024-04-15 11:20:00', 'ORD004', '2024-04-15 11:20:00', 1, 4, 7),
(5, '2024-04-14 13:55:00', 'ORD005', '2024-04-14 13:55:00', 2, 5, 4),
(6, '2024-04-13 08:10:00', 'ORD006', '2024-04-13 08:10:00', 1, 6, 9),
(7, '2024-04-12 17:30:00', 'ORD007', '2024-04-12 17:30:00', 2, 7, 3),
(8, '2024-04-11 12:40:00', 'ORD008', '2024-04-11 12:40:00', 1, 8, 6),
(9, '2024-04-10 15:15:00', 'ORD009', '2024-04-10 15:15:00', 3, 9, 8),
(10, '2024-04-09 09:00:00', 'ORD010', '2024-04-09 09:00:00', 1, 10, 10),
(11, '2024-04-08 14:30:00', 'ORD011', '2024-04-08 14:30:00', 2, 1, 4),
(12, '2024-04-07 11:45:00', 'ORD012', '2024-04-07 11:45:00', 1, 2, 3),
(13, '2024-04-06 10:20:00', 'ORD013', '2024-04-06 10:20:00', 3, 3, 2),
(14, '2024-04-05 09:35:00', 'ORD014', '2024-04-05 09:35:00', 1, 4, 1),
(15, '2024-04-04 13:00:00', 'ORD015', '2024-04-04 13:00:00', 2, 1, 5),
(16, '2024-04-03 16:45:00', 'ORD016', '2024-04-03 16:45:00', 1, 2, 6),
(17, '2024-04-02 08:50:00', 'ORD017', '2024-04-02 08:50:00', 3, 3, 7),
(18, '2024-04-01 12:15:00', 'ORD018', '2024-04-01 12:15:00', 1, 4, 8),
(19, '2024-03-31 15:30:00', 'ORD019', '2024-03-31 15:30:00', 2, 5, 9),
(20, '2024-03-30 09:10:00', 'ORD020', '2024-03-30 09:10:00', 1, 6, 10);


-- Vaciar la tabla `favorites` si ya tiene datos y restablecer los valores de autoincremento
TRUNCATE TABLE favorites;
ALTER TABLE `favorites` AUTO_INCREMENT = 1;

-- Inserción de datos para la tabla `favorites`
INSERT INTO favorites (id, users_id, products_id) VALUES
(1, 1, 2),
(2, 2, 3),
(3, 3, 4),
(4, 4, 5),
(5, 5, 6),
(6, 6, 7),
(7, 7, 8),
(8, 8, 9),
(9, 9, 10),
(10, 10, 1);

-- Vaciar la tabla `comments` si ya tiene datos y restablecer los valores de autoincremento
TRUNCATE TABLE `comments` ;
ALTER TABLE `comments` AUTO_INCREMENT = 1;

-- Inserción de datos para la tabla `comments`
INSERT INTO `comments`  (id, `text`, users_id, products_id) VALUES
(1, 'Great quality and fast delivery!', 1, 1),
(2, 'Excellent customer service!', 1, 2),
(3, 'Love the design and fit.', 2, 3),
(4, 'Very comfortable to wear all day.', 3, 4),
(5, 'Amazing price for such good quality.', 5, 5),
(6, 'Looks even better in person!', 4, 6),
(7, 'Highly recommended!', 5, 6),
(8, 'Really satisfied with my purchase.', 1, 1),
(9, 'Exactly what I was looking for.', 3, 3),
(10, 'Great value for money.', 4, 4);

-- Vaciar la tabla `categories` si ya tiene datos y restablecer los valores de autoincremento
TRUNCATE TABLE `categories`;
ALTER TABLE `categories` AUTO_INCREMENT = 1;

-- Inserción de datos para la tabla `categories`
INSERT INTO categories (id, title) VALUES
(1, 'Women'),
(2, 'Man'),
(3, 'Trousers'),
(4, 'T-shirts'),
(5, 'Couple\'s clothing');


-- Vaciar la tabla `products` si ya tiene datos y restablecer los valores de autoincremento
TRUNCATE TABLE `products`;
ALTER TABLE `products` AUTO_INCREMENT = 1;

-- Inserción de datos para la tabla `products`
INSERT INTO products(title, description, price, image, featured, categories_id) VALUES
('Sky Spark', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal. Meticulously crafted details highlight the craftsmanship and care in its making. Additionally, its impeccable fit enhances the silhouette, providing an elegant and flattering appearance. Without a doubt, this garment will be an essential addition to any wardrobe, adding a touch of timeless style to any ensemble.', 15.99, 'https://img.sharemyimage.com/2024/04/22/1.Camiseta.webp', 1, 4),
('Night Shade', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal. Meticulously crafted details highlight the craftsmanship and care in its making. Additionally, its impeccable fit enhances the silhouette, providing an elegant and flattering appearance. Without a doubt, this garment will be an essential addition to any wardrobe, adding a touch of timeless style to any ensemble.', 29.99, 'https://img.sharemyimage.com/2024/04/22/2.Camiseta.webp', 1, 4),
('Dream Beam', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal. Meticulously crafted details highlight the craftsmanship and care in its making. Additionally, its impeccable fit enhances the silhouette, providing an elegant and flattering appearance. Without a doubt, this garment will be an essential addition to any wardrobe, adding a touch of timeless style to any ensemble.', 49.99, 'https://img.sharemyimage.com/2024/04/22/3.Camiseta.webp', 1, 4),
('Sun Blaze', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal. Meticulously crafted details highlight the craftsmanship and care in its making. Additionally, its impeccable fit enhances the silhouette, providing an elegant and flattering appearance. Without a doubt, this garment will be an essential addition to any wardrobe, adding a touch of timeless style to any ensemble.', 15.99, 'https://img.sharemyimage.com/2024/04/22/3.Duo.webp', 1, 5),
('Moon Light', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal. Meticulously crafted details highlight the craftsmanship and care in its making. Additionally, its impeccable fit enhances the silhouette, providing an elegant and flattering appearance. Without a doubt, this garment will be an essential addition to any wardrobe, adding a touch of timeless style to any ensemble.', 29.99, 'https://img.sharemyimage.com/2024/04/22/2.Duo.webp', 1, 5),
('Star Shine', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal. Meticulously crafted details highlight the craftsmanship and care in its making. Additionally, its impeccable fit enhances the silhouette, providing an elegant and flattering appearance. Without a doubt, this garment will be an essential addition to any wardrobe, adding a touch of timeless style to any ensemble.', 49.99, 'https://img.sharemyimage.com/2024/04/22/1.Duo.webp', 1, 5),
('Ocean Wave', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 24.99, 'https://img.sharemyimage.com/2024/04/22/4.Camiseta.webp', 1, 1),
('City Pulse', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 12.99, 'https://img.sharemyimage.com/2024/04/22/1.Mujer.webp', 0, 1),
('Shadow Sway', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 39.99, 'https://img.sharemyimage.com/2024/04/22/3.Mujer.webp', 0, 1),
('Velvet Touch', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 69.99, 'https://img.sharemyimage.com/2024/04/22/4.Mujer.webp', 1, 1 ),
('Rain Dance', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 24.99, 'https://img.sharemyimage.com/2024/04/22/3.Pantalones.webp', 1, 3),
('Fire Spark', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 12.99, 'https://img.sharemyimage.com/2024/04/22/1.Pantalones.webp', 0, 3),
('Silver Glow', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 39.99, 'https://img.sharemyimage.com/2024/04/22/2.Pantalones.webp', 0, 3),
('Mystic Charm', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 39.99, 'https://img.sharemyimage.com/2024/04/22/5.Pantalones.webp', 1, 3),
('Forest Whisper', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 24.99, 'https://img.sharemyimage.com/2024/04/22/4.Hombre.md.webp', 1, 2),
('Ice Frost', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 12.99, 'https://img.sharemyimage.com/2024/04/22/1.Hombre.md.webp', 0, 2),
('Crystal Clear', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 39.99, 'https://img.sharemyimage.com/2024/04/22/2.Hombre.md.webp', 0, 2),
('Moonlit Marvel', 'This garment is the perfect combination of style and comfort. Crafted with high-quality materials, this piece ensures a soft feel against the skin and exceptional durability. Its versatile design makes it ideal for various occasions, whether casual or formal.', 39.99, 'https://img.sharemyimage.com/2024/04/22/3.Hombre.md.webp', 1, 2);


