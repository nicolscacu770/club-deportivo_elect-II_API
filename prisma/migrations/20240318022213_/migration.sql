-- DropForeignKey
ALTER TABLE "Deportista" DROP CONSTRAINT "Deportista_disciplinaId_fkey";

-- AddForeignKey
ALTER TABLE "Deportista" ADD CONSTRAINT "Deportista_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina_deportiva"("id") ON DELETE SET NULL ON UPDATE CASCADE;
