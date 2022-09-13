import './Task.css'

function Task({ data, rmTask, index, completeTask}) {

  return (
    <div className="task" style={{ backgroundColor: data.completed ? 'rgb(178, 232, 188)' : 'rgb(236, 231, 210)'}}>
      <h4 className='task-content'>{data.content}</h4>
      <p>{data.date}</p>
      <div className='btns'>
        <button className="btn-co" onClick={() => completeTask(index)} style={{
          backgroundColor: data.completed ? 'rgb(234, 141, 34)' : 'rgb(48, 221, 80)'
        }}>
        { data.completed ? 'cancelar' : 'concluída'}
        </button>
        <button className="btn-ed">editar</button>
        <button className="btn-rm" onClick={(e) => rmTask(index)}>remover</button>
      </div>
    </div>
  );
}

export default Task;
