-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "price" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionHistory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "TransactionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "photoLink" TEXT NOT NULL,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStock" (
    "id" SERIAL NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForecastedMedicine" (
    "id" SERIAL NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "requiredStock" INTEGER NOT NULL,
    "percentage" INTEGER NOT NULL,
    "stockoutDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ForecastedMedicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiseaseRecords" (
    "id" SERIAL NOT NULL,
    "diseaseId" INTEGER NOT NULL,

    CONSTRAINT "DiseaseRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiseaseMedicineCorrelation" (
    "id" SERIAL NOT NULL,
    "diseaseId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "correlationPercentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DiseaseMedicineCorrelation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "TransactionHistory_medicineId_idx" ON "TransactionHistory"("medicineId");

-- CreateIndex
CREATE INDEX "TransactionHistory_userId_idx" ON "TransactionHistory"("userId");

-- CreateIndex
CREATE INDEX "UserStock_userId_idx" ON "UserStock"("userId");

-- CreateIndex
CREATE INDEX "ForecastedMedicine_userId_idx" ON "ForecastedMedicine"("userId");

-- CreateIndex
CREATE INDEX "DiseaseRecords_diseaseId_idx" ON "DiseaseRecords"("diseaseId");

-- CreateIndex
CREATE UNIQUE INDEX "DiseaseMedicineCorrelation_medicineId_diseaseId_key" ON "DiseaseMedicineCorrelation"("medicineId", "diseaseId");

-- AddForeignKey
ALTER TABLE "TransactionHistory" ADD CONSTRAINT "TransactionHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionHistory" ADD CONSTRAINT "TransactionHistory_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStock" ADD CONSTRAINT "UserStock_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStock" ADD CONSTRAINT "UserStock_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForecastedMedicine" ADD CONSTRAINT "ForecastedMedicine_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForecastedMedicine" ADD CONSTRAINT "ForecastedMedicine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiseaseRecords" ADD CONSTRAINT "DiseaseRecords_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiseaseMedicineCorrelation" ADD CONSTRAINT "DiseaseMedicineCorrelation_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiseaseMedicineCorrelation" ADD CONSTRAINT "DiseaseMedicineCorrelation_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
