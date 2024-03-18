-- CreateTable
CREATE TABLE "Deportista" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "disciplinaId" INTEGER NULL,

    CONSTRAINT "Deportista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina_deportiva" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "modalidad" TEXT NOT NULL,

    CONSTRAINT "Disciplina_deportiva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento_deportivo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evento_deportivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DeportistaToEvento_deportivo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DeportistaToEvento_deportivo_AB_unique" ON "_DeportistaToEvento_deportivo"("A", "B");

-- CreateIndex
CREATE INDEX "_DeportistaToEvento_deportivo_B_index" ON "_DeportistaToEvento_deportivo"("B");

-- AddForeignKey
ALTER TABLE "Deportista" ADD CONSTRAINT "Deportista_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina_deportiva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeportistaToEvento_deportivo" ADD CONSTRAINT "_DeportistaToEvento_deportivo_A_fkey" FOREIGN KEY ("A") REFERENCES "Deportista"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeportistaToEvento_deportivo" ADD CONSTRAINT "_DeportistaToEvento_deportivo_B_fkey" FOREIGN KEY ("B") REFERENCES "Evento_deportivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
