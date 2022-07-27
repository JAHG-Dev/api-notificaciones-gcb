import bot from "../telegram.js";

export const sendNotification = async (req, res) => {
    const usuario = req.body.usuario;
    const tipo = req.body.tipo;
    const mensaje = req.body.mensaje;
    const url = req.body.url;

    var mensajeTelegram = "";

    if (tipo) {
        mensajeTelegram += `
        🟢 ${tipo} \n
        ${mensaje}
    `;
    } else {
        mensajeTelegram += `
        🟢 Notificación nueva \n
        ${mensaje}
    `;
    }

    if (url) {
        mensajeTelegram += `\n🔗  ${url}`;
    }

    await bot.telegram.sendMessage(usuario, mensajeTelegram).then(() => {
        console.log("Notificación enviada a " + usuario + ": " + mensajeTelegram);

        res.status(200).json({
            ok : true,
            mensaje : "Notificación enviada a " + usuario + ": " + mensajeTelegram
        });
    }).catch(err => {
        console.log("Error al enviar notificación a " + usuario + ": " + err);
    });
}