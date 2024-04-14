import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [activeNote, setActiveNote] = useState(null)

  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes))},
    [notes]);

    useEffect(() => {
      if(notes.length>0)
      setActiveNote(notes[0].id) },
      [notes]);

  const onAddNote = () =>{
    console.log('新しくノートが追加されました')
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content:"新しいノートの内容",
      modDate: Date.now(),
    }
    setNotes([...notes,newNote])
    console.log(notes)
  }

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id)
    setNotes(filterNotes)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id){
        return updatedNote
      }else{
        return note
      }
    })
    setNotes(updatedNotesArray)
  }

  //検索　
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    search(e.target.value)
  }
  const search = (value) => {
    if(value === ''){
      setNotes(notes)
      return
    }
    const searchedNote = notes.filter(
      (note) => Object.values(note).filter(
        (item) => item !== undefined && item !== null && item.toUpperCase().indexOf(value.toUpperCase()) !== -1
      ).length > 0
    )
    setNotes(searchedNote)
  }

  {
    notes.map((note, index) => {
      return note
    })
  }


  return <div className='App'>
    <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote}
    setActiveNote={setActiveNote}/>
    <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
  </div>   
}

export default App
