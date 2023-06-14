CREATE TABLE `user` (
  `user_id` integer PRIMARY KEY,
  `last_name` varchar(255),
  `first_name` varchar(255),
  `email` varchar(255),
  `address` varchar(255),
  `zip_code` integer,
  `city` varchar(255),
  `job` varchar(255),
  `is_admin` integer,
  `taste_profile_id` integer,
  `receipe_id` integer
);

CREATE TABLE `taste_profile` (
  `taste_profile_id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` TEXT,
  `taste_level_id` integer,
  `wine_id` integer
);

CREATE TABLE `wine` (
  `wine_id` integer PRIMARY KEY,
  `name` varchar(255),
  `origin` varchar(255),
  `img_wine` varchar(255),
  `description` TEXT
);

CREATE TABLE `taste_level` (
  `taste_level_id` integer PRIMARY KEY,
  `taste_id` integer,
  `level` integer
);

CREATE TABLE `taste` (
  `taste_id` integer PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `receipe` (
  `receipe_id` integer PRIMARY KEY,
  `cepage_level_id` integer
);

CREATE TABLE `cepage_level` (
  `cepage_level_id` integer PRIMARY KEY,
  `cepage_id` integer,
  `level` integer
);

CREATE TABLE `cepage` (
  `cepage_id` integer PRIMARY KEY,
  `name` varchar(255)
);


CREATE TABLE `review` (
  `review_id` integer PRIMARY KEY,
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
