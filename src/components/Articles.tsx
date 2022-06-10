import {useState,useEffect} from 'react'
import IArticle from './types'
import ArticleElement from './ArticleElement'
import {Container,Row} from 'react-bootstrap'





function Articles() {

    useEffect(()=>{
     getArticles()
    },[])

    const [articles,setArticles]=useState<IArticle[] >([])

    const getArticles = async () => {


        try {
            const response = await fetch ("https://api.spaceflightnewsapi.net/v3/articles")
    
            if(response.ok){
                let data = await response.json()
                setArticles(data)
                console.log(data)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
      
    <Container>
      <Row className='d-flex, justify-content-center' style={{gap:'10px'}}>
    
                {articles.map((article,i)=>(<  ArticleElement data={article} key={i}/>)
                   
              )}
        
      </Row>
    </Container>
    
  )
}

export default Articles