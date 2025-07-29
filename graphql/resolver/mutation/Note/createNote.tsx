import { CreateNoteInput } from '@/generated';
import noteModel from '../../../model/Schema';

export const createNote = async (_: CreateNoteInput, { input }: { input: CreateNoteInput }) => {
    const { title, completed } = input;
    console.log("Input values:", { title, completed });

    try {
        const newNote = await noteModel.create({ title, completed });

        if (!newNote) {
            throw new Error('Failed to create note');
        }

        console.log("New note created:", newNote);
        return newNote;
    } catch (error) {
        console.error("Error in mutation:", error);
        throw new Error('Error creating note');
    }
};
