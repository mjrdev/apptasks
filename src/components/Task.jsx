import './Task.css'
import { useState } from 'react'

function Task({ data, index, rmTask, completeTask, updateTask}) {

  const [editMode, setEditMode] = useState(false)
  const [content, setContent] = useState(data.content) 

  return (
    <div className="task" style={{ backgroundColor: data.completed ? 'rgb(178, 232, 188)' : 'rgb(236, 231, 210)'}}>
      
      {
        editMode
        ? <input type="text" className='edit-input' onChange={(e) => {
          setContent(e.target.value)
        }}/>
        : <h4 className='task-content'>{data.content}</h4>
      }

      <p>{data.date}</p>
      <div className='btns'>

        <button className="btn-co" onClick={() => completeTask(index)} style={{
          backgroundColor: data.completed ? 'rgb(234, 141, 34)' : 'rgb(48, 221, 80)'
        }}>
        { data.completed ? 'cancelar' : 'concluída'}
        </button>

        {
          editMode
          ? <button className="btn-ed" onClick={(e) => {
              editMode ? setEditMode(false) : setEditMode(true)
              updateTask(index, content)
            }}>editar</button>
            
          : <button className="btn-ed-conf" onClick={(e) => {
              updateTask(index, content)
              editMode ? setEditMode(false) : setEditMode(true)
            }}>editar</button>
        }

        <button className="btn-rm" onClick={(e) => rmTask(index)}>remover</button>
      </div>
    </div>
  );
}

export default Task;
