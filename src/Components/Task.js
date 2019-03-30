import React from "react";

const Task = props => {
  const { text, date, id, active, important, finishDate } = props.task;

  const style = {
    color: "red"
  };

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do{" "}
          <span>{date} </span>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const FinishTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - ( zrobić do{" "}
          <em>{date} </em> )
          <br />- potwierdzenie wykonania<span>{FinishTime} </span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
