-- CreateTable
CREATE TABLE "Assignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "dataAnswered" DATETIME NOT NULL,
    "dateConcluded" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Assignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
