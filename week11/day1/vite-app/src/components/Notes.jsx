
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { useDeleteNoteMutation, useGetNoteQuery, useGetNotesQuery, usePostNoteMutation } from '../services/noteQuerySlice';





function Notes() {
  const {
    data: notes,
    error,
    isLoading,
    refetch,
  } = useGetNotesQuery()
  const { data: note } = useGetNoteQuery(1);
  console.log(note)
  const [deleteOne, { isError, isSuccess }] = useDeleteNoteMutation();
  const [postNote] = usePostNoteMutation();
  const [newNote, setNewNote] = useState({ name: "", description: "" });
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log("new cat: ", newNote);
          await postNote(newNote);
          refetch();
          setNewNote({ name: '', description: '' });
        }}
      >
        <input
          value={newNote.name}
          onChange={(e) =>
            setNewNote({ ...newNote, name: e.target.value })
          }
          type="text"
          placeholder="note name"
        />
        <input
          value={newNote.description}
          onChange={(e) =>
            setNewNote({ ...newNote, description: e.target.value })
          }
          type="text"
          placeholder="category desc"
        />
        <button type="submit">add</button>
      </form>
      <hr />

      <h2>Categories</h2>
      <ul>
        {notes &&
          notes.map((cat) => {
            return (
              <li key={cat.id}>
                <span>{cat.name}</span>
                <button
                  onClick={async () => {
                    if (window.confirm("delete?")) {
                      await deleteOne(cat.id);
                      refetch();
                    }
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
      <hr />
      <h3>detail: {note?.name}</h3>
    </>
  )

}

export default Notes