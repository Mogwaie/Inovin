CREATE TABLE `user` (
  `user_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255),
  `zip_code` integer,
  `city` varchar(255),
  `job` varchar(255),
  `is_admin` integer,
  `taste_profile_id` integer,
  `receipe_id` integer
);

CREATE TABLE `taste_profile` (
  `taste_profile_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `description` TEXT,
  `taste_level_id` integer,
  `wine_id` integer
);

CREATE TABLE `wine` (
  `wine_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `origin` varchar(255),
  `img_wine` varchar(255),
  `description` TEXT
);

CREATE TABLE `taste_level` (
  `taste_level_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `taste_id` integer,
  `level` integer
);

CREATE TABLE `taste` (
  `taste_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `receipe` (
  `receipe_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cepage_level_id` integer
);

CREATE TABLE `cepage_level` (
  `cepage_level_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cepage_id` integer,
  `level` integer
);

CREATE TABLE `cepage` (
  `cepage_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `taste_level_id` integer
);


CREATE TABLE `review` (
  `review_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255),
  `user_last_name` varchar(255),
  `user_email` varchar(255),
  `message` TEXT,
  `rating` integer
);


ALTER TABLE `user` ADD FOREIGN KEY (`taste_profile_id`) REFERENCES `taste_profile` (`taste_profile_id`);

ALTER TABLE `taste_profile` ADD FOREIGN KEY (`taste_level_id`) REFERENCES `taste_level` (`taste_level_id`);

ALTER TABLE `taste_level` ADD FOREIGN KEY (`taste_id`) REFERENCES `taste` (`taste_id`);

ALTER TABLE `taste_profile` ADD FOREIGN KEY (`wine_id`) REFERENCES `wine` (`wine_id`);

ALTER TABLE `user` ADD FOREIGN KEY (`receipe_id`) REFERENCES `receipe` (`receipe_id`);

ALTER TABLE `receipe` ADD FOREIGN KEY (`cepage_level_id`) REFERENCES `cepage_level` (`cepage_level_id`);

ALTER TABLE `cepage_level` ADD FOREIGN KEY (`cepage_id`) REFERENCES `cepage` (`cepage_id`);

ALTER TABLE `cepage` ADD FOREIGN KEY (`taste_level_id`) REFERENCES `taste_level` (`taste_level_id`);


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