(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let x = "am"

            if (h > 11) {
                x = "pm";
            }
            
            if (h < 10) {
                h = "0" + h;
            }
            
            if (h > 12) {
                h = h-12;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }
            
            c.innerHTML = h + ":" + m + ":" + s + x;
            
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    let kontaktivaba = document.getElementById("v2");
    
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        let hind = 0;
        
        if (kontaktivaba.value === "True") {
            
            hind = 500;
        }
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
        } 
        
        if(linn.value === "trt") {
            
            hind = hind + 2.5;
            
        }       
        
        if(linn.value === "tln") {
            
            hind = hind + 0;
            
        }    
        
        if(linn.value === "nrv") {
            
            hind = hind + 2.5;
            
        }    
                
        
        if(linn.value === "prn") {
            
            hind = hind + 3;
            
        }    
        
        e.innerHTML = hind + "&euro;";
        console.log("Tarne hind on arvutatud");
    }
    
    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
    
    "use strict";

    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 10,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });

    map.entities.push(pushpin);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

