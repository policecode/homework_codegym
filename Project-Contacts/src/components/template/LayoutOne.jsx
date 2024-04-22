import { Link } from "react-router-dom";

export default function LayoutOne() {

  return (
    <>
      <div className="container-fluid bg-top-one text-white">
        <div className="container"> Menu phụ </div>
      </div>
      <div className="container-fluid p-5">
        <div className="container"> Logo </div>
      </div>
      <div className="container-fluid bg-light p-2">
        <div className="container"> Tin nhanh </div>
      </div>
      <div className="container-fluid bg-light p-2">
        <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" className="w-100" alt="" />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
            <div className="card">
              <img src="https://img.pikbest.com/ai/illus_our/20230424/9334eb75878d189ee3537b640503372d.jpg!w700wp" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
            <div className="card">
              <img src="https://img.pikbest.com/ai/illus_our/20230424/9334eb75878d189ee3537b640503372d.jpg!w700wp" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
            <div className="card">
              <img src="https://img.pikbest.com/ai/illus_our/20230424/9334eb75878d189ee3537b640503372d.jpg!w700wp" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
            <div className="card">
              <img src="https://img.pikbest.com/ai/illus_our/20230424/9334eb75878d189ee3537b640503372d.jpg!w700wp" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
            <div className="card">
              <img src="https://img.pikbest.com/ai/illus_our/20230424/9334eb75878d189ee3537b640503372d.jpg!w700wp" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid bg-light p-2">
        <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" className="w-100" alt="" />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="fvn-image" src="https://img.pikbest.com/ai/illus_our/20230424/9334eb75878d189ee3537b640503372d.jpg!w700wp" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img  className="fvn-image"  src="https://binhminhdigital.com/StoreData/PageData/2372/nhung-loi-co-ban-khi-chup-anh-phong-canh%20(5).jpg" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <img  className="fvn-image"  src="https://img.pikbest.com/ai/illus_our/20230424/9334eb75878d189ee3537b640503372d.jpg!w700wp" alt="" />
              <div className="card-body">
                <Link to={'/'} className="card-title card-link">All Black in black</Link>
                <p className="card-text">sdgdfsgrest fdgbrsedrteart dfbdgfhgfdhfg</p>
              </div>
            </div>
          </div>

   
        </div>
      </div>

      <footer className="bg-black p-4 text-white-50">
        <div className="container">
          <div className="row">
            <div className="col-md-3">Logo</div>
            <div className="col-md-3">Menu thông tin</div>
            <div className="col-md-3">Menu khách hàng</div>
            <div className="col-md-3">Menu sản phẩm</div>
          </div>
        </div>
      </footer>
    </>
  )
}