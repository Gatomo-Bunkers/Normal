import { Event, Command } from '../types';
import { Message } from 'discord.js';

export const event: Event = {
    name: 'message',
    run: async (client: any, msg: Message) => {
        try {
            // Prevenir bots, webhooks o cualquier mensaje que no tenga el prefix
            if (msg.author.bot || msg.webhookID || !msg.content.startsWith(client.config.prefix)) return;

            // Definir argumentos y eso
            //if(!client.commands.spaceSplit || typeof client.commands.spaceSplit == 'undefined'){
                var args = msg.content.slice(client.config.prefix.length).trim().split(','); // Dividir argumentos con coma
           /* } else {
                var args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g); // Dividir argumentos con espacio
            }*/

            const cmd = args.shift()?.toLowerCase();

            if (!cmd) return;
            const command = client.commands.get(cmd) || client.aliases.get(cmd);
            if (command) {
                (command as Command).run(client, msg, args);
            }

            
        } catch (err) {
            console.error(err);
        }
    }
}