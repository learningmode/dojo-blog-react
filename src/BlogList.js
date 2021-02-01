import {Link} from "react-router-dom";
const BlogList =(props)=>{
  const {blogs,title} = props;
//  const title = props;
  return(
    <div className="blog-list">
      <h1>{title}</h1>
     {blogs.map(blog=>(
      <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
        </Link>
      </div>))}
    </div>
);}

export default BlogList;
