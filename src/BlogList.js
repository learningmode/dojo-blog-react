const BlogList =(props)=>{
  const {blogs,title,handleDelete} = props;
//  const title = props;
  return(
    <div className="blog-list">
      <h1>{title}</h1>
     {blogs.map(blog=>(
      <div className="blog-List" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <button onClick={()=>handleDelete(blog.id)}>Delete</button>
      </div>))}
    </div>
);}

export default BlogList;
