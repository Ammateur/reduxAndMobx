import React from "react";
import "./indexPage.scoped.less";
import CustomHeader from "components/Header/Header";
function IndexPage() {
  return (
    <div className={"index-page-wrapper"}>
      <header className="index-header">
        <CustomHeader />
      </header>
      <section className="content">
        <div className="content-row">
          <div className="left-area">this is chart</div>
          <div className="right-area">this is account</div>
        </div>
        <div className="content-row">
          <div className="left-area">this is promotion card</div>
          <div className="right-area">this is indexBanner</div>
        </div>
        <div className="content-row">
          <div className="left-area">this is productCard</div>
          <div className="right-area">this is productNews</div>
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
