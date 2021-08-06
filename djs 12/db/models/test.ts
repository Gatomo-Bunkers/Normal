import { Schema, model, Document } from 'mongoose';

interface ITest extends Document {
    username: string
}
const testSchema = new Schema({
    username: {
        type: String,
        unique: true
    }
});

const Test = model<ITest>('Test', testSchema);
export default Test;