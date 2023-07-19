-- CreateTable
CREATE TABLE `users` (
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;
