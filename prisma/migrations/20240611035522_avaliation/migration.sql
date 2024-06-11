-- CreateTable
CREATE TABLE "Avaliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avaliationType" TEXT NOT NULL,
    "evaluatorId" TEXT NOT NULL,
    "evaluatedId" TEXT NOT NULL,
    CONSTRAINT "Avaliation_evaluatorId_fkey" FOREIGN KEY ("evaluatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliation_evaluatedId_fkey" FOREIGN KEY ("evaluatedId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
