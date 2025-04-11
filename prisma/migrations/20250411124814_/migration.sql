/*
  Warnings:

  - A unique constraint covering the columns `[userStockId,expirationDate]` on the table `StockBatch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,medicineId]` on the table `UserStock` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "StockBatch_userStockId_idx";

-- DropIndex
DROP INDEX "UserStock_userId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "StockBatch_userStockId_expirationDate_key" ON "StockBatch"("userStockId", "expirationDate");

-- CreateIndex
CREATE UNIQUE INDEX "UserStock_userId_medicineId_key" ON "UserStock"("userId", "medicineId");
