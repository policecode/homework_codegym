// https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=b6a0f3f02fc616ff76cebebae90cf0e4
// API thời tiết tại Hà Nội

async function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=b6a0f3f02fc616ff76cebebae90cf0e4`;
  let response = await axios.get(url);
  if (response.status == 200) {
      let data = response.data;
      document.querySelector('.title_weather').innerHTML = JSON.stringify(data);
  } else {
      tableRender.innerHTML = '<h5>Ứng dụng bị lỗi</h5>';

  }
}
getWeather();