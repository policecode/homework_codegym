/**
 * useEffect(callback, [deps])
 * TH1: useEffect(callback) -> luôn được gọi khi state được cập nhật
 * TH2: useEffect(callback, []) -> Được gọi một lần duy nhất khi component được mounted vào DOM
 * TH3: useEffect(callback, [deps])
 * 
 * lưu ý: Render UI trước rồi mới thực hiện callback
 * Chức năng: Xử lý các tình huống side-effect
 */


import { useEffect } from 'react';



function LearnUseEffect() {
    useEffect(() => {

    });
  return (
    <>
        <h1>Hoàng Đạt</h1>
    </>
  )
}

export default LearnUseEffect
