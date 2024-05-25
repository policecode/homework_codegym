import RenderListStories from "../stories-client/RenderListStories";

export default function Home() {
 
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <RenderListStories />
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}