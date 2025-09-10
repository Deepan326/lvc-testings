import { useLocation } from "react-router-dom";


function BlogArticle() {
    const location = useLocation()
    const { post, image } = location.state || {}

    console.log(post, image)

    return (
        <div>
            {post ? (
                <div style={{ marginTop:'300px', width: '500px', height: '500px' }}>
                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                    <p>{post.content}</p>
                    <img style={{ width: '500px', height: '500px' }} alt={image.alt} src={image.src} />
                </div>

            ) : (
                <p>no post here</p>
            )}
        </div>
    )
}


export default BlogArticle;
