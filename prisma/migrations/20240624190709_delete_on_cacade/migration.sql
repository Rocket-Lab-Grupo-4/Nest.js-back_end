-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserAssignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    CONSTRAINT "UserAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserAssignment_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserAssignment" ("assignmentId", "id", "userId") SELECT "assignmentId", "id", "userId" FROM "UserAssignment";
DROP TABLE "UserAssignment";
ALTER TABLE "new_UserAssignment" RENAME TO "UserAssignment";
CREATE UNIQUE INDEX "UserAssignment_userId_assignmentId_key" ON "UserAssignment"("userId", "assignmentId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
