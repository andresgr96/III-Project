$("#form").submit(function(event) {
  event.preventDefault();
  $("#output").empty();

  var input = parseInt($("input#numberInput").val());
  var numbers = [];
  pingPongs = 0;
  pings = 0;
  pongs = 0;

  for (i=1; i <= input; i++) {
    if ((i % 15) === 0) {
      numbers.push("<b><i>Ping Pong</i></b>");
      pingPongs++;
      pings++;
      pongs++;
    }
    else if ((i % 3) === 0) {
      numbers.push("<b>ping</b>");
      pings++;
    }
    else if ((i % 5) === 0) {
      numbers.push("<b>pong</b>")
      pongs++;
    }
    else {
      numbers.push(i);
    }
  }
  console.log(numbers);

  var i = 0

  var printing = setInterval(function() {
    $("#bigNumber").text(i)
    $("#output").append(numbers[i] + ", ")
    i++
    if (i >= numbers.length) {
      $("#bigNumber").text(i++)
      $(".pings").text(pings);
      $(".pongs").text(pongs);
      $(".pingPongs").text(pingPongs);
      clearInterval(printing)
    }
  }, (5000 / numbers.length))
console.log(pings)


});
