import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import IArticle from './types';


function Detail() {
    let {id} = useParams();
    useEffect(()=>{
        getArticle()
    },[])

    const [data,setData] = useState<IArticle|null>(null)

    const getArticle = async () => {
   
        try {
            const response = await fetch (`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
    
            if(response.ok){
                let article = await response.json()
                setData(article)
                console.log(article)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h3 style={{textAlign:'center',}}>{data?.title}</h3>
        <ul style={{listStyle:'none'}}>
            
            <div className='detail-text'>
                <img style={{width:'300px',height:'350px',float:'left',paddingRight:'10px'}}src={data?.imageUrl } alt=''/>{data?.summary}
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nisi odit corrupti ipsum 
                nobis eveniet repellat dolorem in ipsam possimus ullam vero, maxime odio, deserunt quo delectus esse doloremque quam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, earum! Minima praesentium sit facilis itaque vero, 
                reiciendis nobis aliquam incidunt fugiat. Quod dicta totam fuga aliquam architecto dolor fugiat sequi?
                
            </div>
            <li style={{paddingTop:'22px'}}><a href={data?.imageUrl}>Complete article</a></li>
            <li>from: {data?.newsSite}</li>
            <li>{data?.publishedAt.slice(0,10)}</li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Detail