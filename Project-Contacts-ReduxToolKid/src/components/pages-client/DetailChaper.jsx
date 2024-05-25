import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import loadingSlice from "../../redux-tolkit/loadingSlice";
import axios from "axios";
import { URL_API } from "../../utils/const";
import RenderListChapers from "../stories-client/RenderListChapers";

export default function DetailChaper() {
  let params = useParams();
  const dispatch = useDispatch();
  let [detailStory, setDetailStory] = useState({});
  let [detailChaper, setDetailChaper] = useState({});
  let [chapers, setChapers] = useState([]);
  useEffect(() => {
    getData();
  }, [params.slugChaper]);
  let getData = async (action = "story") => {
    if (action == "story") {
      dispatch(loadingSlice.actions.loadingShow());
      let response = await axios.get(
        `${URL_API.baseApiUrl}stories/?slug=${params.slugStory}`
      );
      if (response.status == 200 && response.data[0]) {
        setDetailStory(response.data[0]);
        dispatch(loadingSlice.actions.loadingHidden());
        let responseChaper = await axios.get(
            `${URL_API.baseApiUrl}chapers/?story_id=${response.data[0].id}`
          );
        if (responseChaper.status == 200) {
            let listChaper = responseChaper.data;
            for (let i = 0; i < listChaper.length; i++) {
                if (listChaper[i].slug == params.slugChaper) {
                    setDetailChaper(listChaper[i]);
                    break;
                }
            }
            setChapers(listChaper);
        }
      }
    }
    // console.log(detailChaper.content);
  };
  return (
    <div className="container py-4">
        <div className="text-center">
            <Link to={`/${params.slugStory}`} className="text-success fs-4 fw-semibold text-decoration-none">
                {detailStory?.title}
            </Link>
        </div>
      <p className="text-center">{detailChaper?.name}</p>
      <RenderListChapers
            type={'select'}
            slugChaper={params.slugChaper}
            chapers={chapers}
            slugStory={params.slugStory}
        />
      <p >{detailChaper?.content}</p>

      <RenderListChapers
            type={'select'}
            slugChaper={params.slugChaper}
            chapers={chapers}
            slugStory={params.slugStory}
        />
    </div>
  );
}
