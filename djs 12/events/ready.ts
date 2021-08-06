import { Event } from '../types/event';

export const event: Event = {
    name: 'ready',
    run: async (client: any) => {
        console.log(`${client.user.tag} encendido`);
    }
}