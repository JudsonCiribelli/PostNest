/*
  Warnings:

  - A unique constraint covering the columns `[userRelationId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userRelationId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_userRelationId_key" ON "User"("userRelationId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userRelationId") ON DELETE RESTRICT ON UPDATE CASCADE;
