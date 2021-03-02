require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
    var camera = new Camera ({
       position: [
           -71.0392173, // lon
          42.3750973,  // lat
          5000// elevation in meters
        ],
        tilt:45,
        heading: 90 
      })
      
    var camera2 = new Camera ({
       position: [
          -71.067421,
          42.364758,
          25000// elevation in meters
        ],
        tilt:30,
        heading: 270
      });  

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:"global",
        camera: camera,
        environment: { 
             lighting: {
               date: new Date(),
               directchadowsEnabled:
     true,
               cameraTrackingEnabled:
     false
             }
        },
      });
     var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");

  [East, West].forEach(function(button) 
{
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
   West.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    East.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });


    });
