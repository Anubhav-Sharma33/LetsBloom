import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rootlayout from './Pages/Rootlayout';
import Homepage from './Pages/Homepage';
import {loaderData} from './Pages/Homepage';
import AddBook from './Pages/AddBook';
import EditDetails from './Pages/EditDetails';
import { getIndividual } from './Pages/DetailPage';
import DetailPage from './Pages/DetailPage';
import { editDetails } from './Pages/EditDetails';
import { addBook } from './Pages/AddBook';

const router = createBrowserRouter(
  [
    {path:'/',element:<Rootlayout />,children:[
      {index:true,element:<Homepage />,loader:loaderData},
      {path:'add',element:<AddBook />,action:addBook},
      {path:':id',loader:getIndividual,id:"Data-fetching",children:[
        {index:true,element:<DetailPage/>},
        {path:'edit',element:<EditDetails/>,action:editDetails}
      ]}
    ]}
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
