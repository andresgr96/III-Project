$("#form").submit(function(event) {
  event.preventDefault();
  $("#output").empty();

  var userInput = parseInt($("input#user-input").val());
  var numbers = [];
  succesfullPPs = 0;
  succesfullPings = 0;
  succesfullPongs = 0;

  for (i=1; i <= userInput; i++) {
    if ((i % 15) === 0) {
      numbers.push("<b><i>Ping Pong</i></b>");
      succesfullPPs++;
      succesfullPings++;
      succesfullPongs++;
    }
    else if ((i % 3) === 0) {
      numbers.push("<b>ping</b>");
      succesfullPings++;
    }
    else if ((i % 5) === 0) {
      numbers.push("<b>pong</b>")
      succesfullPongs++;
    }
    else {
      numbers.push(i);
    }
  }

  var i = 0

  var printing = setInterval(function() {
    $("#main").text(i)
    $("#result").append(numbers[i] + ", ")
    i++
    if (i >= numbers.length) {
      $("#main").text(i++)
      $(".pings").text(succesfullPings);
      $(".pongs").text(succesfullPongs);
      $(".pingPongs").text(succesfullPPs);
      clearInterval(printing)
    }
  }, (5000 / numbers.length))
});
