var APP_DATA = {
  "scenes": [
    {
      "id": "0-eg-straenseite",
      "name": "EG, Straßenseite",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.12772640593352058,
        "pitch": -0.346689673972131,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -0.10777830326919968,
          "pitch": 0.030516530887002347,
          "rotation": 0,
          "target": "1-eg-eingangsbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eg-eingangsbereich",
      "name": "EG, Eingangsbereich",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -2.4195756852781223,
          "pitch": -0.0014077574420134908,
          "rotation": 0,
          "target": "0-eg-straenseite"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-eg-durchgang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-eg-durchgang",
      "name": "EG, Durchgang",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": 1.6054534054890457,
          "pitch": -0.003027875105733102,
          "rotation": 0,
          "target": "3-eg-mllraum"
        },
        {
          "yaw": -3.1177331301860374,
          "pitch": -0.007084085153033826,
          "rotation": 0,
          "target": "1-eg-eingangsbereich"
        },
        {
          "yaw": 0.05639181123730275,
          "pitch": -0.0020129204913352794,
          "rotation": 0,
          "target": "4-eg-zugang-straentrakt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-eg-mllraum",
      "name": "EG, Müllraum",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -1.982345688675629,
          "pitch": -0.008415520406540367,
          "rotation": 0,
          "target": "2-eg-durchgang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-eg-zugang-straentrakt",
      "name": "EG, Zugang Straßentrakt",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07638744669266906,
        "pitch": 0.007569687764332755,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": 3.0506668714420346,
          "pitch": 0.022920327677899976,
          "rotation": 0,
          "target": "2-eg-durchgang"
        },
        {
          "yaw": -0.03606579013299438,
          "pitch": 0.0719381413003859,
          "rotation": 0,
          "target": "5-eg-hof-spielbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-eg-hof-spielbereich",
      "name": "EG, Hof, Spielbereich",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.021072399087646687,
        "pitch": -0.010597562870065858,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -0.0030997764340554568,
          "pitch": 0.05983258996953289,
          "rotation": 0,
          "target": "6-eg-hof"
        },
        {
          "yaw": 3.096261839110584,
          "pitch": 0.038574898241478195,
          "rotation": 0,
          "target": "4-eg-zugang-straentrakt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-eg-hof",
      "name": "EG, Hof",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1256155527811487,
          "pitch": 0.05170539593204637,
          "rotation": 0,
          "target": "5-eg-hof-spielbereich"
        },
        {
          "yaw": 2.28216095793754,
          "pitch": -0.022938617062504107,
          "rotation": 0,
          "target": "7-h01-eg-vr"
        },
        {
          "yaw": 1.9539455116837683,
          "pitch": -0.025734894767394323,
          "rotation": 0,
          "target": "18-h02-eg-vr"
        },
        {
          "yaw": 0.7758764198855701,
          "pitch": -0.031732344995173634,
          "rotation": 0,
          "target": "30-h03-eg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-h01-eg-vr",
      "name": "H01, EG, VR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -1.5022060111455993,
          "pitch": 0.04461850686379876,
          "rotation": 0,
          "target": "6-eg-hof"
        },
        {
          "yaw": 3.1392952459487002,
          "pitch": 0.051520208497002784,
          "rotation": 0,
          "target": "8-h01-eg-atelier"
        },
        {
          "yaw": 1.551349156611555,
          "pitch": -0.03179268861019757,
          "rotation": 0,
          "target": "10-h01-eg-aufgang-ins-og"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-h01-eg-atelier",
      "name": "H01, EG, Atelier",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03627441021771638,
          "pitch": 0,
          "rotation": 0,
          "target": "7-h01-eg-vr"
        },
        {
          "yaw": 2.305784416642986,
          "pitch": 0.019956650632423134,
          "rotation": 0,
          "target": "9-h01-eg-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-h01-eg-bad",
      "name": "H01, EG, Bad",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.023706448973589644,
        "pitch": -0.06055780747099959,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -1.686145555919822,
          "pitch": 0.07115475962839213,
          "rotation": 0,
          "target": "8-h01-eg-atelier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-h01-eg-aufgang-ins-og",
      "name": "H01, EG, Aufgang ins OG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.515966232414165,
          "pitch": 0.06322133935826812,
          "rotation": 0,
          "target": "7-h01-eg-vr"
        },
        {
          "yaw": 3.113804478028209,
          "pitch": -0.5929702490508078,
          "rotation": 0,
          "target": "11-h01-og-abgang-ins-eg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-h01-og-abgang-ins-eg",
      "name": "H01, OG, Abgang ins EG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.044325896026967015,
          "pitch": 0.5682368001650335,
          "rotation": 0,
          "target": "10-h01-eg-aufgang-ins-og"
        },
        {
          "yaw": -1.4176874185791526,
          "pitch": 0.09551569651722502,
          "rotation": 0,
          "target": "12-h01-og-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-h01-og-wz",
      "name": "H01, OG, WZ",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.18833456684571104,
        "pitch": 0.01968118818726694,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": 0.7666907819402411,
          "pitch": -0.007557672025940931,
          "rotation": 0,
          "target": "13-h01-og-aufgang-ins-dg"
        },
        {
          "yaw": 2.550662650872562,
          "pitch": -0.013838041805630752,
          "rotation": 0,
          "target": "11-h01-og-abgang-ins-eg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-h01-og-aufgang-ins-dg",
      "name": "H01, OG, Aufgang ins DG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.114632392874398,
          "pitch": 0.0650993147732617,
          "rotation": 0,
          "target": "12-h01-og-wz"
        },
        {
          "yaw": 3.08738315339403,
          "pitch": -0.5655209008129489,
          "rotation": 0,
          "target": "14-h01-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-h01-dg-vr",
      "name": "H01, DG, VR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.01053619954381979,
        "pitch": -0.04087631392739688,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": 0.01053619954381979,
          "pitch": -0.04087631392739688,
          "rotation": 0,
          "target": "15-h01-dg-sz"
        },
        {
          "yaw": 1.5916409351669936,
          "pitch": 0.37137213613784326,
          "rotation": 0,
          "target": "13-h01-og-aufgang-ins-dg"
        },
        {
          "yaw": -1.5983005117441174,
          "pitch": 0.05172744971867793,
          "rotation": 0,
          "target": "16-h01-dg-bad"
        },
        {
          "yaw": -3.138066786451013,
          "pitch": 0.01874952200031288,
          "rotation": 0,
          "target": "17-h01-dg-ar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-h01-dg-sz",
      "name": "H01, DG, SZ",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.14618976867045497,
        "pitch": -0.022709063292998266,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": 3.0335636432012247,
          "pitch": 0.06724848253192306,
          "rotation": 0,
          "target": "14-h01-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-h01-dg-bad",
      "name": "H01, DG, Bad",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3551380321432216,
          "pitch": 0.03321393610880641,
          "rotation": 0,
          "target": "14-h01-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-h01-dg-ar",
      "name": "H01, DG, AR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.004032239350500788,
          "pitch": 0.06040974759557116,
          "rotation": 0,
          "target": "14-h01-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-h02-eg-vr",
      "name": "H02, EG, VR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05929342788045311,
          "pitch": -0.023197635067898403,
          "rotation": 0,
          "target": "19-h02-eg-atelier"
        },
        {
          "yaw": -1.5548021234683134,
          "pitch": 0.04131320537207195,
          "rotation": 0,
          "target": "6-eg-hof"
        },
        {
          "yaw": 1.6209844212509736,
          "pitch": -0.0547519022676628,
          "rotation": 0,
          "target": "21-h02-eg-aufgang-ins-og"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-h02-eg-atelier",
      "name": "H02, EG, Atelier",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8233847268449139,
          "pitch": -0.011095219015334834,
          "rotation": 0,
          "target": "20-h02-eg-bad"
        },
        {
          "yaw": 3.108040231221345,
          "pitch": 0.042390251480261654,
          "rotation": 0,
          "target": "18-h02-eg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-h02-eg-bad",
      "name": "H02, EG, Bad",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.007902149657866175,
        "pitch": -0.03027875105733102,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -1.4935978831277943,
          "pitch": 0.048047907566912684,
          "rotation": 0,
          "target": "19-h02-eg-atelier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-h02-eg-aufgang-ins-og",
      "name": "H02, EG, Aufgang ins OG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6086790053922186,
          "pitch": 0.05318699472518951,
          "rotation": 0,
          "target": "18-h02-eg-vr"
        },
        {
          "yaw": 0.07044785393972042,
          "pitch": -0.634526492181589,
          "rotation": 0,
          "target": "22-h02-og-abgang-ins-eg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-h02-og-abgang-ins-eg",
      "name": "H02, OG, Abgang ins EG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1189142564721113,
          "pitch": 0.5690348816943036,
          "rotation": 0,
          "target": "21-h02-eg-aufgang-ins-og"
        },
        {
          "yaw": -1.818811003562212,
          "pitch": 0.049959939244596185,
          "rotation": 0,
          "target": "23-h02-og-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-h02-og-wz",
      "name": "H02, OG, WZ",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5870719329401872,
          "pitch": -0.016783996032092574,
          "rotation": 0,
          "target": "22-h02-og-abgang-ins-eg"
        },
        {
          "yaw": -1.5661305552818447,
          "pitch": 0.029726378230222394,
          "rotation": 0,
          "target": "24-h02-og-balkon"
        },
        {
          "yaw": 2.218662073946475,
          "pitch": -0.02996481008171692,
          "rotation": 0,
          "target": "25-h02-og-aufgang-ins-dg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-h02-og-balkon",
      "name": "H02, OG, Balkon",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.234704124945491,
          "pitch": 0.008668029088259033,
          "rotation": 0,
          "target": "23-h02-og-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-h02-og-aufgang-ins-dg",
      "name": "H02, OG, Aufgang ins DG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9825262577258833,
          "pitch": 0.039199255547297085,
          "rotation": 0,
          "target": "23-h02-og-wz"
        },
        {
          "yaw": -0.01284184925824583,
          "pitch": -0.5150330555233822,
          "rotation": 0,
          "target": "26-h02-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-h02-dg-vr",
      "name": "H02, DG, VR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0052680997719054545,
        "pitch": -0.05147511852879205,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": 0.11131593251556637,
          "pitch": -0.055131340915691496,
          "rotation": 0,
          "target": "27-h02-dg-ar"
        },
        {
          "yaw": -1.496731530815218,
          "pitch": 0.025896198935736692,
          "rotation": 0,
          "target": "28-h02-dg-bad"
        },
        {
          "yaw": -3.126787584929458,
          "pitch": 0.0997422376674777,
          "rotation": 0,
          "target": "29-h02-dg-sz"
        },
        {
          "yaw": 1.6089217563199094,
          "pitch": 0.3127085793193256,
          "rotation": 0,
          "target": "25-h02-og-aufgang-ins-dg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-h02-dg-ar",
      "name": "H02, DG, AR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.007902149657864399,
        "pitch": -0.03179268861019757,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": 2.9288689215909205,
          "pitch": 0.08168171026781934,
          "rotation": 0,
          "target": "26-h02-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-h02-dg-bad",
      "name": "H02, DG, Bad",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.680450277770376,
          "pitch": 0.058491054414162136,
          "rotation": 0,
          "target": "26-h02-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-h02-dg-sz",
      "name": "H02, DG, SZ",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "26-h02-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-h03-eg-vr",
      "name": "H03, EG, VR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.12511736958281539,
        "pitch": 0.019681188187265164,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -1.4336350433336378,
          "pitch": 0.05458316429792376,
          "rotation": 0,
          "target": "6-eg-hof"
        },
        {
          "yaw": 0.12511736958281539,
          "pitch": 0.019681188187265164,
          "rotation": 0,
          "target": "31-h03-eg-atelier"
        },
        {
          "yaw": 1.705104782001257,
          "pitch": -0.024927144816574653,
          "rotation": 0,
          "target": "33-h03-eg-aufgang-ins-og"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-h03-eg-atelier",
      "name": "H03, EG, Atelier",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.020257186388629833,
        "pitch": -0.005254013822966641,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -3.0487593535468758,
          "pitch": 0.044248377732156285,
          "rotation": 0,
          "target": "30-h03-eg-vr"
        },
        {
          "yaw": 0.8971552302749117,
          "pitch": -0.03072588332045889,
          "rotation": 0,
          "target": "32-h03-eg-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-h03-eg-bad",
      "name": "H03, EG, Bad",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.17508283851352147,
        "pitch": -0.02876481350446447,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -1.764161914685248,
          "pitch": 0.010154185942170102,
          "rotation": 0,
          "target": "31-h03-eg-atelier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-h03-eg-aufgang-ins-og",
      "name": "H03, EG, Aufgang ins OG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.686526433893399
      },
      "linkHotspots": [
        {
          "yaw": -1.6552728409132786,
          "pitch": 0.05712131420948552,
          "rotation": 0,
          "target": "30-h03-eg-vr"
        },
        {
          "yaw": 0.03627446230318476,
          "pitch": -0.6367029887606357,
          "rotation": 0,
          "target": "34-h03-og-abgang-ins-eg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-h03-og-abgang-ins-eg",
      "name": "H03, OG, Abgang ins EG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1232680018789196,
          "pitch": 0.5796677165297233,
          "rotation": 0,
          "target": "33-h03-eg-aufgang-ins-og"
        },
        {
          "yaw": -1.7352631369989489,
          "pitch": -0.008565073946405377,
          "rotation": 0,
          "target": "35-h03-og-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-h03-og-wz",
      "name": "H03, OG, WZ",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.49067858673407727,
          "pitch": -0.04139350710655165,
          "rotation": 0,
          "target": "34-h03-og-abgang-ins-eg"
        },
        {
          "yaw": -1.5788119293859975,
          "pitch": 0.012570231309638302,
          "rotation": 0,
          "target": "36-h03-og-balkon"
        },
        {
          "yaw": 2.29101925369177,
          "pitch": -0.022796717724059334,
          "rotation": 0,
          "target": "37-h03-og-aufgang-ins-dg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-h03-og-balkon",
      "name": "H03, OG, Balkon",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6253160540113072,
          "pitch": 0.012109043267077624,
          "rotation": 0,
          "target": "35-h03-og-wz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-h03-og-aufgang-ins-dg",
      "name": "H03, OG, Aufgang ins DG",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.227086655806204,
          "pitch": 0.012082048717413585,
          "rotation": 0,
          "target": "35-h03-og-wz"
        },
        {
          "yaw": 0.06643464159035162,
          "pitch": -0.6450145589069081,
          "rotation": 0,
          "target": "38-h03-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-h03-dg-vr",
      "name": "H03, DG, VR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5699527502169834,
          "pitch": 0.2500095786428922,
          "rotation": 0,
          "target": "37-h03-og-aufgang-ins-dg"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "39-h03-dg-ar"
        },
        {
          "yaw": -1.5452358962388324,
          "pitch": 0.038202556694017176,
          "rotation": 0,
          "target": "40-h03-dg-bad"
        },
        {
          "yaw": -3.113137104361888,
          "pitch": 0.06622897990054355,
          "rotation": 0,
          "target": "41-h03-dg-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-h03-dg-ar",
      "name": "H03, DG, AR",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.928546573069281,
          "pitch": -0.005023389579660531,
          "rotation": 0,
          "target": "38-h03-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-h03-dg-bad",
      "name": "H03, DG, Bad",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6116161455789069,
          "pitch": 0.01513937552866551,
          "rotation": 0,
          "target": "38-h03-dg-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-h03-dg-sz",
      "name": "H03, DG, SZ",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0002071983073648198,
          "pitch": -0.005036684195705021,
          "rotation": 0,
          "target": "38-h03-dg-vr"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mill34_Hofhäuser_231222-27",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
