-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "members" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SetLists" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "list" TEXT,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "SetLists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SetLists" ADD CONSTRAINT "SetLists_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
