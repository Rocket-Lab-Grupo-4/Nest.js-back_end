-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "dataAnswered" DATETIME,
    "dateOpened" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateConcluded" DATETIME NOT NULL
);
INSERT INTO "new_Assignment" ("dataAnswered", "dateConcluded", "id", "type") SELECT "dataAnswered", "dateConcluded", "id", "type" FROM "Assignment";
DROP TABLE "Assignment";
ALTER TABLE "new_Assignment" RENAME TO "Assignment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
