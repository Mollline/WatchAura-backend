
import { EditNoteInput } from '@/generated';
import noteModel from '../../../model/Schema';

export const editNote = async (_: EditNoteInput, { input }: { input: EditNoteInput }) => {
    const { id, title, completed } = input
    console.log("Input values:", { id, title, completed });
    console.log("Edit note mutation is getting started");

    try {
        const updatedNote = await noteModel.findByIdAndUpdate(id, { title, completed }, { new: true });

        if (!updatedNote) {
            throw new Error('Note not found');
        }

        console.log("Note updated:", updatedNote);
        return updatedNote;
    } catch (error) {
        console.error("Error in editNote mutation:", error);
        throw new Error('Error updating note');
    }
};
