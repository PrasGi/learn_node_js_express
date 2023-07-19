-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(255) NULL,
    `city` VARCHAR(100) NULL,
    `provice` VARCHAR(100) NULL,
    `country` VARCHAR(100) NOT NULL,
    `contact_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `contacts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
