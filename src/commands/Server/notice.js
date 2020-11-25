const { Command } = require('klasa'); //klasa
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'notice',
            enabled: true,
            runIn: ['text', 'news'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['announcement'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Crea un anuncio para el servidor',
            quotedStringSupport: false,
            extendedHelp: 'Crea un anuncio para el servidor en un mensaje embedido  (n!notice anuncio importante true (con ping here)/ n!notice anuncio importante false (sin ping))',
            usage: '<content:...string> <ping:...boolean>',
            usageDelim: ' '
        });
    }

    async run(message, [content, ping]) {
        //msg.sendMessage(`${user.tag} got banned.${reason ? ` With reason of: ${reason}` : ''}`);

        if(ping == false){
          message.channel.send(
            new MessageEmbed()
            .setTitle('📢・Anuncio para ' + message.guild.name)
            .setDescription('Hay una nueva sugerencia para Normal')
            .setThumbnail(message.guild.iconURL())
            .setTimestamp()
            .setColor('RANDOM')
        );
        } else {
          .send('@here' +
            new MessageEmbed()
            .setTitle('📢・Nueva sugerencia')
            .setDescription('Hay una nueva sugerencia para Normal')
            .addField('Usuario:', message.author.tag, true)
            .addField('ID:', message.author.id, true)
            .addField('Bot:', `${message.author.bot? `✅` : `❎`}`, true)
            .addField('Sugerencia:', `\n\`\`\`${messageContent}\`\`\``, false)
            .setThumbnail('https://media.giphy.com/media/NFA61GS9qKZ68/giphy.gif')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }
}
