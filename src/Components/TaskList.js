import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  done.sort((a, b) => a.finishDate - b.finishDate);
  active.sort((a, b) => new Date(a.date) - new Date(b.date));

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task key={task.id} task={task} delete={props.delete} />
  ));
  return (
    <>
      <div className="active">
        <h2>Lista zadań do zrobienia</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania</p>}
      </div>
      <hr />
      <div className="done">
        <h3>
          Lista wykonanych zadań <em>{done.length}</em>
        </h3>
        {done.length > 5 && (
          <span>Wyświetlone jest tylko 5 ostatnich zadań</span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
      <hr />
    </>
  );
};

export default TaskList;
