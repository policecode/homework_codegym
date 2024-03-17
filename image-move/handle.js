let formSearch = document.querySelector('#form__search');
let tableRender = document.querySelector('#render__image');

formSearch.querySelector('#submit__btn').addEventListener('click', async (e) => {
    e.preventDefault();
    let inputSearch = formSearch.querySelector('input[name="search"]');
    let url = `https://api.giphy.com/v1/gifs/search?q=${inputSearch.value}&api_key=ZoxQSWmWoRHWg3YrtUiF8yOFQtLkU708`;
    let response = await axios.get(url);
    if (response.status == 200) {
        let data = response.data.data;
        console.log(data);
        let html = data.map(imgObj => {
            return ` <div class="col-3 mb-2">
            <div class="card" style="width: 18rem">
              <img src="${imgObj.images.original.url}" class="card-img-top" alt="${imgObj.slug}" />
              <div class="card-body">
                <h5 class="card-title">${imgObj.title}</h5>
                <p class="card-text">
                  id: ${imgObj.id}<br/>
                  slug: ${imgObj.slug} 
                </p>
                <a href="${imgObj.url}" class="btn btn-primary" target="_blank" >Go to root</a>
              </div>
            </div>
          </div>`
        }).join('');
        tableRender.innerHTML = html;
    } else {
        tableRender.innerHTML = '<h5>Ứng dụng bị lỗi</h5>';

    }
 
})