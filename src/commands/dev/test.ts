import { Command } from '../../types';
import  Test  from '../../db/models/test';

export const command: Command = {
    name: 'test',
    spaceSplit: true,
    run: async (client, msg, args) => {

        // Test con bases de datos xd
        /*if (args.length !== 0){
            const dbTest = new Test({
                username: args[0]
            })
            const saved = dbTest.save()
            return msg.channel.send(`El argumento se guardó en la base de datos`)
        } else {
            const dbTest = await Test.find();
            return msg.channel.send(`El elemento de la base de datos es \`${dbTest}\``)
        }*/

        const name = args[0]
        const age = args[1]
        const algo = args[2]

        msg.channel.send(`**Has dado 3 argumentos:** *${name}*, *${age}* y *${algo}*`)
    }
}