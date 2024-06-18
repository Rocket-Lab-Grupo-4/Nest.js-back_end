-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "question" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "answer" INTEGER NOT NULL,
    "justificative" TEXT NOT NULL,
    "avaliationId" TEXT,
    "questionId" TEXT,
    CONSTRAINT "Answer_avaliationId_fkey" FOREIGN KEY ("avaliationId") REFERENCES "Avaliation" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
