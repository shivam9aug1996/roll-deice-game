import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer
          className=" py-3 my-4 border-top"
          style={{ textAlign: "center" }}
        >
          <div className="">
            {/* <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></a> */}
            <span className="text-muted">© 2021 Company, Inc</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
