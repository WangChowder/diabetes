$(document).ready(function () {
  var diseaseList = [24.9, 11.4, 7.0, 6.9, 6, 5.9, 4.2, 3.3, 3.1, 2.8];
  var disease2List = [51927, 23668, 14667, 14320, 12416, 12289, 8720, 6953, 6494, 5813];

  var disease = ["惡性腫瘤", "心臟疾病", "Covid-19", "肺炎", "腦血管疾病", "糖尿病", "高血壓性疾病", "事故傷害", "慢性下呼吸道疾病", "腎炎腎病症候群及腎病變"];

  var ctx = document.getElementById("chartCanvas");
  var populationChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: disease,
      datasets: [
        {
          label: "%",
          data: diseaseList,
          backgroundColor: "rgba(	32, 178, 170)",
          borderColor: "(0, 139, 139)",
          borderWidth: 1
        },
        {
          label: "人數",
          data: disease2List,
          backgroundColor: "rgba(119, 136, 153)",
          borderColor: "rgba(	119, 136, 153)",
          borderWidth: 1
        }
      ]
    }
  })
})

var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

