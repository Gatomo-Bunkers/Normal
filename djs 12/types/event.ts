/* Events types */

// Libs
import Client from '../client';
import { ClientEvents } from 'discord.js';

// Types
// Este tipo solo es una función. Está incrustado enel tipo Event
type Run = (client: Client, ...args: any[]) => {}

// Este tipo se exportará
export type Event = {
	name: keyof ClientEvents,
	run: Run
}