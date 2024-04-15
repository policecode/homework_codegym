import { useNavigate } from "react-router-dom"
export default function NotFound() {
    const navigate = useNavigate();
    const backToHome = () => {
        /**
         * useNavigate(): Xử lý việc điều hướng
         * relative: true => Xóa đi đường link lịch sử lưu ở phần back
         */
        // navigate('/');
        navigate(-1, {relative: true}); //Quay lại trang trước đó

    }
  return (
    <>
    <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Not Found</h1>
        <button className="btn btn-warning" onClick={backToHome}>Back to Home</button>
    </div>
    </>
  )
}

