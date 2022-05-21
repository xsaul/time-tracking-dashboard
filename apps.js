const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const grid = document.querySelector(".grid");

function loadDataDaily() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((times) => {
      times.forEach((time) => {
        const data = document.createElement("div");
        weekly.classList.add("hide");
        monthly.classList.add("hide");
        data.classList.add("daily");
        data.innerHTML += `
        <div class="card">
        <div class="top work">
          <img src="images/icon-${time.title}.svg"/>
        </div>
        <div class="center">
        <p>${time.title}</p>
          <img src="images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <div class="big-number">
        <p>${time.timeframes.daily.current}hrs</p>
        </div>
        <div class="bottom">
        <p>Last - Day ${time.timeframes.daily.previous}hrs</p>
        </div>
      </div>
        `;
        grid.appendChild(data);
      });
    });
  // .catch(error => console.log("There was an error:" error.message));
}

function loadDataWeekly() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((times) => {
      times.forEach((time) => {
        const data = document.createElement("div");
        daily.classList.add("hide");
        monthly.classList.add("hide");
        data.classList.add("weekly");
        data.innerHTML += `
        <div class="card">
        <div class="top work">
          <img src="images/icon-${time.title}.svg"/>
        </div>
        <div class="center">
        <p>${time.title}</p>
          <img src="images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <div class="big-number">
        <p>${time.timeframes.weekly.current}hrs</p>
        </div>
        <div class="bottom">
        <p>Last - Week ${time.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
        `;
        grid.appendChild(data);
      });
    });
  // .catch(error => console.log("There was an error:" error.message));
}

function loadDataMonthly() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((times) => {
      times.forEach((time) => {
        const data = document.createElement("div");
        daily.classList.add("hide");
        weekly.classList.add("hide");
        data.classList.add("monthly");
        data.innerHTML += `
        <div class="card">
        <div class="top work">
          <img src="images/icon-${time.title}.svg"/>
        </div>
        <div class="center">
        <p>${time.title}</p>
          <img src="images/icon-ellipsis.svg"/>
        </div>
        <div class="big-number">
        <p>${time.timeframes.monthly.current}hrs</p>
        </div>
        <div class="bottom">
        <p>Last - Month ${time.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
        `;
        grid.appendChild(data);
      });
    });
  // .catch(error => console.log("There was an error:" error.message));
}

function showDaily() {
  weekly.classList.add("hide");
  monthly.classList.add("hide");
  daily.classList.remove("hide");
}

function showWeekly() {
  monthly.classList.add("hide");
  daily.classList.add("hide");
  weekly.classList.remove("hide");
}

function showMonthly() {
  weekly.classList.add("hide");
  daily.classList.add("hide");
  monthly.classList.remove("hide");
}

dailyBtn.addEventListener("click", function () {
  showDaily();
  loadDataDaily();
});
weeklyBtn.addEventListener("click", function () {
  showWeekly();
  loadDataWeekly();
});
monthlyBtn.addEventListener("click", function () {
  showMonthly();
  loadDataMonthly();
});

window.onload = () => {
  loadDataWeekly();
  showWeekly();
};
