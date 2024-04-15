
import { useParams, useSearchParams, useLocation } from "react-router-dom";
/**
 * useParams: Lấy dữ liệu động của đường dẫn
 * useSearchParams: lấy params sau dấu ?
 * useLocation: Thông số của url
 */
export default function Slug(props) {
  /**
   * Xử lý lấy dữ liệu từ url
   * params = {
   *  key1: value1,
    * key2: value2
    * ....
   * }
   */
  let params = useParams();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  let {slug} = params;
  console.log(location);
  return (
    <>
      <h1>{slug}</h1>
    </>
  )
}


