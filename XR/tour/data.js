var APP_DATA = {
  "scenes": [
    {
      "id": "0-fcd",
      "name": "fcd",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1026882806726146,
        "pitch": -0.8944946671523866,
        "fov": 1.454616511185255
      },
      "linkHotspots": [
        {
          "yaw": 3.0039605410605805,
          "pitch": 0.32726077536445075,
          "rotation": 0,
          "target": "0-fcd"
        },
        {
          "yaw": 1.3173315409986763,
          "pitch": -0.24701094728186135,
          "rotation": 7.0685834705770345,
          "target": "0-fcd"
        },
        {
          "yaw": -0.7927157820529214,
          "pitch": 0.08703142271220976,
          "rotation": 0.7853981633974483,
          "target": "1-master"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.35295029497164343,
          "pitch": -0.23326282791979835,
          "title": "La Facultad",
          "text": "Lorem Ipsum dolor sit amen"
        }
      ]
    },
    {
      "id": "1-master",
      "name": "master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.35250506912271007,
          "pitch": 1.3733748225784552,
          "rotation": 0.7853981633974483,
          "target": "0-fcd"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
