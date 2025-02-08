/*
  Warnings:

  - You are about to alter the column `type` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Int`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `type` INTEGER NOT NULL;
