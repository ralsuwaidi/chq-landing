import React from "react";
import ShopSidebar from "../Shop-sidebar/shop-sidebar";
import ShopStore from "../Shop-store/shop-store";

const Shop = () => {
  return (
    <section className="shop section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ShopSidebar />
          </div>
          <div className="col-lg-9">
            <ShopStore /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
