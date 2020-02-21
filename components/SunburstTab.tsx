// @ts-ignore
import { Sunburst } from '@nivo/sunburst'
// const Sunburst = require('@nivo/sunburst')
import { AutoSizer } from 'react-virtualized'

const mock_data = {
  "name": "nivo",
  "color": "hsl(215, 70%, 50%)",
  "children": [
    {
      "name": "viz",
      "color": "hsl(230, 70%, 50%)",
      "children": [
        {
          "name": "stack",
          "color": "hsl(30, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(206, 70%, 50%)",
              "loc": 109605
            },
            {
              "name": "xAxis",
              "color": "hsl(279, 70%, 50%)",
              "loc": 195532
            },
            {
              "name": "yAxis",
              "color": "hsl(37, 70%, 50%)",
              "loc": 31266
            },
            {
              "name": "layers",
              "color": "hsl(50, 70%, 50%)",
              "loc": 105405
            }
          ]
        },
        {
          "name": "pie",
          "color": "hsl(154, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(332, 70%, 50%)",
              "children": [
                {
                  "name": "pie",
                  "color": "hsl(285, 70%, 50%)",
                  "children": [
                    {
                      "name": "outline",
                      "color": "hsl(19, 70%, 50%)",
                      "loc": 106066
                    },
                    {
                      "name": "slices",
                      "color": "hsl(334, 70%, 50%)",
                      "loc": 78436
                    },
                    {
                      "name": "bbox",
                      "color": "hsl(343, 70%, 50%)",
                      "loc": 28822
                    }
                  ]
                },
                {
                  "name": "donut",
                  "color": "hsl(327, 70%, 50%)",
                  "loc": 85284
                },
                {
                  "name": "gauge",
                  "color": "hsl(62, 70%, 50%)",
                  "loc": 65864
                }
              ]
            },
            {
              "name": "legends",
              "color": "hsl(121, 70%, 50%)",
              "loc": 177781
            }
          ]
        }
      ]
    },
    {
      "name": "colors",
      "color": "hsl(186, 70%, 50%)",
      "children": [
        {
          "name": "rgb",
          "color": "hsl(19, 70%, 50%)",
          "loc": 35400
        },
        {
          "name": "hsl",
          "color": "hsl(316, 70%, 50%)",
          "loc": 100458
        }
      ]
    },
    {
      "name": "utils",
      "color": "hsl(278, 70%, 50%)",
      "children": [
        {
          "name": "randomize",
          "color": "hsl(230, 70%, 50%)",
          "loc": 148261
        },
        {
          "name": "resetClock",
          "color": "hsl(43, 70%, 50%)",
          "loc": 55996
        },
        {
          "name": "noop",
          "color": "hsl(188, 70%, 50%)",
          "loc": 194244
        },
        {
          "name": "tick",
          "color": "hsl(41, 70%, 50%)",
          "loc": 83
        },
        {
          "name": "forceGC",
          "color": "hsl(33, 70%, 50%)",
          "loc": 67541
        },
        {
          "name": "stackTrace",
          "color": "hsl(203, 70%, 50%)",
          "loc": 196833
        },
        {
          "name": "dbg",
          "color": "hsl(14, 70%, 50%)",
          "loc": 199555
        }
      ]
    },
    {
      "name": "generators",
      "color": "hsl(319, 70%, 50%)",
      "children": [
        {
          "name": "address",
          "color": "hsl(61, 70%, 50%)",
          "loc": 158651
        },
        {
          "name": "city",
          "color": "hsl(255, 70%, 50%)",
          "loc": 95738
        },
        {
          "name": "animal",
          "color": "hsl(74, 70%, 50%)",
          "loc": 69955
        },
        {
          "name": "movie",
          "color": "hsl(16, 70%, 50%)",
          "loc": 57702
        },
        {
          "name": "user",
          "color": "hsl(79, 70%, 50%)",
          "loc": 148336
        }
      ]
    },
    {
      "name": "set",
      "color": "hsl(212, 70%, 50%)",
      "children": [
        {
          "name": "clone",
          "color": "hsl(318, 70%, 50%)",
          "loc": 55991
        },
        {
          "name": "intersect",
          "color": "hsl(144, 70%, 50%)",
          "loc": 194275
        },
        {
          "name": "merge",
          "color": "hsl(1, 70%, 50%)",
          "loc": 194953
        },
        {
          "name": "reverse",
          "color": "hsl(106, 70%, 50%)",
          "loc": 192139
        },
        {
          "name": "toArray",
          "color": "hsl(266, 70%, 50%)",
          "loc": 50883
        },
        {
          "name": "toObject",
          "color": "hsl(292, 70%, 50%)",
          "loc": 5597
        },
        {
          "name": "fromCSV",
          "color": "hsl(49, 70%, 50%)",
          "loc": 66763
        },
        {
          "name": "slice",
          "color": "hsl(332, 70%, 50%)",
          "loc": 188118
        },
        {
          "name": "append",
          "color": "hsl(172, 70%, 50%)",
          "loc": 85648
        },
        {
          "name": "prepend",
          "color": "hsl(28, 70%, 50%)",
          "loc": 91905
        },
        {
          "name": "shuffle",
          "color": "hsl(45, 70%, 50%)",
          "loc": 58662
        },
        {
          "name": "pick",
          "color": "hsl(352, 70%, 50%)",
          "loc": 190832
        },
        {
          "name": "plouc",
          "color": "hsl(216, 70%, 50%)",
          "loc": 140825
        }
      ]
    },
    {
      "name": "text",
      "color": "hsl(275, 70%, 50%)",
      "children": [
        {
          "name": "trim",
          "color": "hsl(283, 70%, 50%)",
          "loc": 89866
        },
        {
          "name": "slugify",
          "color": "hsl(259, 70%, 50%)",
          "loc": 163578
        },
        {
          "name": "snakeCase",
          "color": "hsl(76, 70%, 50%)",
          "loc": 1488
        },
        {
          "name": "camelCase",
          "color": "hsl(222, 70%, 50%)",
          "loc": 116920
        },
        {
          "name": "repeat",
          "color": "hsl(116, 70%, 50%)",
          "loc": 51199
        },
        {
          "name": "padLeft",
          "color": "hsl(41, 70%, 50%)",
          "loc": 166571
        },
        {
          "name": "padRight",
          "color": "hsl(295, 70%, 50%)",
          "loc": 101220
        },
        {
          "name": "sanitize",
          "color": "hsl(293, 70%, 50%)",
          "loc": 172867
        },
        {
          "name": "ploucify",
          "color": "hsl(71, 70%, 50%)",
          "loc": 129001
        }
      ]
    },
    {
      "name": "misc",
      "color": "hsl(162, 70%, 50%)",
      "children": [
        {
          "name": "whatever",
          "color": "hsl(189, 70%, 50%)",
          "children": [
            {
              "name": "hey",
              "color": "hsl(265, 70%, 50%)",
              "loc": 177018
            },
            {
              "name": "WTF",
              "color": "hsl(237, 70%, 50%)",
              "loc": 149733
            },
            {
              "name": "lol",
              "color": "hsl(26, 70%, 50%)",
              "loc": 166389
            },
            {
              "name": "IMHO",
              "color": "hsl(42, 70%, 50%)",
              "loc": 166253
            }
          ]
        },
        {
          "name": "other",
          "color": "hsl(107, 70%, 50%)",
          "loc": 57314
        },
        {
          "name": "crap",
          "color": "hsl(109, 70%, 50%)",
          "children": [
            {
              "name": "crapA",
              "color": "hsl(247, 70%, 50%)",
              "loc": 53408
            },
            {
              "name": "crapB",
              "color": "hsl(13, 70%, 50%)",
              "children": [
                {
                  "name": "crapB1",
                  "color": "hsl(205, 70%, 50%)",
                  "loc": 104999
                },
                {
                  "name": "crapB2",
                  "color": "hsl(161, 70%, 50%)",
                  "loc": 3789
                },
                {
                  "name": "crapB3",
                  "color": "hsl(20, 70%, 50%)",
                  "loc": 176820
                },
                {
                  "name": "crapB4",
                  "color": "hsl(250, 70%, 50%)",
                  "loc": 148622
                }
              ]
            },
            {
              "name": "crapC",
              "color": "hsl(203, 70%, 50%)",
              "children": [
                {
                  "name": "crapC1",
                  "color": "hsl(21, 70%, 50%)",
                  "loc": 85133
                },
                {
                  "name": "crapC2",
                  "color": "hsl(97, 70%, 50%)",
                  "loc": 72867
                },
                {
                  "name": "crapC3",
                  "color": "hsl(339, 70%, 50%)",
                  "loc": 68682
                },
                {
                  "name": "crapC4",
                  "color": "hsl(99, 70%, 50%)",
                  "loc": 167326
                },
                {
                  "name": "crapC5",
                  "color": "hsl(72, 70%, 50%)",
                  "loc": 96524
                },
                {
                  "name": "crapC6",
                  "color": "hsl(319, 70%, 50%)",
                  "loc": 82846
                },
                {
                  "name": "crapC7",
                  "color": "hsl(113, 70%, 50%)",
                  "loc": 192582
                },
                {
                  "name": "crapC8",
                  "color": "hsl(90, 70%, 50%)",
                  "loc": 80457
                },
                {
                  "name": "crapC9",
                  "color": "hsl(29, 70%, 50%)",
                  "loc": 137177
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const SunburstTab = () => (
  <AutoSizer style={{height: '80vh'}}>
    {({ height, width }) => (
      <Sunburst
        data={mock_data}
        height={height}
        width={width}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="loc"
        cornerRadius={2}
        borderWidth={1}
        borderColor="white"
        colors={{ scheme: 'set3' }}
        childColor={{ from: 'color' }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
      />
    )}
  </AutoSizer>
)

export default SunburstTab