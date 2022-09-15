import React from "react";
import blog2Data from "../../data/blog2.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogListed from "../../components/Blog-list/blog-list";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const BlogListDark = () => {
      const navbarRef = React.useRef(null);
      const logoRef = React.useRef(null);

      React.useEffect(() => {
        var navbar = navbarRef.current,
          logo = logoRef.current;
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
          } else {
            navbar.classList.remove("nav-scroll");
          }
        });
      }, [navbarRef]);
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        className="sub-bg"
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogListed blogs={blog2Data} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogListDark;
