
import './Controlls.css'
import { useState } from 'react'

import date from '../date'

function Controlls(props) {

  const [content, setContent] = useState('')

  return (
    <div className='controlls'>
      <h1>Minhas Tarefas Diárias</h1>

      <div className='body'>
        <h3>Qual a sua tarefa:</h3>
        <textarea rows="5" type="area" placeholder="Quais são suas ideias para hoje?" onChange={(e) => setContent(e.target.value)}></textarea>
      </div>

      <button onClick={() => {
        if(content.length <= 0) {
            alert('O campo tarefa não pode ser vazio')
        } else {

            props.addTask({
                content,
                date: date(),
                completed: false
            })
        }
      }}>add</button>
    </div>
  );
}

export default Controlls