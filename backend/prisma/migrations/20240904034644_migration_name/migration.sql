-- CreateTable
CREATE TABLE "Developers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" INTEGER NOT NULL,

    CONSTRAINT "Developers_pkey" PRIMARY KEY ("id")
);
