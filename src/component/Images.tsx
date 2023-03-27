import * as React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  addImages,
  resetGalary,
  selectGalary,
} from "../app/slices/ImageGalarySlice";
import { selectCategory } from "../app/slices/CategorySlice";
import API from "../api/API";
import endpoints from "../api/endpoints";
import { AxiosResponse } from "axios";

interface IImagesProps {}

const Images: React.FunctionComponent<IImagesProps> = () => {
  const [storeLiked, setStoreLiked] = React.useState<number[]>([]);
  const galary = useSelector(selectGalary);
  const category = useSelector(selectCategory);
  const [page, setPage] = React.useState(0);
  const dispatch = useDispatch();

  // console.log("galary: ",galary.flat(Infinity));
  // console.log("Category Images",category);

  const handleLike = (i: number) => {
    if (storeLiked?.includes(i)) {
      let newArr = storeLiked.filter((p) => p != i);
      setStoreLiked(newArr);
    } else setStoreLiked([...storeLiked, i]);
  };

  const getData = () => {
    if (category) {
      API.get(
        `${endpoints.api.search}${page}${endpoints.api.query}${category}${endpoints.client_id}`
      )
        .then((res: AxiosResponse) => {
          // console.log("Response 14Home:", res?.data?.results);
          dispatch(addImages(res?.data?.results));

          // setLoading(false);
        })
        .catch((err: AxiosResponse) => {
          console.log("Error Image", err);
        });
    }
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("height",document.documentElement.scrollHeight);

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight - 400
      ) {
        setPage((prev) => prev + 1);
        // setLoading(true);
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
      <div className="galary_section">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="10px">
            {Array.isArray(galary) &&
              galary?.flat(Infinity)?.map((image: any, i: number) => (
                <div className="position-relative img-sec">
                  <img
                    key={i}
                    src={image?.urls?.regular}
                    style={{ width: "100%", display: "block" }}
                    className="img_galary"
                  />
                  <div
                    style={{
                      zIndex: 111,
                      top: 10,
                      color: "#d4caca",
                      cursor: "pointer",
                    }}
                    className="display_class position-absolute w-100 px-3 mb-2 d-flex justify-content-end"
                  >
                    <div
                      className="icon_style me-2"
                      onClick={() => handleLike(i)}
                      style={{
                        backgroundColor: storeLiked?.includes(i)
                          ? "#e04c4c"
                          : "#fefefe",
                        color: storeLiked?.includes(i) ? "white" : "gray",
                      }}
                    >
                      <FavoriteIcon />
                    </div>
                    <div className="icon_style">
                      <AddIcon />
                    </div>
                  </div>
                  <div
                    style={{ zIndex: 111, bottom: 10, color: "#d4caca" }}
                    className="display_class position-absolute w-100 px-3 mb-2 d-flex justify-content-between"
                  >
                    <div>
                      <img
                        src={image?.user?.profile_image?.medium}
                        style={{ width: 30, height: 30, borderRadius: "100%" }}
                      />
                      <span className=" ms-2 fz-14 fw-bold text-capitalize">
                        {image?.user?.first_name} {image?.user?.last_name}
                      </span>
                    </div>
                    <div className="icon_style">
                      <ArrowDownwardIcon />
                    </div>
                  </div>
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Images;
