import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects';


export function ProjectForm(){

    //estados de las variables que van a cambiar
    const [project, setproject] = useState({
        name: "",
        description:""
    });

    //Mutation que se va suministrar los datos al backent y va a refrescar la query y quedando en memoria cache
    const [createProject, {loading, error}] = useMutation(CREATE_PROJECT, {
        refetchQueries:[
            {
                query: GET_PROJECTS,
            },
            "GetPorject",
    ]})

    //midleware para cambiar los valoras de el estado que se desclaro
    const handleChange = (e) =>{
        setproject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    //midleware para asignar valores tipiadas desde el frontend
    const handleSubmit = (e) =>{
        e.preventDefault();
        createProject({
            variables:{
                name: project.name,
                description: project.description
            }
        })
        e.target.reset();
        e.target.name.focus();
    }

    return(
        <form onSubmit={handleSubmit} className="w-2/5">
            {error && <p>{error.message}</p>}
            <input type="text" name="name" autoComplete='off' placeholder="write a name" onChange={handleChange} className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"/>
            <textarea name="description" rows="3" placeholder="write a description" onChange={handleChange} className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"></textarea>
            <button 
            disabled={!project.name || ! project.description || loading} className="bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400">Save</button>
        </form>
    )
}