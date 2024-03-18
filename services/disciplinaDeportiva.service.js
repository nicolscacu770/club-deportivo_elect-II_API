const prisma = require('./prismaConnect');

module.exports = {
    findAll : async (req, res) => {
        try {
            const disciplinasDeportivas = await prisma.disciplina_deportiva.findMany({});
            return res.status(200).json({state: true, msg: "Recuperar Todos los registros", "data": disciplinasDeportivas});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    findById : async (req, res) => {
        try {
            const disciplinaDeportiva = await prisma.disciplina_deportiva.findFirst({
                where: {
                    id: parseInt( req.params.id )
                }
            });
            if (!disciplinaDeportiva) {
                return res.status(404).json({ state: false, message: 'disciplina deportiva no encontrado' });
            }
            return res.status(200).json({state: true, data: disciplinaDeportiva});
        } catch (err) {
            return res.status(500).json({ message: 'Error al buscar la disciplina deportiva' });
        }
    },

    save : async (req, res) => {
       try {
            const nuevaDisciplinaDeportiva = await prisma.disciplina_deportiva.create({
                data: req.body,
            });
            return res.status(201).json({ "state": true, "data": nuevaDisciplinaDeportiva });
        } catch (err) {
            return res.status(400).json({ state: false, message: err.message });
        }
    },

    update : async (req, res) => {
        try {
            const disciplinaDeportivaActualizada = await prisma.disciplina_deportiva.update({
                where: {
                    id: parseInt( req.params.id )
                },
                data: req.body
            });
            return res.status(200).json({ state: true, data: disciplinaDeportivaActualizada });
        } catch (err) {
            console.log(err.message);
            return res.status(400).json({state: false, message: 'Disciplina deportiva no actualizada' });
        }
    },

    // cambiar de disciplina deportiva
    // update : async (req, res) => {},

    deletear : async (req, res) => {
        try {
            await prisma.disciplina_deportiva.delete({
                where:{
                    id: parseInt( req.params.id )
                }
            });
            return res.json({ state: true, message: 'Disciplina deportiva eliminada' });
        } catch (err) {
            return res.status(500).json({ state: false, message: 'Disciplina deportiva no eliminado'});
        }
    }

} 