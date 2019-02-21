function onHairdresserSelect() {
  var hairdresser = document.getElementById("heardresser-a");
  var client = document.getElementById("client-a");
  var containerForHairdressers = document.getElementById("hairdresserContentId");
  var containerForClients = document.getElementById("clientContentId");
  if (!hairdresser.classList.contains("active")) {
    hairdresser.classList.add("active");
    client.classList.remove("active");
  }
  switchBlocks(containerForHairdressers, containerForClients);

}
function switchBlocks(cont1, cont2) {
  cont1.classList.remove("display-none");
  cont1.classList.add("display-block");
  cont2.classList.remove("display-block");
  cont2.classList.add("display-none");
}
function onClientSelect() {
  var containerForHairdressers = document.getElementById("hairdresserContentId");
   document.getElementById("includedContent").classList.add("display-none")
  var containerForClients = document.getElementById("clientContentId");
  var client = document.getElementById("client-a");
  var hairdresser = document.getElementById("heardresser-a");
  switchBlocks(containerForClients, containerForHairdressers);
  client.classList.add("active");
  hairdresser.classList.remove("active");
}
function openDropdown() {
  var container = document.getElementById("reservationDropdown");
  container.classList.toggle("display-none");
}
function openDropdown2() {
  var container = document.getElementById("makeApointment");
  container.classList.toggle("display-none");
}
function openFilter() {
  document.getElementById("removeResevationId").classList.add("display-none");
  document.getElementById("includedContent").classList.remove("display-none");
  document.getElementById("registarionId").classList.add("display-none");
  document.getElementById("reservationsId").classList.add("display-none");
  document.getElementById("filterId").classList.remove("display-none");
  reservationList = JSON.parse(localStorage.reservationList);
  document.getElementById("myfilter").innerHTML="";
  for (var i = 0; i < reservationList.length; i++) {
    var node = document.createElement("a");
    var textnode = document.createTextNode(reservationList[i].name + " " + reservationList[i].surname+ ", vizito laikas:  " + reservationList[i].time+ ", vizito datas:  " + reservationList[i].date);
    node.appendChild(textnode);
    document.getElementById("myfilter").appendChild(node);
    node.addEventListener( 'click', function(){
       var serchThisElem=$(this).text();
       alert(serchThisElem);

    });

  }


}
window.addEventListener('click', function(e) {
  if (!document.getElementById('reservationListItem').contains(e.target))
    document.getElementById("reservationDropdown").classList.add("display-none");
  if (!document.getElementById('reservation').contains(e.target))
    document.getElementById("makeApointment").classList.add("display-none");
});
document.getElementById("createReservationBtn").addEventListener("click", function() {
  document.getElementById("includedContent").classList.remove("display-none");
  document.getElementById("registarionId").classList.remove("display-none");
  document.getElementById("listOfResevations").classList.add("display-none");
  document.getElementById("serchInData").classList.add("display-none");
  document.getElementById("filterId").classList.add("display-none");
  document.getElementById("removeResevationId").classList.add("display-none");



});
document.getElementById("removeReservationBtn").addEventListener("click", function createList(){
  document.getElementById("serchInData").classList.add("display-none");
  document.getElementById("filterId").classList.add("display-none");
  document.getElementById("listOfResevations").classList.add("display-none");
  document.getElementById("registarionId").classList.add("display-none");
  document.getElementById("includedContent").classList.remove("display-none");
  document.getElementById("removeResevationId").classList.remove("display-none");
  var reservationList = JSON.parse(localStorage.reservationList);
  document.getElementById("allReservations").innerHTML="";

  for (var i = 0; i < reservationList.length; i++) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(reservationList[i].name + " " + reservationList[i].surname+ ", vizito laikas:  " + reservationList[i].time+ ", vizito datas:  " + reservationList[i].date);
    node.appendChild(textnode);
    document.getElementById("allReservations").appendChild(node);
    node.addEventListener( 'click', function(){
       var serchThisElem=$(this).text();
       var res = serchThisElem.split(" ", 2);
       for (var i = 0; i < reservationList.length; i++) {
         if (reservationList[i].name.toString()===res[0]){
          reservationList.splice(i, 1);
          localStorage.setItem('reservationList', JSON.stringify(reservationList));
          createList();
      }
       }
    });

  }
});
document.getElementById("todayBtn").addEventListener("click", function() {
  document.getElementById("removeResevationId").classList.add("display-none");
  document.getElementById("includedContent").classList.remove("display-none");
  var ul = document.getElementById("listOfResevations");
  document.getElementById("filterId").classList.add("display-none");
  document.getElementById("listOfResevations").classList.remove("display-none");
  document.getElementById("reservationsId").classList.remove("display-none");
  document.getElementById("registarionId").classList.add("display-none");
  document.getElementById("serchInData").classList.add("display-none");
  ul.innerHTML = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  var reservationList = JSON.parse(localStorage.reservationList);
  var todayReservations = [];
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = mm + '/' + dd + '/' + yyyy;
  for (var i = 0; i < reservationList.length; i++) {
    if (reservationList[i].date === today) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(reservationList[i].name + " " + reservationList[i].surname + " " + reservationList[i].time + " ");
      node.appendChild(textnode);
      document.getElementById("listOfResevations").appendChild(node);
    }
  }
});
document.getElementById("tomorrowBtn").addEventListener("click", function() {
  document.getElementById("removeResevationId").classList.add("display-none");
  document.getElementById("filterId").classList.add("display-none");
  document.getElementById("serchInData").classList.add("display-none");
  document.getElementById("registarionId").classList.add("display-none");
  document.getElementById("includedContent").classList.remove("display-none");
  var ul = document.getElementById("listOfResevations");
  ul.classList.remove("display-none");
  document.getElementById("reservationsId").classList.remove("display-none");
  ul.innerHTML = "";
  var tomorrow = new Date();
  var dd = tomorrow.getDate() + 1;
  var mm = tomorrow.getMonth() + 1; //January is 0!
  var yyyy = tomorrow.getFullYear();
  var reservationList = JSON.parse(localStorage.reservationList);
  var tomorrowReservations = [];
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  tomorrow = mm + '/' + dd + '/' + yyyy;
  for (var i = 0; i < reservationList.length; i++) {
    if (reservationList[i].date === tomorrow) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(reservationList[i].name + " " + reservationList[i].surname + " " + reservationList[i].time + " ");
      node.appendChild(textnode);
      document.getElementById("listOfResevations").appendChild(node);
    }
  }
});
document.getElementById("selectDataBtn").addEventListener("click", function() {
  document.getElementById("filterId").classList.add("display-none");
  document.getElementById("removeResevationId").classList.add("display-none");
  document.getElementById("registarionId").classList.add("display-none");
  document.getElementById("includedContent").classList.remove("display-none");
  document.getElementById("reservationsId").classList.remove("display-none");
  document.getElementById("serchInData").classList.remove("display-none");
  document.getElementById("listOfResevations").classList.remove("display-none");
  var ul = document.getElementById("listOfResevations");
  ul.innerHTML = ""
});
function toggleDropdown() {
  document.getElementById("myfilter").classList.toggle("display-none");
}
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  var div = document.getElementById("myfilter");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function showFreeTimes() {
document.getElementById("freeTimesId").classList.remove("display-none");
};
