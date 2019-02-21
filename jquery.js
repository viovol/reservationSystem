$(document).ready(function() {
  var reservation = localStorage.getItem("reservationList");
  var selectedTimes = [];
  if (reservation) {
    var reservationList = JSON.parse(reservation);
  }
  var reservation = [];
  $(function() {
    $("#datepicker").datepicker({
      onSelect: function(dateText) {
        $("#timepicker").prop("disabled", false);
        for (var i = 0; i < reservationList.length; i++) {
          selectedTimes.push(reservationList[i].time);
        }
      }
    });
  });
  $(function() {
    $("#datepicker").datepicker({
      onSelect: function(dateText) {
        $("#timepicker").prop("disabled", false);
        for (var i = 0; i < reservationList.length; i++) {
          selectedTimes.push(reservationList[i].time);
        }
      }
    });
  });
  $(function() {
    $("#selectData").datepicker();
  });
  $(function() {
    $("#selectDataClient").datepicker();
  });

  $('.timepicker').timepicker({
    timeFormat: 'H:mm ',
    interval: 15,
    minTime: '9',
    maxTime: '20:00',
    startTime: '9:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
  $("#timepicker").prop("disabled", true);

  $('#serchDateId').click(function() {
    $('#listOfResevations').empty();
    var reservationList = JSON.parse(localStorage.reservationList);
    var fdate = $('#selectData').val();
    for (var i = 0; i < reservationList.length; i++) {
      if (reservationList[i].date === fdate) {
        $("#listOfResevations").prepend("<li>" + reservationList[i].date + " " + reservationList[i].name + " " + reservationList[i].surname + " " + reservationList[i].time + "</li>");
      }
    }

  });
  function validateForm(name, surname, data, time) {
    if (name == "") {
      alert("Uzpildikite vardo lauka");
      return false;
    }
    else if (fname == "") {
      alert("Uzpildikite pavardes lauka");
      return false;
    }
    else if (data == "") {
      alert("Uzpildikite datos lauka");
      return false;
    }
    else if(time == ""){
      alert("Uzpildikite laiko lauka");
      return false;    }
  }
  $('#registerClient').click(function() {
    if (typeof(Storage) !== "undefined") {
      var fname = $('#clientName').val();
      var fsurname = $('#clientSurname').val();
      var fdate = $('#datepicker').val();
      var ftime = $('#timepicker').val();
      var person = {
        name: fname,
        surname: fsurname,
        date: fdate,
        time: ftime,
      };

      //reservationList = JSON.parse(localStorage.reservationList);
      reservation.push(person);
      localStorage.setItem('reservationList', JSON.stringify(reservation));
      console.log(window.localStorage.reservationList);
      $('#includedContent').addClass("display-none");
      $('#registarionId').addClass("display-none");
    } else {
      alert("Sorry! No Web Storage support..");
    }




  })
  $('#registerButton').click(function() {
    if (typeof(Storage) !== "undefined") {
      var fname = $('#myName').val();
      var fsurname = $('#mySurname').val();
      var fdate = $('#selectDataClient').val();
      var ftime = $('#timepicker2').val();
      var person = {
        name: fname,
        surname: fsurname,
        date: fdate,
        time: ftime,
      };

      reservation.push(person);
      localStorage.setItem('reservationList', JSON.stringify(reservation));
      console.log(window.localStorage.reservationList);
      $('#myName').val("");
      $('#mySurname').val("");
      $('#selectDataClient').val("");
      $('#timepicker2').val("");
    }
     else {
      alert("Sorry! No Web Storage support..");
    }
  })
});
