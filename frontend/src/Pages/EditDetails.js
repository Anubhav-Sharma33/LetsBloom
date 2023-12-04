import React from 'react'
import CrudForm from '../Components/Form'
import { useRouteLoaderData,json,redirect } from 'react-router-dom'

const EditDetails = () => {
    const data = useRouteLoaderData('Data-fetching');
  return (
    <CrudForm type ={"Edit"} data = {data}/>
  )
}

export async function editDetails({request,params}){
  const id = params.id;
  const data = await request.formData();
  const body = {
      title:data.get('title'),
      author:data.get('author'),
      description:data.get('description'),
      image:data.get('image'),
      genre:data.get('genre'),
  }
  try{
    const response = await fetch('http://localhost:4000/api/books/'+id,{
    method:'put',
    body:JSON.stringify(body),
    headers:{'Content-Type':'application/json'}
  })
  if(!response.ok){
      throw new Error('Not Able to Add data');
    }
    return redirect('/');
  }catch(err){
    throw json({message:err.message},{status:404});
  }


}
export default EditDetails