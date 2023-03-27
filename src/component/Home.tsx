import * as React from "react";
import API from "../api/API";
import endpoints from "../api/endpoints";
import { AxiosResponse } from "axios"; 
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImages, resetGalary, selectGalary } from "../app/slices/ImageGalarySlice";
import Loading from "./Loading";
import Images from "./Images";
import { resetCategory, selectCategory } from "../app/slices/CategorySlice";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const dispatch = useDispatch();
  let { category } = useParams();
  const [cate, setCate] = React.useState<string>("")
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const search = useSelector(selectCategory) 
   

  const getData = () => {
    if (category?.includes("&"))
       setCate(category.replace("&", "-").replace(/\s/g, "").toLowerCase())
    else if (category?.includes(" "))
       setCate(category.replace(" ", "-").toLowerCase());
    else{
      category = category?.toLowerCase();
      setCate(category as string);
    } 
    
    if (cate) {
      API.get(
        `${endpoints.api.topics}${cate}${endpoints.per_page}${page}${endpoints.client_id}`
      )
        .then((res: AxiosResponse) => {
          // console.log("Response 14Home:",res?.data);
          dispatch(addImages(res?.data));
          setLoading(false);
        })
        .catch((err: AxiosResponse) => {
          console.log("Error Home 17", err);
        });
    }else if (search) {
      
        API.get(`${endpoints.api.search}${page}${endpoints.api.query}${search}${endpoints.client_id}`)
        .then((res: AxiosResponse) => {
          // console.log("Response 14Home:",res?.data?.results);
          dispatch(addImages(res?.data?.results));
          setLoading(false);
        })
        .catch((err: AxiosResponse) => {
          console.log("Error Home 17", err);
        });
    }
  };

  React.useEffect(() => {
     
      getData();
  }, [page]);

  React.useEffect(() => {
    setPage(1);
    dispatch(resetCategory());
    dispatch(resetGalary());
    getData();
  }, [category]);

  React.useEffect(() => {
    setPage(1); 
    dispatch(resetGalary());
    getData();
  }, [search]);
 

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight - 800
      ) {
        setPage((prev) => prev + 1);
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      {/* <Galary /> */}
      <Images  />
      {loading && <Loading />}
    </>
  );
};

export default Home;
