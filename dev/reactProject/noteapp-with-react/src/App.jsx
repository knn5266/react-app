import { useEffect, useState,useMemo } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [activeNote, setActiveNote] = useState(null)
  const [inputValue, setInputValue]  = useState('')

  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes))},
    [notes]);

    const showNotes = useMemo(() =>{
      if(inputValue === ''){
        return notes
      }
      notes.filter(
        (note) => note.title.includes(inputValue)
      )
    },[notes,inputValue])
  

    useEffect(() => {
      if(showNotes.length>0)
      setActiveNote(showNotes[0].id)},
      [showNotes]);

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
  }

  return <div className='App'>
    <Sidebar onAddNote={onAddNote} notes={showNotes} onDeleteNote={onDeleteNote} activeNote={activeNote}
    setActiveNote={setActiveNote} handleInputChange={handleInputChange}/>
    <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
  </div>   
}

export default App
