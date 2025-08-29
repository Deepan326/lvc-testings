
function BlogPage() {
  // example blog posts
  const posts = [
    {
      id: 1,
      title: "Welcome to LVC Solutions Blog",
      date: "August 27, 2025",
      content:
        "At LVC Solutions, we provide innovative technology and business solutions. This blog is where we share updates, tips, and insights."
    },
    {
      id: 2,
      title: "How Technology Helps Businesses Grow",
      date: "August 20, 2025",
      content:
        "From automation to data-driven decisions, technology is transforming businesses. At LVC Solutions, we help companies adapt and thrive."
    },
    {
      id: 3,
      title: "Our Commitment to Clients",
      date: "August 10, 2025",
      content:
        "We believe in building long-term relationships by providing reliable, scalable, and affordable solutions tailored to client needs."
    }
  ];
  return (
    <main>
      <div className='blog-section-herobanner'>
        <div classname='blog-container'>
          <div className='blog-content'>
            <p className="blog-subtitle">Blog</p>
            <hr className="underline" />
            <h1 className="blog-title">LVC Solutions Blog</h1>
            <h5>Insights, updates, and ideas from our team.</h5>
          </div>
        </div>
      </div>



    </main>
    //   <div className="blog-container">
    //   <header className="blog-header">
    //     <h1>LVC Solutions Blog</h1>
    //     <p>Insights, updates, and ideas from our team.</p>
    //   </header>

    //   <main className="blog-content">
    //        {/* basic blog post mappings ..... */}
    //     {posts.map((post) => (
    //       <article key={post.id} className="blog-post">
    //         <h2>{post.title}</h2>
    //         <small>{post.date}</small>
    //         <p>{post.content}</p>
    //       </article>
    //     ))}
    //   </main>
    // </div>
  );
}

export default BlogPage;
