import { Event } from '../types/event';

export const event: Event = {
    name: 'disconnect',
    run: async (client: any) => {
        console.log(`${client.user.tag} apagado`);
    }
}