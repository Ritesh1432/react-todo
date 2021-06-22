import React,{useState} from 'react'

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
   
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or description is missing');
        }
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    } 
    

    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <label className="form-label">Add Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title"/>
                <label className="form-label">Add Description</label>
                <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
                <button className="btn btn-sm btn-success my-3">Add Todo</button>
            </form>
        </div>
    )
}
