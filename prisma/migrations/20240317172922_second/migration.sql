/*
  Warnings:

  - You are about to drop the `_DeportistaToEvento_deportivo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DeportistaToEvento_deportivo" DROP CONSTRAINT "_DeportistaToEvento_deportivo_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeportistaToEvento_deportivo" DROP CONSTRAINT "_DeportistaToEvento_deportivo_B_fkey";

-- DropTable
DROP TABLE "_DeportistaToEvento_deportivo";

-- CreateTable
CREATE TABLE "participacion_evento" (
    "deportistaId" INTEGER NOT NULL,
    "eventoId" INTEGER NOT NULL,
    "puestoEvento" INTEGER NOT NULL,

    CONSTRAINT "participacion_evento_pkey" PRIMARY KEY ("deportistaId","eventoId")
);

-- AddForeignKey
ALTER TABLE "participacion_evento" ADD CONSTRAINT "participacion_evento_deportistaId_fkey" FOREIGN KEY ("deportistaId") REFERENCES "Deportista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participacion_evento" ADD CONSTRAINT "participacion_evento_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento_deportivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
