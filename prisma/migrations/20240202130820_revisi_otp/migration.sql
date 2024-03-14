-- DropForeignKey
ALTER TABLE `otp` DROP FOREIGN KEY `otp_user_id_fkey`;

-- AlterTable
ALTER TABLE `otp` MODIFY `user_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `otp` ADD CONSTRAINT `otp_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
