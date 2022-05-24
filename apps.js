const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const grid = document.querySelector(".grid");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

function loadDataDaily() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((times) => {
      times.forEach((time) => {
        const data = document.createElement("div");
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
        daily.appendChild(data);
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
        weekly.appendChild(data);
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
        monthly.appendChild(data);
      });
    });
  // .catch(error => console.log("There was an error:" error.message));
}

function showDaily() {
  weekly.style.display = "none";
  monthly.style.display = "none";
  if (daily.style.display == "grid") {
    console.log("already displayed");
  } else {
    daily.style.display = "grid";
  }
}

function showWeekly() {
  monthly.style.display = "none";
  daily.style.display = "none";
  if (weekly.style.display == "grid") {
    console.log("already displayed");
  } else {
    weekly.style.display = "grid";
  }
}

function showMonthly() {
  weekly.style.display = "none";
  daily.style.display = "none";
  if (monthly.style.display == "grid") {
    console.log("already displayed");
  } else {
    monthly.style.display = "grid";
  }
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
