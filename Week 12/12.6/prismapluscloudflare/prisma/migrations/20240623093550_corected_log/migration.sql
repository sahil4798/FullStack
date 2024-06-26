/*
  Warnings:

  - You are about to drop the column `meata` on the `Log` table. All the data in the column will be lost.
  - Added the required column `meta` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "meata",
ADD COLUMN     "meta" TEXT NOT NULL;
