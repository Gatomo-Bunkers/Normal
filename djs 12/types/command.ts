/* Command Types */

// Libs
import Client from '../client';
import { Message } from 'discord.js';


// Types
// Este tipo solo es una función. Está incrustado en el tipo Command
type Run = (client: Client, msg: Message, args: string[]) => {}

// Solo éste tipo se exportará
export type Command = {
	// Requerido
	name: string,
	description: string,

	// Opcionales
	aliases?: string[],
	disabled?: boolean,

	// Argumentos
	args?: boolean,
	usage?: string,

	// Inhibidores
	guildOnly?: boolean,
	nsfw?: boolean,

	// Permisos
	dev?: boolean,

	// Run
	run: Run
}

// Posibles ideas para un futuro
/*
cooldown?: number,
perms?:
'everyone'|
'mod'|
'admin'|
'owner'|
'dev',
*/