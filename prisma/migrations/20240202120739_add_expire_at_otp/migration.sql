/*
  Warnings:

  - Added the required column `expire_at` to the `otp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `otp` ADD COLUMN `expire_at` DATETIME(3) NOT NULL;
