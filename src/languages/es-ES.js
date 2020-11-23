const {
    Language,
    util
} = require('klasa');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {


            //default
            DEFAULT: (key) => `<a:mal:745335194063732789>**・La clave \`${key}\` no se ha traducido  para \`es-ES\`**\n **Porfavor contacte con un desarrollador**`,
            DEFAULT_LANGUAGE: ':flag_es:**・Idioma predeterminado: \`es-ES\`**',


            //prefix reminder
            PREFIX_REMINDER: (prefix) => `<:cafe:734031642875920414>**・Mi prefix en este server es:** ${Array.isArray(prefix) ? prefix.map(pre => `\`${pre}\``).join(', ') : `\`${prefix}\``}`,


            //settings
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT:    (data, key)     => `<a:mal:745335194063732789>・**El valor '${data}' para la clave '${key}' no existe.**`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT:   (data, key)     => `<a:mal:745335194063732789>・**El valor '${data}' para la clave '${key}' ya existe.**`,
            SETTING_GATEWAY_KEY_NOT_ARRAY:          (key)           => `<a:mal:745335194063732789>・**La clave '${key}' no es un Array.**`,
            SETTING_GATEWAY_KEY_NOEXT:              (key)           => `<a:mal:745335194063732789>・**La clave '${key}' no existe en el esquema de datos.**`,
            SETTING_GATEWAY_INVALID_TYPE:   '<a:mal:745335194063732789>・**El parámetro \'type\' debe ser o \'add\' o \'remove\'.**',
            SETTING_GATEWAY_SPECIFY_VALUE:  '<a:mal:745335194063732789>・**Debes especificar el valor para añadir o filtrar.**',


            //resolvers
            RESOLVER_INVALID_CUSTOM:        (name, type)                => `<a:mal:745335194063732789>・**${name} debe ser un nombre válido de ${type}.**`,
            RESOLVER_INVALID_PIECE:         (name, piece)               => `<a:mal:745335194063732789>・**${name} debe ser un nombre válido de ${piece}.**`,
            RESOLVER_INVALID_MESSAGE:       (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una ID de mensaje válida.**`,
            RESOLVER_INVALID_USER:          (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una mención o una ID de usuario válida.**`,
            RESOLVER_INVALID_MEMBER:        (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una mención o una ID de usuario válida.**`,
            RESOLVER_INVALID_CHANNEL:       (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una mención o una ID de canal válida.**`,
            RESOLVER_INVALID_EMOJI:         (name)                      => `<a:mal:745335194063732789>・**${name} debe ser un emoji válido.**`,
            RESOLVER_INVALID_GUILD:         (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una ID válida de servidor.**`,
            RESOLVER_INVALID_ROLE:          (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una mención o una ID de rol válida.**`,
            RESOLVER_INVALID_LITERAL:       (name)                      => `<a:mal:745335194063732789>・**Su opción no coincide con la siguiente posibilidad: ${name}**`,
            RESOLVER_INVALID_BOOL:          (name)                      => `<a:mal:745335194063732789>・**${name} debe ser \`true\` o \`false\`.**`,
            RESOLVER_INVALID_INT:           (name)                      => `<a:mal:745335194063732789>・**${name} debe ser un número entero.**`,
            RESOLVER_INVALID_FLOAT:         (name)                      => `<a:mal:745335194063732789>・**${name} debe ser un número.**`,
            RESOLVER_INVALID_REGEX_MATCH:   (name, pattern)             => `<a:mal:745335194063732789>・**${name} debe seguir el patrón de la expresión regular \`${pattern}\`.**`,
            RESOLVER_INVALID_URL:           (name)                      => `<a:mal:745335194063732789>・**${name} debe ser un enlace URL válido.**`,
            RESOLVER_INVALID_DATE:          (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una fecha válida.**`,
            RESOLVER_INVALID_DURATION:      (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una duración válida.**`,
            RESOLVER_INVALID_TIME:          (name)                      => `<a:mal:745335194063732789>・**${name} debe ser una fecha o duración válida.**`,
            RESOLVER_MINMAX_EXACTLY:        (name, min, suffix)         => `<a:mal:745335194063732789>・**${name} debe ser exactamente ${min}${suffix}.**`,
            RESOLVER_MINMAX_BOTH:           (name, min, max, suffix)    => `<a:mal:745335194063732789>・**${name} debe estar entre ${min} y ${max}${suffix}.**`,
            RESOLVER_MINMAX_MIN:            (name, min, suffix)         => `<a:mal:745335194063732789>・**${name} debe ser mayor que ${min}${suffix}.**`,
            RESOLVER_MINMAX_MAX:            (name, max, suffix)         => `<a:mal:745335194063732789>・**${name} debe ser menor que ${max}${suffix}.**`,
            RESOLVER_STRING_SUFFIX: '**carácteres**',


            //reaction handler (a saber lo que es)
            REACTIONHANDLER_PROMPT: '**¿A qué página te gustaría saltar?**',


            //Command message
            COMMANDMESSAGE_MISSING_REQUIRED: '<a:mal:745335194063732789>**・Menciona a alguien o escribe algo**',
            // antes COMMANDMESSAGE_MISSING_REQUIRED:    (name)      => `<a:mal:745335194063732789>**・\`${name}\` es un argumento requerido.**`,
            
            COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `<a:mal:745335194063732789>**・Falta una opción requerida: (\`${possibles}\`)**`,
            COMMANDMESSAGE_NOMATCH: (possibles) => `<a:mal:745335194063732789>**・Su opción no coincide con ninguna de las posibilidades: (\`${possibles}\`)**`,
            COMMANDMESSAGE_MISSING: '<a:mal:745335194063732789>**・Faltan uno o más argumentos al final de la entrada.**',


            //Monitor
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `<a:mal:745335194063732789>**・\`${tag}\`\` | \`${error}\` | Usted tiene \`${time}\` segundos para responder este mensage emergente con un argumento válido. Escribe \`ABORT\` para abortar el mensaje emergente.**`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time) => `<a:mal:745335194063732789>**・\`${tag}\`\` | \`${name}\` es un argumento repetible | Usted tiene \`${time}\` segundos para responder este mensage emergente con un argumento válido. Escribe \`CANCEL\` para abortar el mensaje emergente.**`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_ABORTED: '🔚**・Abortado**',


            //inhibidores
            INHIBITOR_COOLDOWN:             (remaining)     => `⏳**・Acabas de usar este comando. Espérate \`${remaining}\`<a:mal:745335194063732789> segundos.**`,
            INHIBITOR_MISSING_BOT_PERMS:    (missing)       => `<a:mal:745335194063732789>**・Permisos insuficientes, necesito: **${missing}**`,
            INHIBITOR_REQUIRED_CONFIGS:     (settings)      => `<a:mal:745335194063732789>**・El servidor no tiene las siguientes clave\`${settings.length > 1 ? 's' : ''}\`: \`${settings.join(', ')}\` y no puede ser ejecutado.**`,
            INHIBITOR_RUNIN:                (types)         => `<a:mal:745335194063732789>**・Este comando sólo está disponible en los canales de tipo: ${types}.**`,
            INHIBITOR_RUNIN_NONE:           (name)          => `<a:mal:745335194063732789>**・el comando ${name} no está configurado para ser ejecutado en cualquier canal.**`,
            INHIBITOR_NSFW:             '<a:mal:745335194063732789>🔞🔥**・Porfavor, usa comandos NSFW en un canal NSFW**',
            INHIBITOR_PERMISSIONS:      '<a:mal:745335194063732789>⛔**・No tienes permisos para usar este comando**',
            INHIBITOR_DISABLED:         '🛌**・Este comando está desactivado**',
            INHIBITOR_DISABLED_GLOBAL:  '🛌**・Este comando está desactivado**',


            //klasa command

            //blacklist
            COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
                usersAdded.length       ? `🙍‍♂️➕**・Usuarios añadidos al Blacklist:**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
                usersRemoved.length     ? `🙍‍♂️➖**・Usuarios eliminados al Blacklist:**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
                guildsAdded.length      ? `💻➕**・Servidores añadidos al Blacklist:**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
                guildsRemoved.length    ? `💻➖**・Servidores eliminados al Blacklist:**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
            ].filter(val => val !== '').join('\n'),
            COMMAND_BLACKLIST_DESCRIPTION: '🏴・Añade y retira usuarios del Blacklist',

            //eval
            COMMAND_EVAL_ERROR:         (time, output, type)    => `<a:mal:745335194063732789>**・Error**:${output}\n**🧱・Tipo**:${type}\n${time}`,
            COMMAND_EVAL_OUTPUT:        (time, output, type)    => `<a:bien_circulo:745335492110843995>**・Salida**:${output}\n**🧱・Tipo**:${type}\n${time}`,
            COMMAND_EVAL_SENDFILE:      (time, type)            => `<a:bien_circulo:745335492110843995>**・La salida era muy larga. Te lo envío en un archivo.**\n**🧱・Tipo**:${type}\n${time}`,
            COMMAND_EVAL_SENDCONSOLE:   (time, type)            => `<a:bien_circulo:745335492110843995>**・La salida era muy larga y no se pudo enviar en archivo. Revisa la consola.**\n**🧱・Tipo**:${type}\n${time}`,
            COMMAND_EVAL_DESCRIPTION:   'Evalúa Javascript arbitrario. Reservado para los desarrolladores del bot.',
            COMMAND_EVAL_EXTENDEDHELP: [
                    'El comando eval ejecuta el código tal y como está escrito, cualquier error será capturado.',
                    'También usa la herramienta "flags". Escribe --silent, --depth=number o --async para personalizar la salida.',
                    'El flag --silent silencia la salida.',
                    'El flag --depth acepta un número, por ejemplo, --depth=2, para personalizar la profundidad de util.inspect.',
                    'El flag --async rodea el código en un AsyncFunction en el cual puedes usar await, sin embargo, si necesitas saber el valor de algo, necesitarás la palabra clave return.',
                    'El flag --showHidden activará la opción showHidden de util.inspect.',
                    'Si la salida es demasiado largo, la salida será enviado como archivo, o en la consola si el bot no tiene el permiso ATTACH_FILES.'
                ].join('\n'),

            //unload
            COMMAD_UNLOAD:              (type, name) => `📉**・Descargado la pieza tipo \`${type}\`: \`${name}\`**`,
            COMMAND_UNLOAD:             (type, name) => `📉**・Descargado la pieza tipo \`${type}\`: \`${name}\`**`,
            COMMAND_UNLOAD_DESCRIPTION: 'Descarga una pieza de Klasa.',

            //transfer
            COMMAND_TRANSFER_SUCCESS:   (type, name) => `🔀**・Transferido la pieza tipo \`${type}\`: \`${name}\` con éxito.**`,
            COMMAND_TRANSFER_FAILED:    (type, name) => `<a:mal:745335194063732789>**・La transferencia de la pieza tipo \`${type}: \`${name}\` al Cliente ha fallado. Por favor, revisa su consola.**`,
            COMMAND_TRANSFER_ERROR:     '<a:mal:745335194063732789>・**El archivo ha sido transferido o nunca existió.**',

            //reload
            COMMAND_RELOAD:     (type, name)    => `🔄**・Recargado la pieza tipo \`${type}\`: \`${name}\`**`,
            COMMAND_RELOAD_ALL: (type)          => `🔄**・Recargado todas las piezas tipo \`${type}\`.**`,
            COMMAND_RELOAD_DESCRIPTION: 'Recarga una pieza de Klasa, o todas las piezas de un una colección.',
            COMMAND_RELOAD_EVERYTHING:  '🔄**・Recargando todas las piezas**',
            COMMAND_RELOAD_FAILED:      '<a:mal:745335194063732789>・**La recarga ha sido fallida**',

            //reboot
            COMMAND_REBOOT: '<a:cargando:745335606388719798>・**Reiniciando...**・<a:cargando:745335606388719798>',
            COMMAND_REBOOT_DESCRIPTION: 'Reinicia el bot.',

            //ping
            COMMAND_PINGPONG: (diff, ping) => `🏓**・¡Pong!** \n \n <a:Lel:738106782089740410>**・Ping: \`${diff}\`ms** \n <a:RainbowFlyingHearts:753855257825509477> **・Latido: \`${ping}\`ms**`,
            COMMAND_PING:               '**¿Ping?**',
            COMMAND_PING_DESCRIPTION:   'Ejecuta una prueba de conexión a Discord.',

            //invite (sustituido por invite mejorado)
            COMMAND_INVITE: (client) => [
                `Para añadir ${client.user.username} a tu servidor de Discord:`,
                `<${client.invite}>`,
                   util.codeBlock('', [
                    'El enlace de arriba está generado con los permisos necesarios para ejecutar todos los comandos actuales.',
                    'Entiendo que no todos los permisos son necesarios para todos los servidores, pero no se preocupe de remover alguno de los permisos.',
                    'Si intentas usar un comando que require más permisos de los que el bot tiene, te lo haré saber.'
                ].join(' ')),
                'Por favor reporta los problemas en <https://github.com/dirigeants/klasa> si encuentras algún bug.'
            ],
            COMMAND_INVITE_DESCRIPTION: 'Muestra el enlace de invitación para el bot.',
            COMMAND_INVITE_SELFBOT:     '¿Por qué necesitarías un enlace de invitación para un selfbot?',

            //info
            COMMAND_INFO: [
                'Klasa es un framework \'plug-and-play\' construido encima de la librería Discord.js.',
                'La mayor parte del código es modularizado, lo cual permite a los desarrolladores editar Klasa para encajar con sus necesidades.',
                '',
                'Algunas de las características de Klasa incluye:',
                '• 🐇💨 Carga muy rápida con soporte ES2017 (`async`/`await`).',
                '• 🎚🎛 Configuración separada para cada servidor, usuario, e cliente; que puede ser expandido con tu código.',
                '• 💬 Un sistema de comandos personalizable con análisis automático de argumentos y fácil de usar, refrescar, y descargar módulos.',
                '• 👀 "Monitores", los cuales pueden interactuar con todos los mensajes, como un evento de mensaje normal (Filtro de palabras, protección de spam, etc).',
                '• ⛔ "Inhibidores", los cuales pueden prevenir la ejecución de los comandos basado en un set de parámetros (Permisos, Listas negras, etc).',
                '• 🗄 "Proveedores", los cuales te permiten conectar Klasa con una base de datos cualquiera.',
                '• ✅ "Finalizadores", los cuales son ejecutados después de un comando lanzado con éxito.',
                '• ➕ "Extensibles", código que actua pasivamente. Añaden propiedades o métodos a las clases de Discord.js.',
                '• 🌐 "Lenguages", los cuales permiten usar diferentes lenguages en tu bot.',
                '• ⏲ "Tareas", pueden ser programados para ejecutar código en el futuro, opcionalmente repetibles.',
                '',
                'Esperamos servir un framework 100% personalizable para todas las audiencias. Nosotros hacemos actualizaciones frecuentes.',
                'Si estás interesado en nosotros, revísanos en <https://klasa.js.org>',
                ' ',
                'Puro spam de klasa, pero me da pereza quitarlo xd' //no me culpen ;-;
            ],
            COMMAND_INFO_DESCRIPTION: 'Provee información sobre el bot.',

            //help
            COMMAND_HELP_USAGE:         (usage) => `Uso :: ${usage}`,
            COMMAND_HELP_DESCRIPTION:   'Muestra el mensaje de ayuda para los comandos.',
            COMMAND_HELP_NO_EXTENDED:   'Descripción detallada no disponible.',
            COMMAND_HELP_DM:            '📨・La lista de comandos ha sido enviado a tus mensajes privados.',
            COMMAND_HELP_NODM:          '<a:mal:745335194063732789>・Parece que tienes tus mensajes privados desactivados, no pude enviarte la lista de comandos.',
            COMMAND_HELP_EXTENDED:      'Información Detallada ::',

            //eneable
            COMMAND_ENABLE: (type, name) => `📈**・Activado con éxito la pieza tipo \`${type}\`: \`${name}\`**`,
            COMMAND_ENABLE_DESCRIPTION: 'Re-activa temporalmente alguna pieza. Su estado original será restaurado al reiniciar.',

            //disable
            COMMAND_DISABLE: (type, name) => `📉**・Desactivado con éxito la pieza \`${type}\`: \`${name}\`**`,
            COMMAND_DISABLE_DESCRIPTION:    'Re-desactiva temporalmente alguna pieza. Su estado original será restaurado al reiniciar.',
            COMMAND_DISABLE_WARN:           '⚠⚠⚠・**Probablemente no quieras desactivar eso, ya que no podrías ejecutar un comando para reactivarlo.**・⚠⚠⚠',

            //conf
            COMMAND_CONF_GUARDED:   (name)          => `**La clave \`${util.toTitleCase(name)}\` no debería ser desactivado.**`,
            COMMAND_CONF_UPDATED:   (key, response) => `**Actualizado con éxito la clave \`${key}\`: \`${response}\`**`,
            COMMAND_CONF_GET_NOEXT: (key)           => `**La clave \`${key}\` no parece existir.**`,
            COMMAND_CONF_GET:       (key, value)    => `**El valor para la clave \`${key}\` es: \`${value}\`**`,
            COMMAND_CONF_RESET:     (key, response) => `**El valor para la clave \`${key}\` ha sido restaurada a: \`${response}\`**`,
            COMMAND_CONF_SERVER:    (key, list)     => `**Configuración del servidor\`${key}\`**\n${list}`,
            COMMAND_CONF_USER:      (key, list)     => `**Configuración del usuario\`${key}\`**\n${list}`,
            COMMAND_CONF_NOKEY:                 '**Debes escribir una clave**',
            COMMAND_CONF_NOVALUE:               '**Debes escribir un valor**',
            COMMAND_CONF_SERVER_DESCRIPTION:    '**Define la configuración por servidor.**',
            COMMAND_CONF_USER_DESCRIPTION:      '**Define la configuración por usuario.**',
            COMMAND_CONF_KEY_NOT_ARRAY:         '**Esta clave no almacena múltiples valores. Usa la acción \'reset\'.**',

            //stats
            COMMAND_STATS: (memUsage, uptime, users, servers, channels, klasaVersion, discordVersion, processVersion, message) => [
                '= 📊・STATS・📊 =',
                '',
                `• Uso RAM      :: ${memUsage} MB`,
                `• T. Actividad :: ${uptime}`,
                `• Usuarios     :: ${users}`,
                `• Servidores   :: ${servers}`,
                `• Canales      :: ${channels}`,
                `• Klasa        :: v${klasaVersion}`,
                `• Discord.js   :: v${discordVersion}`,
                `• Node.js      :: ${processVersion}`,
                `• Shard        :: ${(message.guild ? message.guild.shardID : 0) + 1} / ${this.client.options.totalShardCount}`
            ],
            COMMAND_STATS_DESCRIPTION: 'Provee algunos detalles sobre el bot y sus estadísticas.',

            //prompt
            MESSAGE_PROMPT_TIMEOUT: '**El tiempo ha expirado.**',


            //Mis commands

            //f
            COMMAND_F:              ':regional_indicator_f:・FFFFF',
            COMMAND_F_DESCRIPTION:  'Una gran F en el chat',

            //UTC
            COMMAND_UTC_DESCRIPTION:    'Despliega la hora UTC',
            COMMAND_UTC:                'Hora UTC: ',

            //vote
            COMMAND_VOTE_DESCRIPTION:   'Vote por nosotros en Top.gg',
            COMMAND_VOTE_TITLE:         '🗳・VOTE',
            COMMAND_VOTE_TEXT:          'Vote por nosotros en Top.gg para hacer crecer al bot',
            COMMAND_VOTE_TEXT_LINK:     'Link de votación',
            COMMAND_VOTE_LINK:          '[Click aquí para votar](https://top.gg/bot/698568850651873299/vote)',

            //meme
            COMMAND_MEME_DESCRIPTION: 'Muestra un meme aleatorio',

            //xd
            COMMAND_XD_DESCRIPTION: 'Reacciona con un xd',

            //update
            COMMAND_UPDATE_DESCRIPTION:     'Provee toda la información de las actualizaciones del bot',
            COMMAND_UPDATE_TITLE:           '📤・UPDATE',
            COMMAND_UPDATE_TEXT:            'Aquí se muestra la versión actual del bot, los comandos nuevos modificados y eliminados y las novedades',
            COMMAND_UPDATE_VERSION:         '**Versión del bot: 0.1.0 (Big Bang Versions)**',
            COMMAND_UPDATE_NEW_TITLE:       '✨・Comandos Nuevos',
            COMMAND_UPDATE_NEW:             'Comandos internos de Klasa ・ f ・ meme ・ xd ・ utc ・ Más...',
            COMMAND_UPDATE_FIX_TITLE:       '🔨・Comandos Reparados/mejorados',
            COMMAND_UPDATE_FIX:             'Actualmente ninguno',
            COMMAND_UPDATE_DELETIONS_TITLE: '🚮・Comandos Eliminados',
            COMMAND_UPDATE_DELETIONS:       'Actualmente ninguno',
            COMMAND_UPDATE_WHATSNEW_TITLE:  '🥗・Novedades',
            COMMAND_UPDATE_WHATSNEW:        `undefined`,
            COMMAND_UPDATE_GITHUBTAGS_TITLE: '😸・Más info en GitHub',
            COMMAND_UPDATE_GITHUBTAGS:       '[Click aquí para más info](https://github.com/Gatomo-Bunkers/Normal/releases)',
            COMMAND_UPDATE_FOOTER:          'Normal Bot・Desarrollado por Gátomo・V. 0.1.0 Indev (Big Bang Versions)・MIT license',
            
            //invite
            COMMAND_INVITE_DESCRIPTION: 'Te ofrece el link de invitación del bot',
            COMMAND_INVITE_TITLE:       '🎁・INVITE',
            COMMAND_INVITE_TEXT:        'Invite a Normal para añadirlo a su server',
            COMMAND_INVITE_TEXT_LINK:   'Link de invitación',
            COMMAND_INVITE_LINK:        '[Click aquí para invitar](https://discord.com/oauth2/authorize?client_id=698568850651873299&permissions=2146823423&redirect_uri=https%3A%2F%2Fdiscord.gg%2FZpWE57t&response_type=code&scope=bot%20guilds.join)',

            /*//donate
            COMMAND_DONATE_DESCRIPTION: 'Muestra los enlaces para realizar una donación',
            COMMAND_DONATE_TITLE: '💰・DONATE',
            COMMAND_DONATE_TEXT: 'Si le gusta Normal, puede apoyarnos con un donativo. Agradecemos cualquier donativo, tanto pequeño como grande :3',
            COMMAND_DONATE_PATREON_TITLE: 'Patreon:',
            COMMAND_DONATE_PATREON: '',
            COMMAND_DONATE_KOFI_TITLE: '',
            COMMAND_DONATE_KOFI: '',
            COMMAND_DONATE_PAYPAL_TITLE: '',
            COMMAND_DONATE_PAYPAL: '',
            COMMAND_DONATE_FOOTER: '',*/

            /*//ban
            COMMAND_BAN_DESCRIPTION: 'Banea a un usuario del server',
            COMMAND_BAN_AUTOBAN: 'Porqué te banearías a tí mismo? No tiene sentido :v',
            COMMAND_BAN_NORMALBAN: 'Por Por ... porqué me quieres banear? que he hecho? ;-; <a:mal:745335194063732789>',
            COMMAND_BAN_ROLE: '<a:mal:692810345286205570>・No puedes banear a este usuario',
            COMMAND_BAN_MEMBERNOTBANEABLE: 'No puedo banear a este usuario'*/

            //hug
            COMMAND_HUG: `**abrazó a**`,
            COMMAND_HUG_NORMALHUGS: `**, te doy un abrazo**`,
            COMMAND_HUG_DESCRIPTION:'Abraza a alguien para consolarlo',
            COMMAND_HUG_ALONE:      '**・No puedes abrazarte a tí mismo**',

            //test
            COMMAND_TEST: [
                'xd 1',
                'xd 2',
                'xd 3'
            ]
        };
    }

    async init() {
        await super.init();
    }

};
