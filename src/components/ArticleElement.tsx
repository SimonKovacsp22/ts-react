import React from 'react'
import {Card,Button} from 'react-bootstrap'
import IArticle from './types'
import {Link} from 'react-router-dom'

interface ArticleElementProps {
    data:IArticle,
    
}

function ArticleElement({data}:ArticleElementProps) {
  return (
    <Card style={{ width: '18rem' ,height:'30rem'}}>
  <Card.Img variant="top" src={data.imageUrl} />
  <Card.Body className='d-flex flex-column'>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text className='card-text'>
      {data.summary}
    </Card.Text>
   <div style={{justifySelf:'end'}}>
        <Link to={`/${data.id}`}><Button variant="primary">go to Article...</Button></Link>
        <Card.Text style={{paddingTop:'10px',marginTop:'auto'}}>
            {data.publishedAt.slice(0,10)}
        </Card.Text>
   </div>
  </Card.Body>
</Card>
  )
}

export default ArticleElement