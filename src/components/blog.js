import Footer from './footer'

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
  //images
  const images = [
    {
      src: "https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "E-commerce Development",
      title: "E-commerce Development",
    },
    {
      src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Growth",
      title: "Website Growth",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Maintenance and Support",
      title: "Website Maintenance and Support",
    },
    {
      // Changed this image URL for Website Design
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Website Design",
      title: "Website Design",
    },
    {
      src: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cybersecurity",
      title: "Cybersecurity",
    },
    {
      src: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cloud",
      title: "Cloud",
    },
    {
      src: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Consulting",
      title: "Consulting",
    },
    {
      src: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Data & Analytics",
      title: "Data & Analytics",
    },
    {
      src: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Digital Transformation",
      title: "Digital Transformation",
    },
    {
      src: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Innovation",
      title: "Innovation",
    },
    {
      src: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Artificial Intelligence",
      title: "Artificial Intelligence",
    },
  ];
  const img = [
    {
      src: "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cybersecurity",
      number: "1",
      title: "Is DeepSeek China's Sputnik Moment?",
      description: "IS DEEPSEEK",
    },

    {
      src: "https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Data & Analytics",
      number: "2",
      title: "Iot is transforming hospitals into smart environments",
      description: "IOT FOR HEALTH CARE ",
    },
    {
      src: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Digital Transformation",
      number: "3",
      title: "Six Takeaways From a Monumental Week for AI",
      description: "TAKEAWAYS FROM A DIRECTORY",
    },
  ];

  return (
    <main className='blog-page'>
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

      <div className='blogs-container py-5'>
        <h1
          style={{ color: '#333', textAlign: 'start' }}
          className="whatwe-do-herotitle"> Keep Up With Blogs  </h1>
{/* 
          <div>

          </div> */}
      </div>

      {/* <div className='row'>
        {images.slice(0,6).map((img, index) => {
          <div key={index} className=''>

          </div>
        })}
      </div> */}
      <Footer />

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
