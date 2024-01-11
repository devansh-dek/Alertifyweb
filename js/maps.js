function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: { lat: 23.3168855, lng: 85.3758839 },
    });
    const markerImage = "../images/ambulance (1).png";

    const beachMarker = new google.maps.Marker({
      position: { lat: 23.3168855, lng: 85.3758839 },
      map,
      icon: {
        url: markerImage,
        scaledSize: new google.maps.Size(40, 40) // Adjust the size as needed
      },
      title: 'Custom Marker'
    });
  }
  
  window.initMap = initMap;

  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px";
    } else {
      sidebar.style.left = "0px";
    }
  }

  var i=1;
  document.querySelector("#home").addEventListener("click",() => {
    if(i==1){
        document.querySelector("#home").classList.add("show");
        document.querySelector("#home .side-list").classList.add("show");
        document.querySelector("#fleet").classList.add("move");
        document.querySelector("#about").classList.add("move");
        document.querySelector(".line").classList.add("move");
        i*=-1;
    }
    else{
        document.querySelector("#home").classList.remove("show");
        i*=-1;
    }
  });

  var j=1;
  document.querySelector("#fleet").addEventListener("click",() => {
    if(j==1){
        document.querySelector("#fleet").classList.add("show");
        j*=-1;
    }
    else{
        document.querySelector("#fleet").classList.remove("show");
        j*=-1;
    }
  });

  var k=1;
  document.querySelector("#about").addEventListener("click",() => {
    if(k==1){
        document.querySelector("#about").classList.add("show");
        k*=-1;
    }
    else{
        document.querySelector("#about").classList.remove("show");
        k*=-1;
    }
  });