
/* ---------------------------------- Local Variables ---------------------------------- */
    
    //alert('Librairie chargée !')    
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

    
    
/* --------------------------------- Event Registration -------------------------------- */
// Native notifications
document.addEventListener('deviceready', function () {
    if (navigator.notification) { // Override default HTML alert with native dialog
        window.alert = function (message) {
            navigator.notification.alert(
                message, // message
                null, // callback
                "Planning COIN 2015", // title
                'Okay !' // buttonName
            );
        };
    }
        
    }, false); // End deviceready



// Disable back button because it's buggy
function onBackKeyDown(e) {e.preventDefault();}
document.addEventListener("backbutton", onBackKeyDown, false);






/* ---------------------------------- Functions ---------------------------------- */
