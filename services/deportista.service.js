const prisma = require('./prismaConnect');

module.exports = {
    findAll : async (req, res) => {
        try {
            const deportistas = await prisma.deportista.findMany({});
            return res.status(200).json({state: true, msg: "Recuperar Todos los registros", "data": deportistas});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    findById : async (req, res) => {
        try {
            // console.log(req.params.id);
            const deportista = await prisma.deportista.findFirst({
                where: {
                    id: parseInt( req.params.id )
                }
            });
            if (!deportista) {
                return res.status(404).json({ state: false, message: 'deportista no encontrado' });
            }
            return res.status(200).json({state: true, data: deportista});
        } catch (err) {
            return res.status(500).json({ message: 'Error al buscar el deportista' });
        }
    },

    save : async (req, res) => {
        // const { nombre, apellido, documento, fecha_nacimiento, telefono, correo } = req.body;
        // console.log(req.body);
        req.body.fecha_nacimiento = new Date(req.body.fecha_nacimiento);
        console.log(req.body.fecha_nacimiento);
        try {
            const nuevoDeportista = await prisma.deportista.create({
                data: req.body,
            });
            return res.status(201).json({ "state": true, "data": nuevoDeportista });
        } catch (err) {
            console.log('error en save deportista\n', err);
            return res.status(400).json({ state: false, message: err.message });
        }
    },

    update : async (req, res) => {
        try {
            const deportistaActualizado = await prisma.deportista.update({
                where: {
                    id: parseInt( req.params.id )
                },
                data: req.body
            });
            return res.status(200).json({ state: true, data: deportistaActualizado });
        } catch (err) {
            console.log(err.message);
            return res.status(400).json({state: false, message: 'Deportista no actualizado' });
        }
    },

    // cambiar de disciplina deportiva
    // update : async (req, res) => {},

    deletear : async (req, res) => {
        try {
            await prisma.deportista.delete({
                where: {
                    id: parseInt( req.params.id )
                }
            });
            return res.status(200).json({ state: true, message: 'Deportista eliminado' });
        } catch (err) {
            return res.status(500).json({ state: false, message: 'Deportista no eliminado'});
        }
    }

}