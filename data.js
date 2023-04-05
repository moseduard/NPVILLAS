var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-area",
      "name": "Living Area",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.018693186193155853,
          "pitch": 0.08722705933578823,
          "rotation": 0,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-area",
      "name": "Dining Area",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.040825400848058635,
        "pitch": 0.10354433246794059,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.1199273334520683,
          "pitch": 0.11528570574076724,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": -0.02944743254474247,
          "pitch": 0.09335920710304002,
          "rotation": 0,
          "target": "2-kitchen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-area",
      "name": "Kitchen Area",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1167946547158003,
          "pitch": 0.026072993954517898,
          "rotation": 0,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
