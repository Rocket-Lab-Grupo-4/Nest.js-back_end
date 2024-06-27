-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "dataAnswered" DATETIME NOT NULL,
    "dateConcluded" DATETIME NOT NULL
);
INSERT INTO "new_Assignment" ("dataAnswered", "dateConcluded", "id", "status", "type") SELECT "dataAnswered", "dateConcluded", "id", "status", "type" FROM "Assignment";
DROP TABLE "Assignment";
ALTER TABLE "new_Assignment" RENAME TO "Assignment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
