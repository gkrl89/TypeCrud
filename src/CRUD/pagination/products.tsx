import axios from 'axios';
import Paginate from './paginate'
import React , {useState , useEffect} from 'react';
import "../empdetails.css";

function Products() {


  const [post , setPost] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState(1);
  const [postsperPage] = useState(10);

  useEffect(()=>{
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response: any) => {
      setPost(response.data);
      setLoading(false);
    });
    console.log(post);

  }, [])

  const indexofLastPost = currentPage * postsperPage;
  const indexofFirstPost = indexofLastPost - postsperPage;
  const currentPosts = post.slice(indexofFirstPost , indexofLastPost);
  const paginate = (pageNumber:number) =>
  {setCurrentPage(pageNumber);}
  return (
    <>
    <div  className='header'>Products</div>
    <div className='list' >
    < Paginate  postsperPage={postsperPage}  totalPosts = {post.length} paginate={paginate}/>
    <ul className='list-group mt-4'>
{currentPosts.map((post:any) =>(
  <li key = {post.id} className='list-group-item'>
    {post.title}
  </li>
)
  )}
    </ul>
    </div>
    
    </>
  )
}

export default Products;