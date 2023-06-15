DROP DATABASE IF EXISTS `inovin`;
CREATE DATABASE `inovin`;
USE `inovin`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `address` varchar(255),
  `zip_code` integer,
  `city` varchar(255),
  `job` varchar(255),
  `is_admin` integer,
  `taste_profile_id` integer,
  `receipe_id` integer
);

DROP TABLE IF EXISTS `taste_profile`;
CREATE TABLE `taste_profile` (
  `taste_profile_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `description` TEXT,
  `taste_id` integer,
  `wine_id` integer
);

DROP TABLE IF EXISTS `wine`;
CREATE TABLE `wine` (
  `wine_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `origin` varchar(255),
  `img_wine` varchar(255),
  `description` TEXT
);

DROP TABLE IF EXISTS `taste`;
CREATE TABLE `taste` (
  `taste_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255)
);

DROP TABLE IF EXISTS `receipe`;
CREATE TABLE `receipe` (
  `receipe_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cepage_level_id` integer
);

DROP TABLE IF EXISTS `cepage_level`;
CREATE TABLE `cepage_level` (
  `cepage_level_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cepage_id` integer,
  `level` integer
);

DROP TABLE IF EXISTS `cepage`;
CREATE TABLE `cepage` (
  `cepage_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `taste_level_id` integer
);

DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `review_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255),
  `user_last_name` varchar(255),
  `user_email` varchar(255),
  `message` TEXT,
  `rating` integer
);

ALTER TABLE `user` ADD FOREIGN KEY (`taste_profile_id`) REFERENCES `taste_profile` (`taste_profile_id`);

ALTER TABLE `taste_profile` ADD FOREIGN KEY (`taste_id`) REFERENCES `taste` (`taste_id`);

ALTER TABLE `taste_profile` ADD FOREIGN KEY (`wine_id`) REFERENCES `wine` (`wine_id`);

ALTER TABLE `user` ADD FOREIGN KEY (`receipe_id`) REFERENCES `receipe` (`receipe_id`);

ALTER TABLE `receipe` ADD FOREIGN KEY (`cepage_level_id`) REFERENCES `cepage_level` (`cepage_level_id`);

ALTER TABLE `cepage_level` ADD FOREIGN KEY (`cepage_id`) REFERENCES `cepage` (`cepage_id`);

ALTER TABLE `cepage` ADD FOREIGN KEY (`taste_level_id`) REFERENCES `taste_level` (`taste_level_id`);

INSERT INTO taste (name) 
VALUES ('Châteauneuf-du-Pape'), ('Château Margaux'), ('Beaujolais Nouveau'), ('Domaine de la Romanée-Conti'), ('Le Sancerre Blanc'), ('Pouilly-Fuissé'), ('Châteauneuf-du-Pape Blanc'), ('Château Yquem');

INSERT INTO user (firstname, lastname, email, address, zip_code, city, job, is_admin)
VALUES 
  ('Valeriy', 'Appius', 'valeriy.appius@example.com', '4 rue react', '33300', 'bordeaux', "dev", "0"),
  ('Alice', 'Johnson', 'alice.johnson@example.com', '10 rue du Paradis', '75001', 'Paris', 'Ingénieur', '0'),
  ('Robert', 'Brown', 'robert.brown@example.com', '15 rue vue', '10001', 'New York', 'Architecte', '0'),
  ('Sophie', 'Garcia', 'sophie.garcia@example.com', '22 Avenue de la Liberté', '69002', 'Lyon', 'Avocate', '0'),
  ('Maxime', 'Dubois', 'maxime.dubois@example.com', '5 Calle Principal', '28001', 'Madrid', 'Consultant', '0'),
  ('Julia', 'Lee', 'julia.lee@example.com', '7 Elm Street', '90001', 'Los Angeles', 'Designer', '0'),
  ('Alexandre', 'Moreau', 'alexandre.moreau@example.com', '27 Rue de la Paix', '75008', 'Paris', 'Comptable', '0'),
  ('Laura', 'Sanchez', 'laura.sanchez@example.com', '14 Calle del Sol', '28002', 'Madrid', 'Infirmière', '0'),
  ('Thomas', 'Rousseau', 'thomas.rousseau@example.com', '3 Avenue des Champs-Élysées', '75009', 'Paris', 'Journaliste', '0'),
  ('john', 'doe', 'j.do@example.com', '3 Avenue angular', '75009', 'Paris', 'Journaliste', '0');

INSERT INTO taste_profile (name, description) 
VALUES 
("riches et corsés", "Vous apprécierez certainement les vins rouges riches et corsés, avec des tanins prononcés et une belle longueur en bouche. Ces vins offrent des arômes intenses de fruits mûrs, d'épices et parfois une subtile touche de boisé. Ils sont parfaits pour accompagner des plats savoureux tels que des viandes grillées, des plats mijotés ou des fromages affinés."),
("puissants et complexes", "Vous êtes un amateur de vins rouges puissants et complexes, vous serez captivé par ceux qui présentent une structure imposante, des arômes profonds de fruits noirs, d'épices exotiques et une élégante touche de vanille. Ces vins sont souvent issus de cépages robustes tels que le Syrah ou le Cabernet Sauvignon et se distinguent par leur longueur en bouche et leurs tanins fermes. Ils sont parfaits pour accompagner des plats audacieux tels que des viandes braisées, des ragoûts ou des plats épicés."),
("légers et fruités", "Vous recherchez des vins rouges plus légers et fruités, vous serez attiré par ceux qui offrent des arômes croquants de fruits rouges, des notes florales et une fraîcheur agréable. Ils sont parfaits pour une dégustation conviviale entre amis ou pour accompagner des plats légers et savoureux."),
("élégants et raffinés", "Vous appréciez les vins rouges élégants et raffinés, vous serez conquis par ceux qui offrent une subtile complexité, des arômes délicats de fruits rouges, de fleurs et une fine note de sous-bois. Ces vins, souvent issus de cépages délicats tels que le Pinot Noir, se distinguent par leur finesse, leur équilibre et leur délicatesse en bouche. Ils sont parfaits pour accompagner des plats délicats tels que des volailles rôties, des plats à base de champignons ou des fromages à pâte molle."),
("secs et élégants", "Les vins blancs secs et élégants vous raviront avec leurs arômes floraux, leurs notes d'agrumes et leur belle fraîcheur. Ils se marient parfaitement avec des poissons, des fruits de mer ou des fromages de chèvre frais."),
("frais et vifs", "Vous préférez les vins blancs, vous serez enchanté par ceux qui sont frais, vifs et dotés d'une belle acidité. Ces vins offrent des arômes délicats d'agrumes, de fleurs blanches et peuvent présenter une subtile minéralité. Ils sont particulièrement appréciés en apéritif, avec des fruits de mer ou des salades légères."),
("riches et complexes", "Vous recherchez des vins blancs plus riches et complexes, vous apprécierez ceux qui offrent une belle structure, des arômes de fruits exotiques, de miel et des nuances épicées. Ils sont parfaits pour accompagner des plats plus élaborés ou pour déguster en tant qu'expérience sensorielle à part entière."),
("doux et liquoreux", "Les vins doux et liquoreux vous séduiront par leur richesse et leur onctuosité. Ces vins offrent des arômes intenses de fruits confits, de miel et d'épices douces. Ils sont parfaits en accompagnement de desserts ou pour déguster avec un foie gras.");

INSERT INTO cepage (name)
VALUES
    ('Grenache'),
    ('Petit Verdot'),
    ('Gamay'),
    ('Pinot Noir'),
    ('Sancerre Blanc'),
    ('Chardonnay'),
    ('Picpoul'),
    ('Sémillon'),
    ('Cabernet Sauvignon'),
    ('Syrah'),
    ('Merlot'),
    ('Malbec'),
    ('Carmenère'),
    ('Tannat'),
    ('Petit Syrah'),
    ('Alicante Bouschet'),
    ('Cinsault'),
    ('Dolcetto'),
    ('Zweigelt'),
    ('Blauer Portugieser'),
    ('Nebbiolo'),
    ('Sangiovese'),
    ('Mazuelo'),
    ('Tempranillo'),
    ('Tenlo Blanc'),
    ('Vermentino (Rolle)'),
    ('Grüner Veltliner'),
    ('Albariño'),
    ('Viognier'),
    ('Riesling'),
    ('Chenin Blanc'),
    ('Gewürztraminer'),
    ('Folle Blanche'),
    ('Trebbiano (Ugni Blanc)'),
    ('Melon de Bourgogne'),
    ('Muscon'),
    ('Muscadelle'),
    ('Furmint'),
    ('Palomino'),
    ('Colombard');
