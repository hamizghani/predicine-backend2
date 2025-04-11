/*
  Warnings:

  - You are about to drop the `Batch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Batch" DROP CONSTRAINT "Batch_userStockId_fkey";

-- DropTable
DROP TABLE "Batch";

-- CreateTable
CREATE TABLE "StockBatch" (
    "id" SERIAL NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "userStockId" INTEGER NOT NULL,

    CONSTRAINT "StockBatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StockBatch_userStockId_idx" ON "StockBatch"("userStockId");

-- AddForeignKey
ALTER TABLE "StockBatch" ADD CONSTRAINT "StockBatch_userStockId_fkey" FOREIGN KEY ("userStockId") REFERENCES "UserStock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
