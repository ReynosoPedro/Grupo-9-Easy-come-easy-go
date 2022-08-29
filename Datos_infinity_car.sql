INSERT INTO brands 
VALUES (DEFAULT, "Ford"),(DEFAULT, "Nissan"),(DEFAULT, "Chevrolet"),(DEFAULT, "Peugeot"),(DEFAULT, "Renault"),(DEFAULT, "Volkswagen"),(DEFAULT, "Audi"),(DEFAULT, "Jeep");

INSERT INTO categories 
VALUES (DEFAULT, "SUV"),(DEFAULT, "Sédan"),(DEFAULT, "Hatchback"),(DEFAULT, "Coupe"),(DEFAULT, "Sport"),(DEFAULT, "Convertible"),(DEFAULT, "Utilitario");

INSERT INTO colors 
VALUES (DEFAULT, "Blanco"),(DEFAULT, "Azul"),(DEFAULT, "Gris obscuro"),(DEFAULT, "Gris"),(DEFAULT, "Negro");

INSERT INTO km_intervals
VALUES (DEFAULT, 1000),(DEFAULT, 20000),(DEFAULT, 10000),(DEFAULT, 50000),(DEFAULT, 110000),(DEFAULT, 120000),(DEFAULT, 30000);

INSERT INTO models
VALUES (DEFAULT, "Ecosport"),(DEFAULT, "Focus"),(DEFAULT, "Kicks"),(DEFAULT, "Cruze"),(DEFAULT, "208"),(DEFAULT, "kwid"),(DEFAULT, "Captur"),(DEFAULT, "Amarok"),(DEFAULT, "A4"),(DEFAULT, "Compass"),(DEFAULT, "Ranger");

INSERT INTO years
VALUES (DEFAULT, 2018),(DEFAULT, 2019),(DEFAULT, 2020),(DEFAULT, 2021),(DEFAULT, 2022);

INSERT INTO products
VALUES (DEFAULT, "Vehículo", 1, 2, 2, 1, 1, 6.050000, 1, "focus.jpeg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 2, 2, 3, 1, 2, 6.050000, 2, "nissan k.jpeg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 3, 1, 4, 4, 3, 6.050000, 3, "chevrolet cruze.jpeg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 4, 3, 5, 5, 4, 10.050000, 4, "peugeot active.jpeg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 5, 1, 6, 3, 5, 7.050000, 5, "renault kwid.jpeg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 5, 3, 7, 2, 4, 8.050000, 6, "reno-capture.jpeg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 6, 1, 8, 5, 6, 4.050000, 7, "volkswagenamarok.jpg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 7, 3, 9, 2, 3, 7.050000, 3, "audia4.jpeg", "Manual", "Nuevo", "Disponible"),(DEFAULT, "Vehículo", 8, 1, 10, 3, 7, 12.050000, 2, "jeep compas.jpeg", "Manual", "Nuevo", "Disponible");

INSERT INTO roles
VALUES (DEFAULT, "Administrador"),(DEFAULT, "Comprador"),(DEFAULT, "Vendedor");

INSERT INTO users
VALUES (DEFAULT, "Pedro Reynoso", "Qwerty", "$2a$10$fvx6RzyD/MJBUAQoEmI60uAeUZX.780oDyOAeTHOHPQV69iBMNowC", "2020-03-25", "pedro.reynoso.2022@gmail.com", "01114233056", 1, "1660309666675_img.jpg", 9),(DEFAULT, "vanesa", "vane", "$2a$10$7zYfQyl0N0eT6LA5l1.TYOXH0Zc4OTEoQfURo5rFm0FBghVP74IZO", "2019-03-25", "abcd@gmail.com", "1762556362", 1, "1659309134689_img.jpg", 9);

