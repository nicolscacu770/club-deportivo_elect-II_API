const prisma = require('./prismaConnect');

module.exports = {
    findAll : async (req, res) => {
        try {
            const eventosDeportivos = await prisma.evento_deportivo.findMany({});
            return res.status(200).json({state: true, msg: "Recuperar Todos los registros", "data": eventosDeportivos});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    findById : async (req, res) => {
        try {
            // console.log(req.params.id);
            const eventoDeportivo = await prisma.evento_deportivo.findFirst({
                where: {
                    id: parseInt( req.params.id )
                }
            });
            if (!eventoDeportivo) {
                return res.status(404).json({ message: 'evento deportivo no encontrado' });
            }
            return res.status(200).json({state: true, data: eventoDeportivo});
        } catch (err) {
            return res.status(500).json({ message: 'Error al buscar el evento deportivo' });
        }
    },

    save : async (req, res) => {
        req.body.fecha = new Date(req.body.fecha);
        try {
            const nuevoEventoDeportivo = await prisma.evento_deportivo.create({
                data: req.body,
            });
            return res.status(201).json({ state: true, "data": nuevoEventoDeportivo });
        } catch (err) {
            return res.status(400).json({ state: false, message: err.message });
        }
    },

    update : async (req, res) => {
        try {
            if(req.body.fecha){
                req.body.fecha = new Date(req.body.fecha);
            }
            const eventoDeportivoActualizado = await prisma.evento_deportivo.update({
                where: {
                    id: parseInt( req.params.id )
                },
                data: req.body
            });
            return res.status(200).json({ state: true, data: eventoDeportivoActualizado });
        } catch (err) {
            console.log(err.message);
            return res.status(400).json({state: false, message: 'Evento deportivo no actualizado' });
        }
    },

    // cambiar de disciplina deportiva
    // update : async (req, res) => {},

    deletear : async (req, res) => {
        try {
            await prisma.evento_deportivo.delete({
                where: {
                    id: parseInt( req.params.id )
                } 
            });
            return res.json({ state: true, message: 'Evento deportivo eliminado' });
        } catch (err) {
            return res.status(500).json({ state: false, message: 'Evento deportivo no eliminado'});
        }
    },

    findParticipantes : async (req, res) => {
        try {
            const afiliados = await prisma.deportista.findMany({
                where: {
                    disciplinaId: parseInt( req.params.id )
                }
            });
            return res.status(200).json({state: true, msg: "Recuperar Todos los registros de afiliados a ", "data": afiliados});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    findNoParticipantes : async (req, res) => {
        try {
            const noAfiliados = await prisma.deportista.findMany({
                where: {
                    disciplinaId: {
                        not: parseInt( req.params.id )
                    }
                }
            });
            return res.status(200).json({state: true, msg: "Recuperar Todos los registros de no afiliados a ", "data": noAfiliados});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    addParticipante: async (req, res) => {
        try {
            req.body.deportistaId = parseInt(req.body.deportistaId);
            console.log(req.body);
            const deportistaAfiliado = await prisma.participacion_evento.create({
                data: {
                    ...req.body,
                    eventoId: parseInt( req.params.id )
                }
            });
            return res.status(200).json({ state: true, data: deportistaAfiliado });
        } catch (err) {
            console.log(err.message);
            return res.status(400).json({state: false, message: 'Deportista no afiliado correctamente' });
        }
    },

    deleteParticipante: async (req, res) => {
        try {
            const deportistaAfiliado = await prisma.deportista.update({
                where: {
                    id: parseInt( req.body.id ), //id del deportista que viene en el req.body
                    disciplinaId: parseInt( req.params.id ),
                },
                data: { disciplinaId: null }
            });
            return res.status(200).json({ state: true, data: deportistaAfiliado });
        } catch (err) {
            console.log(err.message);
            return res.status(400).json({state: false, message: 'Deportista no se pudo desvincular correctamente' });
        }
    }
} 