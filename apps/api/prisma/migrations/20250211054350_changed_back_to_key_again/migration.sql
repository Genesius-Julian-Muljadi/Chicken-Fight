/*
  Warnings:

  - You are about to drop the column `regkey` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Users_regkey_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `regkey`,
    ADD COLUMN `key` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_key_key` ON `Users`(`key`);
