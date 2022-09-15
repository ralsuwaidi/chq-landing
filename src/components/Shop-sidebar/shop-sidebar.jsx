import React from "react";

const ShopSidebar = () => {
  const tooltipRef = React.useRef(),
    setValue = (range) => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min)
        ),
        newPosition = 16 - newValue * 0.32;
      tooltipRef.current.innerHTML = `<span>${range.value}</span>`;
      tooltipRef.current.style.left = `calc(${newValue}% + (${newPosition}px))`;
      document.documentElement.style.setProperty(
        "--range-progress",
        `calc(${newValue}% + (${newPosition}px))`
      );
      let a = range.value
      range.value = a
    };
  React.useEffect(() => {
    setValue(document.querySelector("#range"));
  }, []);
  return (
    <div className="sidebar md-mb50">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <div className="search mb-30">
            <form action="">
              <div className="form-group">
                <input type="text" name="shop-search" placeholder="Search" />
                <button>
                  <span className="icon pe-7s-search"></span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-12 col-md-6">
          <div className="box gat mb-30">
            <h6 className="title mb-30">Category</h6>
            <ul>
              <li>
                <a href="#0">
                  App Design <span>05</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  Development <span>03</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  Web Design <span>07</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  Dashboard <span>04</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  Logo Design <span>09</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  Branding <span>14</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-12 col-md-6">
          <div className="box filter-price mb-30">
            <h6 className="title mb-30">Filter By Price</h6>

            <div className="range-slider mb-30">
              <div id="tooltip" ref={tooltipRef}></div>
              <input
                onInput={(e) => setValue(e.currentTarget)}
                id="range"
                type="range"
                step="10"
                min="5"
                max="800"
              />
              <div className="start-pointe">$ 5</div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-6">
          <div className="box tags">
            <h6 className="title mb-30">Popular Tags</h6>

            <div>
              <a href="#0">Apps</a>
              <a href="#0">Design</a>
              <a href="#0">Branding</a>
              <a href="#0">Software</a>
              <a href="#0">Development</a>
              <a href="#0">Web</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
