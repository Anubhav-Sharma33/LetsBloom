import React from 'react'
import { useLoaderData,json,useParams,Link,useRouteLoaderData} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../style/BookList.css';
import '../style/Card.css'

const DetailPage = () => {
    const data = useRouteLoaderData('Data-fetching');
    console.log(data);
  return (
    <div className="booklist-container">
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="card-header">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card-content">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
        <Button size="small" color="primary" component={Link} to ={`/${data._id}/edit`} >
          Edit
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export async function getIndividual(props){
    try{
        console.log(props);
        const id = props.params.id;
        const response  = await fetch(`http://localhost:4000/api/books/${id}`);
        const data = response.json();
        return data;
    }catch(err){
        throw json({message:"Cannot found! SomeThing Went wrong"},{status:404});
    }
} 
export default DetailPage