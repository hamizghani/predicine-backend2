/*
  Warnings:

  - You are about to drop the column `photoLink` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the `DiseaseRecords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ForecastedMedicine` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageUrl` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DiseaseRecords" DROP CONSTRAINT "DiseaseRecords_diseaseId_fkey";

-- DropForeignKey
ALTER TABLE "ForecastedMedicine" DROP CONSTRAINT "ForecastedMedicine_medicineId_fkey";

-- DropForeignKey
ALTER TABLE "ForecastedMedicine" DROP CONSTRAINT "ForecastedMedicine_userId_fkey";

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "photoLink",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "DiseaseRecords";

-- DropTable
DROP TABLE "ForecastedMedicine";

-- CreateTable
CREATE TABLE "ForecastedUserStock" (
    "id" SERIAL NOT NULL,
    "userStockId" INTEGER NOT NULL,
    "requiredStock" INTEGER NOT NULL,
    "percentage" INTEGER NOT NULL,
    "stockoutDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ForecastedUserStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiseaseRecord" (
    "id" SERIAL NOT NULL,
    "diseaseId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiseaseRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ForecastedUserStock_userStockId_idx" ON "ForecastedUserStock"("userStockId");

-- CreateIndex
CREATE INDEX "DiseaseRecord_diseaseId_idx" ON "DiseaseRecord"("diseaseId");

-- AddForeignKey
ALTER TABLE "ForecastedUserStock" ADD CONSTRAINT "ForecastedUserStock_userStockId_fkey" FOREIGN KEY ("userStockId") REFERENCES "UserStock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiseaseRecord" ADD CONSTRAINT "DiseaseRecord_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
