import { fontSize } from "@mui/system";
import * as React from "react";
import Form from "react-bootstrap/Form";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        flexDirection: "column",
        height: "82vh", 
        opacity: "0.9",
        backgroundImage: "url('./sun.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div style={{width:"50%",margin:"auto"}}>
        <h2 style={{fontSize:"46px",lineHeight:"1.2",fontWeight:"bold",color:"white"}}>Unsplash</h2>
        <p style={{fontSize:"18px",marginTop:"16px",marginBottom:"25px",color:"white"}}>
          The internet’s source for visuals.
          <br />
          Powered by creators everywhere.
        </p>
        <Form className="">
          <div
            className="search d-flex justify-content-between align-items-center"
            style={{
              // width: "50rem",
              padding: 1,
              borderRadius: 3,
              backgroundColor: "#fff",
            }}
          >
            <svg
              width="24"
              height="32"
              className="me-2 ms-2"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
              style={{ color: "#767676;" }}
            >
              <desc lang="en-US">A magnifying glass</desc>
              <path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z"></path>
            </svg>
            <input
              type="search"
              style={{
                width: "92%",
                padding: 13,
                // backgroundColor: "#eee",
                border: "none",
              }}
              placeholder="Search high-resolution images"
            />

            <svg
              width="24"
              height="32"
              className="me-3"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <desc lang="en-US">Visual search</desc>
              <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4ZM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5Zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2Zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4ZM12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"></path>
            </svg>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Main;
