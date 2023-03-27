import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, resetCategory, selectCategory } from "../app/slices/CategorySlice";
import { useSearchParams } from "react-router-dom";
import API from "../api/API";
import endpoints from "../api/endpoints";
import { AxiosResponse } from "axios";
import { addImages, resetGalary } from "../app/slices/ImageGalarySlice";
import Images from "./Images";

import Category from './Category';
import ContainerMaterial from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Main from './Main';
import Home from "./Home";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const dispatch = useDispatch();
  const handleChange = (e: any) => { 
    dispatch(resetGalary());
    dispatch(addCategory(e.target.value)); 
  };
  
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {/* <img src="logo192.png" style={{ width: 30, height: 30 }} /> */}
            <svg
              width="32"
              height="32"
              className="UP8CN"
              viewBox="0 0 32 32"
              version="1.1"
              aria-labelledby="unsplash-home"
              aria-hidden="false"
            >
              <desc lang="en-US">Unsplash logo</desc>
              <title id="unsplash-home">Unsplash Home</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
          </Navbar.Brand>
          <Form className="">
            <div className="search d-flex justify-content-between align-items-center">
              <svg
                width="20"
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
                  padding: 7,
                  backgroundColor: "#eee",
                  border: "none",
                }}
                onChange={handleChange}
                placeholder="Search high-resolution images"
              />

              <svg
                width="20"
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
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex  me-auto my-2 my-lg-0"></div>
            <Nav
              style={{ maxHeight: "100px" }}
              className="fz-14 text-dark"
              navbarScroll
            >
              <Nav.Link className="mx-1 text-dark" href="#action1">
                Advertising
              </Nav.Link>
              <Nav.Link className="mx-1 text-dark" href="#action2">
                Blog
              </Nav.Link>
              <Nav.Link className="mx-1 text-color " href="#action2">
                Unsplash+
              </Nav.Link>
              <button
                type="button"
                disabled
                className="fz-14 mx-1 border-0 p-0"
                style={{ backgroundColor: "#eee" }}
              >
                Submit a photo
              </button>
              <button
                role="button"
                // tabindex="0"
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
                className="border-0 mx-1"
                style={{ background: "transparent" }}
                // style="height:100%"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  aria-hidden="false"
                >
                  <desc lang="en-US">Bell</desc>
                  <path d="M14.345 21.15c-4.637 1.604-8.871.902-9.778-1.805-.303-1.002-.202-2.005.403-3.108.302-.5.302-1.303.1-1.905l-.705-2.306c-.605-1.604-.403-3.308.202-4.712.403-1.102 1.109-1.904 2.117-2.606l-.202-.602c-.302-.601.1-1.403.706-1.604l1.21-.401c.705-.3 1.41.1 1.612.802l.202.602c1.31-.1 2.52.2 3.629.902 1.21.802 2.117 1.905 2.62 3.409l.807 2.506c.202.501.706 1.203 1.31 1.404 1.11.4 1.916 1.103 2.218 2.105 1.008 2.507-1.814 5.715-6.451 7.319Zm4.536-6.717c-.403-1.103-3.226-1.705-7.056-.401-3.83 1.303-5.645 3.609-5.242 4.712.403 1.103 3.226 1.704 7.056.4 3.83-1.302 5.645-3.608 5.242-4.711Zm-7.56 4.11c-1.008 0-1.815-.501-2.42-1.203-.1-.1-.1-.3 0-.4.706-.602 1.714-1.204 3.327-1.806.605-.2 1.21-.4 1.814-.5.202 0 .303.1.303.2v.501c0 1.203-.706 2.306-1.714 2.807.1 0-.706.401-1.31.401Z"></path>
                </svg>
              </button>
            </Nav>
            <div className="mx-1">
              <div className="OAOnt">
                <img
                  className=""
                  style={{ borderRadius: "100%" }}
                  loading="lazy"
                  src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&amp;auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=2&amp;auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff 2x"
                  role="presentation"
                  alt="Avatar of user Amir Shaikh"
                  width="32"
                  height="32"
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ContainerMaterial maxWidth={false}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Category />
          </Grid>
        </Grid>
      </ContainerMaterial>
       <Main /> 
           <Images />     
       {/* {
         category ? <Home /> : ""
       }  */}

  
    </>
  );
};

export default Header;
