-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avaliationType" TEXT NOT NULL,
    "evaluatorId" TEXT NOT NULL,
    "evaluatedId" TEXT NOT NULL,
    "userAssignmentId" TEXT,
    CONSTRAINT "Avaliation_evaluatorId_fkey" FOREIGN KEY ("evaluatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliation_evaluatedId_fkey" FOREIGN KEY ("evaluatedId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliation_userAssignmentId_fkey" FOREIGN KEY ("userAssignmentId") REFERENCES "UserAssignment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Avaliation" ("avaliationType", "dataCreated", "evaluatedId", "evaluatorId", "id") SELECT "avaliationType", "dataCreated", "evaluatedId", "evaluatorId", "id" FROM "Avaliation";
DROP TABLE "Avaliation";
ALTER TABLE "new_Avaliation" RENAME TO "Avaliation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
