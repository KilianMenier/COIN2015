// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
    
    /* ---------------------------------- Local Variables ---------------------------------- */
    
    
    
    
    
    
    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message, // message
                    null, // callback
                    "Workshop", // title
                    'OK' // buttonName
                );
            };
        }
        
        FastClick.attach(document.body);
        
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        
    }, false);
    
    
    
    
    /* ---------------------------------- Local Functions ---------------------------------- */

    this.changePicture = function(event) {
        event.preventDefault();
        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
            return;
        }
        var options =   {   quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
            encodingType: 0     // 0=JPG 1=PNG
        };
    
        navigator.camera.getPicture(
         function(imgData) {
                $('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
          },
          function() {
                alert('Error taking picture', 'Error');
            },
            options);
    
        return false;
    };






}()); // END OF MEGA DEFINE




