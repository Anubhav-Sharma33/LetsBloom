import React from 'react'
import {Form} from 'react-router-dom';
import '../style/form.css'

const CrudForm = ({type,data}) => {
  return (
    <div className = "card">
      <Form method= {type === 'Add'?'post':'put'}> 
      <div className="form-group">
        <label htmlFor="title" className="label">Title</label>
        <input id="title" type="text" name="title" className="input-field" defaultValue={data.title || ''}/>
      </div>
      <div className="form-group">
        <label htmlFor="image" className="label">Image</label>
        <input id="image" type="url" name="image" className="input-field" defaultValue={data.image || ''} />
      </div>
      <div className="form-group">
        <label htmlFor="genre" className="label">Genre</label>
        <input id="genre" name="genre" className="input-field" defaultValue={data.genre || ''} />
      </div>
      <div className="form-group">
        <label htmlFor="author" className="label">Author</label>
        <input id="author" className="input-field" name="author" defaultValue={data.author || ''} />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="label">Description</label>
        <textarea id="description" type="text" name="description" className="input-field"  rows="5"  defaultValue={data.description || ''}/>
      </div>
      <div >
        <button type ="submit" className="submit-btn">{type === "Add" ?"Add" :"Edit"}</button>
      </div>
    </Form>
    </div>
  )
}

export default CrudForm