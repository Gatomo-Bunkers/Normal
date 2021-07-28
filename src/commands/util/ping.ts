import {Command}  from '../../types';

export const command: Command = {
    name: 'ping',
    aliases: ['pong'],
    run: async (client, msg, args) => {
        console.log('\npong');
        return msg.channel.send('pong');
    }
}