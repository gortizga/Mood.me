function getChart()
{
	var ctx = document.getElementById('myChart').getContext('2d');
			var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [12, 19, 3, 17, 6, 3, 7, 5, 8],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
}