import { Link, useParams } from "react-router-dom";
import RenderListStories from "../stories-client/RenderListStories";
import JsCoreHelper from "../../utils/JsCoreHelper";
import { useEffect, useState } from "react";

export default function StoryByCategory() {
    let params = useParams();
    const {slugCat} = params;
    let [category, setCategory] = useState({});
    // console.log(category);
    useEffect(() => {
        setCategory(JsCoreHelper.getCatBySlug(slugCat));
    }, [slugCat])
  return (
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={'/'}>Trang chủ</Link></li>
                <li className="breadcrumb-item"><Link>Thể loại</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{category.label}</li>
            </ol>
        </nav>
        <div className="row">
            <div className="col-9">
                {category?.value?(
                    <RenderListStories 
                    catValue={category?.value}
                />
                ):''}
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  );
}
