/*
  Warnings:

  - You are about to drop the column `userRelationId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropIndex
DROP INDEX "User_userRelationId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userRelationId";

-- DropTable
DROP TABLE "Post";
