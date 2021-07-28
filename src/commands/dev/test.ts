import {Command} from '../../types';

export const command: Command = {
    name: 'test',
    run: async (client, msg, args) => {
        return msg.channel.send('xd')
    }
}