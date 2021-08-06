/* DISABLED MODEL */
// Modelo encargado de la desactivación de un comando

import { Schema, model, Document } from 'mongoose';

interface IDisabled extends Document {
    command: string,
    reason: string
}
const disabledSchema = new Schema({
    command: String,
    reason: String
});

const Disabled = model<IDisabled>('Disabled', disabledSchema);
export default Disabled;