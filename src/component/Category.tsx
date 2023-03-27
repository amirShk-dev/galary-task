import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Slider from "react-slick";
import data from './data';
import Demo from './Demo';
import Home from './Home';
import Main from './Main';


interface ICategoryProps {
}

const Category: React.FunctionComponent<ICategoryProps> = (props) => {
  const [activeSlide,setActiveSlide] = React.useState(0)
  const [activeSlide2,setActiveSlide2] = React.useState(0)
  // console.log("Data",data);
  
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        // slidesToShow:8,
        slidesToShow:11,
        slidesToScroll: 1,
        beforeChange: (current:any, next:any) => setActiveSlide( next ),
      afterChange: (current:any) => setActiveSlide2( current ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
      return (
        <>
            <Slider {...settings} className="my-3">
          {
           data.length>0 ? Array.isArray(data) && data.map((d,i)=><span key={i}>
            <h3 className='fz-15 text-capitalize' style={{color:"gray"}}><Link style={{textDecoration:"none",color:"unset"}} to={`/${d}`}>{d}</Link></h3>
          </span>) : "No data"
           }
       </Slider>
       
        </>
      );
};

export default Category;

 