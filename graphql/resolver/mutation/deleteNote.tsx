// deleteNote.js
import noteModel from '../../model/Schema';
import { ID } from '@/generated';

export const deleteNote = async (_: ID, { id }: ID) => {
    console.log("Input values:", { id });
    console.log("Delete note mutation is getting started");
    try {
        const deletedNote = await noteModel.findByIdAndDelete(id);
        if (!deletedNote) {
            throw new Error('Note not found');
        }
        console.log("Note deleted:", deletedNote);
        return deletedNote;
    } catch (error) {
        console.error("Error in deleteNote mutation:", error);
        throw new Error('Error deleting note');
    }
};
