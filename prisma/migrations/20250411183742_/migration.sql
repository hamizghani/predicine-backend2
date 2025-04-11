-- CreateIndex
CREATE INDEX "UserStock_userId_sold_idx" ON "UserStock"("userId", "sold" DESC);
