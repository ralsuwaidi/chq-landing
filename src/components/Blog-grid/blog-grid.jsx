/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogGrid = ({ blogs }) => {
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {blogs.map((blogItem) => (
              <div className="col-lg-4" key={blogItem.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                    <img src={blogItem.image} alt="" />
                  </div>
                  <div className="cont">
                    <div>
                      <div className="info">
                        <Link href="/blog/blog-dark">
                          <a className="date">
                            <span>
                              <i>{blogItem.date.day}</i>
                              {blogItem.date.month}
                            </span>
                          </a>
                        </Link>
                        <span>/</span>
                        {blogItem.tags.map((tag, index) => (
                          <Link key={index} href="/blog/blog-dark/">
                            <a className="tag">
                              <span>{tag}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                      <h5>
                        <Link href="/blog-details/blog-details-dark">
                          {blogItem.title.substr(0, 55) + "..."}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link href="/blog-details/blog-details-dark">
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="pagination">
              <span className="active">
                <Link href={`/blog/blog-dark`}>1</Link>
              </span>
              <span>
                <Link href={`/blog/blog-dark`}>2</Link>
              </span>
              <span>
                <Link href={`/blog/blog-blogwindow.theme}`}>
                  <a>
                    <i className="fas fa-angle-right"></i>
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
