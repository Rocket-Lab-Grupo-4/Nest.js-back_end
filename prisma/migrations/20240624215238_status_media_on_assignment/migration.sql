/*
  Warnings:

  - You are about to drop the column `media` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Assignment` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "dataAnswered" DATETIME NOT NULL,
    "dateConcluded" DATETIME NOT NULL
);
INSERT INTO "new_Assignment" ("dataAnswered", "dateConcluded", "id", "type") SELECT "dataAnswered", "dateConcluded", "id", "type" FROM "Assignment";
DROP TABLE "Assignment";
ALTER TABLE "new_Assignment" RENAME TO "Assignment";
CREATE TABLE "new_UserAssignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "media" REAL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserAssignment_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserAssignment" ("assignmentId", "id", "userId") SELECT "assignmentId", "id", "userId" FROM "UserAssignment";
DROP TABLE "UserAssignment";
ALTER TABLE "new_UserAssignment" RENAME TO "UserAssignment";
CREATE UNIQUE INDEX "UserAssignment_userId_assignmentId_key" ON "UserAssignment"("userId", "assignmentId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
