import Data from '../../../public/database.json';

const Blog = () => {
    const blog = Data.Blogs;
    return (
        <div className="ntl-news mx-3">
            <h2 className="py-4">Tin tức mới nhất</h2>
            <div className="row">
            {blog.map((items, index) => (

                <div className="col-md-4" >
                    <img className="img-fluid rounded-3" src={items.img} alt="blog" />
                    <div className="py-4">
                        <h5 className="text-uppercase mb-2">{items.title}</h5>
                        <p>{items.des}</p>
                    </div>
                </div>
                    ))}

            </div>
        </div>
    );
}

export default Blog;