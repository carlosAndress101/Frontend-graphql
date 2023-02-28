import React from "react";
import { useMutation } from '@apollo/client'
import { CREATE_TASK } from '../../graphql/task';
import { useParams } from 'react-router-dom'

export const TaskForm = () => {

  //mutation de creacion de tarea y refrescar datos en general
  const [createTask, {loading}] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject']
  });
  
  //usar parametros
  const params = useParams();

  //midleware para suministrar informacion al back de creacion.
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id
      },
    });
    e.target.reset();
    e.target.title.focus();
  };

  //formulario de creacion de tareas
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Add title" autoComplete="off" className="bg-zinc-900 text-white w-full p-2 rounded-lg mb-2" />
      <button
      disabled={loading} className="bg-sky-900 text-white w-full p-2 rounded-lg mb-2 disabled:bg-zinc-400">Add</button>
    </form>
  );
};
