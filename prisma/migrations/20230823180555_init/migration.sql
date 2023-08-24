-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL,
    "idToken" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_idUser_key" ON "User"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "User_idToken_key" ON "User"("idToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_accessToken_key" ON "User"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_refreshToken_key" ON "User"("refreshToken");
