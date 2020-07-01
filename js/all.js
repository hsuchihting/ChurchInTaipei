let title = document.querySelector(".title");
let content = document.querySelector(".content");

const url =
  "https://data.taipei/api/v1/dataset/2aac2df3-e768-448c-8f06-181d7b424690?scope=resourceAquire";
let data;

axios.get(url).then(function (response) {
  data = response.data.result.results;
  console.log(data);
  filter(data);
  getChurch("基督教");
});

function filter(newData) {
  let totalChurch = "";
  let newArry = [];
  newData.forEach(function (item) {
    if (item.CB_REG_TITLE === "基督教") {
      newArry.push(item)
    }
  });
  totalChurch = `<p>台北市總共有 ${newArry.length} 間教會。</p>`;
  title.innerHTML = totalChurch;
}

function getChurch(place) {
  let str = "";
  data.forEach((item) => {
    if (item.CB_REG_TITLE === place) {
      str += `
			<div class="church">
				<h2>${item.CB_NAME}</h2>
				<p>地址：台北市${item.PTNAME1}${item.TOTAL_ADDR}</p>
				<p>電話：${item.CB_TEL}</p>
			</div>		
			`;
    }
  });
  content.innerHTML = str;
}