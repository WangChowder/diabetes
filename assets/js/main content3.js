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

        $(document).ready(function () {

            var cityPopulationList = [50, 40, 30, 30, 20];
            var cityNameList = ["心臟病", "腎病變", "視網膜病變", "糖尿病足", "牙周病"];
      
            var ctx = document.getElementById("chartCanvas");
            var pieChart = new Chart(ctx, {
              type: "doughnut",
              data: {
                labels: cityNameList,
                datasets: [
                  {
                    data: cityPopulationList,
                    backgroundColor: ["#0C356A", "#0174BE", "#FFC436", "#FFF0CE", "#B6BBC4"]
                  }
                ]
              },
              options: {
                cutoutPercentage: 60,
                title: {
                  display: true,
                }
      
              }
            })
          })