import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import '../style/Card.css'

const CardBox = (props) => {
  const navigate = useNavigate();
  const {author,title,description,image,genre,id} = props;
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      title={title}
    />
    <CardContent >
      <Typography gutterBottom variant="h5" component="div" className="card-header">
        {title} - {genre}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="card-content">
        {description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Author :- {author}
      </Typography>
    </CardContent>
    <CardActions className="card-actions">
      <Button size="small" onClick={()=>{navigate(`/${id}`)}} className="learn-more-button">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default CardBox;