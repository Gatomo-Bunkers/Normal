import { Command } from '../../types';

export const command: Command = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Haz una prueba de latencia del bot',
    run: async (client, msg, args) => {
        console.log('\npong');
        return msg.channel.send('pong');
    }
}