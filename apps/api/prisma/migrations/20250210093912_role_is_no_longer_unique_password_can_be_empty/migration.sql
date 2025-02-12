-- DropIndex
DROP INDEX `Users_role_key` ON `users`;

-- AlterTable
ALTER TABLE `users` MODIFY `password` VARCHAR(191) NULL;
