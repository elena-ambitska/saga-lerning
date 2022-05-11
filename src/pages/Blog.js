import {useDispatch} from "react-redux";
import {useEffect} from "react";


export const Blog = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:'LOAD_BLOG_DATA'})
  },[]);


  return(
      <div>Blog</div>
  )
}