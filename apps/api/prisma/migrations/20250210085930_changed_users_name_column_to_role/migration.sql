/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Users_name_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    ADD COLUMN `role` VARCHAR(30) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_role_key` ON `Users`(`role`);
