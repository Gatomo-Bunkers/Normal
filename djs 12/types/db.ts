/* Command Types */

// Libs
import Client from '../client';
import { Message } from 'discord.js';


// Types
// Este tipo solo es una función. Está incrustado en el tipo Command
type Run = (client: Client, msg: Message, args: string[]) => {}

// Solo éste tipo se exportará
export type Command = {
	name: string,
	description: string,
	aliases?: string[],
	disabled?: boolean,
	run: Run
}