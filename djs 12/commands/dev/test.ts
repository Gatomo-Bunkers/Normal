import { Command } from '../../types';
import Test from '../../db/models/test';

export const command: Command = {
    name: 'test',
    description: 'Comando para testear cosas',
    args: true,
    usage: '<Nombre> <Edad> <Algo>',
    guildOnly: true,
    nsfw: false,
    dev: true,
    run: async (client, msg, args) => {

        // Test con bases de datos xd
        /*if (args.length !== 0){
            const dbTest = new Test({
                username: args[0]
            })
            const saved = await dbTest.save()
            return msg.channel.send(`El argumento se guardó en la base de datos`)
        } else {
            const dbTest = await Test.find({ username: /mvc/i});
            return msg.channel.send(`El elemento de la base de datos es \`${dbTest}\``);
        }*/
        const a = args.join().split(',');

        const name = a[0]
        const age = a[1]
        const algo = a[2]



        return msg.channel.send(`**Has dado 3 argumentos:** *\`${name}\`*, *\`${age}\`* y *\`${algo}\`*
        **Datos adicionales:**
        \`\`\`js
        {
            args: {
                args: [ ${a} ],
                length: ${a.length},
                usage: ${command.usage}
            }
        }\`\`\``);
    }
}