import { Command } from '../../types';
import  Test  from '../../db/models/test';

export const command: Command = {
    name: 'test',
    run: async (client, msg, args) => {
        if (args.length !== 0){
            const dbTest = new Test({
                username: args[0]
            })
            const saved = dbTest.save()
            return msg.channel.send(`El argumento se guardó en la base de datos`)
        } else {
            const dbTest = await Test.find();
            return msg.channel.send(`El elemento de la base de datos es \`${dbTest}\``)
        }
    }
}