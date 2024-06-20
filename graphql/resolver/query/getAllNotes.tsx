import noteModel from '../../model/Schema';

export const getAllNotes = async () => {
    console.log('this is getting called')
    try {
        const notes = await noteModel.find({});
        return notes
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching notes');
    }
};
