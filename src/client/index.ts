/* Client main file */

//TODO añadir el codigo del cooldown  del guildonly y del perms
// Libs
import { Client, Collection, Message } from 'discord.js';
import { connect } from 'mongoose';
import { join } from 'path';
import { readdirSync } from 'fs';
import { Command, Event, Config } from '../types';


// Recoger token con dotenv
require('dotenv').config();


// Clase extClient (extended CLient)
export default class extClient extends Client {
	// Crear colecciones para comandos, eventos, aliases y cooldown
	public commands: Collection<string, Command> = new Collection();
	public aliases: Collection<string, Command> = new Collection();
	public cooldown: Collection<string, Command> = new Collection();
	public events: Collection<string, Event> = new Collection();

	// Configurar el bot
	public config: Config = {
		prefix: '.',
		token: process.env.TOKEN || '',
		// Tengo que poner el || '' porque si no me salta el error TS2322 ya
		// que la variable de entorno TOKEN puede ser undefined
		mongoURI: undefined,
		dev: '685947556655923242'
	}

	// Iniciar bot
	public async init() {
		try {
			// Conexión con Discord
			this.login(this.config.token)


			// Conexión con Mongo DB
			if (typeof this.config.mongoURI == 'string') {
				connect(this.config.mongoURI, {
					useUnifiedTopology: true,
					useFindAndModify: true,
					useNewUrlParser: true
				})
			}


			// Configurar comandos
			const commandPath = join(__dirname, '..', 'commands');

			readdirSync(commandPath).forEach(async dir => {
				const commands = readdirSync(`${commandPath}/${dir}`)
					.filter(file => file.endsWith('.js'))

				for (const file of commands) {
					const { command } = require(`${commandPath}/${dir}/${file}`);
					this.commands.set(command.name, command);

					// Configurar alias
					if(typeof command.aliases !== 'undefined'){
						if (command.aliases.length !== 0) {
							command.aliases.forEach((alias: string) => { this.aliases.set(alias, command) });
						}
					}
				}
			});


			// Configurar eventos
			const eventPath = join(__dirname, '..', 'events');

			readdirSync(eventPath).forEach(async file => {
				const { event } = require(`${eventPath}/${file}`);

				// Configurar eventos y hacerlos funcionar
				this.events.set(event.name, event);
				this.on(event.name, event.run.bind(null, this))
			});

		} catch (err) {
			console.error(err)
		}
	}

}