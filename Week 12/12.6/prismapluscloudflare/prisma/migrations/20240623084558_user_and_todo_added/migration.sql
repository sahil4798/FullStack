-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "meata" TEXT NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
