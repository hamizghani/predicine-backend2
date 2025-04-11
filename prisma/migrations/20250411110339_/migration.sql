/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `expirationDate` on the `UserStock` table. All the data in the column will be lost.
  - Added the required column `passwordHash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "passwordHash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserStock" DROP COLUMN "expirationDate";

-- CreateTable
CREATE TABLE "Tokens" (
    "userId" INTEGER NOT NULL,
    "refresh" TEXT NOT NULL,
    "access" TEXT NOT NULL,

    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Batch" (
    "id" SERIAL NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "userStockId" INTEGER NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_refresh_key" ON "Tokens"("refresh");

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_access_key" ON "Tokens"("access");

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_userStockId_fkey" FOREIGN KEY ("userStockId") REFERENCES "UserStock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
