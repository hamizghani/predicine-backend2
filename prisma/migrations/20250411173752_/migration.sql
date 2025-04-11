/*
  Warnings:

  - A unique constraint covering the columns `[userStockId]` on the table `ForecastedUserStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userStockId]` on the table `ForecastedUserStock` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UserStock" ADD COLUMN     "sold" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "total" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "ForecastedUserStock_userStockId_key" ON "ForecastedUserStock"("userStockId");

-- CreateIndex
CREATE UNIQUE INDEX "ForecastedUserStock_id_userStockId_key" ON "ForecastedUserStock"("id", "userStockId");
