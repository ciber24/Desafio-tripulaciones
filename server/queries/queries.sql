-- Crear tabla usuarios
CREATE TABLE users (
        user_id serial NOT NULL PRIMARY KEY UNIQUE,
        password varchar(9),
        email varchar(45) UNIQUE,
        role varchar(45)
);

-- Insertar datos en tabla usuarios
INSERT INTO users (password, email, role)
VALUES
('Prueba13$','prueba@correo.com','admin'),
('Galleta4!','dale@email.es','client'),
('Tortilla','tortilla@correo.com','client');

-- Actualizar datos en tabla usuarios
UPDATE users
    SET
        password='Doraimon', 
        role='admin'
    WHERE email = 'dale@email.es';

-- Buscar datos en tabla usuarios con email dado
SELECT * FROM users WHERE email='tortilla@correo.com'

