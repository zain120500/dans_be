/*
  Warnings:

  - You are about to alter the column `phone` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - Added the required column `otp` to the `otp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `otp` ADD COLUMN `otp` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `phone` VARCHAR(20) NULL;
