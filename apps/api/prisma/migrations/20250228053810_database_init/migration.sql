-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "role" VARCHAR(30) NOT NULL,
    "regkey" TEXT NOT NULL,
    "password" TEXT,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonials" (
    "id" SERIAL NOT NULL,
    "testifier" VARCHAR(50),
    "testimony" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "promoted" BOOLEAN,
    "name" VARCHAR(30) NOT NULL,
    "type" INTEGER NOT NULL,
    "overview" VARCHAR(60),
    "desc" TEXT,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_regkey_key" ON "Users"("regkey");
