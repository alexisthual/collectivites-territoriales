import { Bar } from '@nivo/bar'
import { Pie } from '@nivo/pie'
import { AutoSizer } from 'react-virtualized'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const pie_mock_data = [
  {
    "id": "php",
    "label": "php",
    "value": 300,
    "color": "hsl(343, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 454,
    "color": "hsl(187, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 141,
    "color": "hsl(234, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 425,
    "color": "hsl(225, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 429,
    "color": "hsl(131, 70%, 50%)"
  }
]

const bar_mock_data = [
  {
    "country": "AD",
    "hot dog": 196,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "burger": 9,
    "burgerColor": "hsl(133, 70%, 50%)",
    "sandwich": 98,
    "sandwichColor": "hsl(64, 70%, 50%)",
    "kebab": 3,
    "kebabColor": "hsl(254, 70%, 50%)",
    "fries": 74,
    "friesColor": "hsl(239, 70%, 50%)",
    "donut": 95,
    "donutColor": "hsl(280, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 156,
    "hot dogColor": "hsl(119, 70%, 50%)",
    "burger": 72,
    "burgerColor": "hsl(163, 70%, 50%)",
    "sandwich": 31,
    "sandwichColor": "hsl(14, 70%, 50%)",
    "kebab": 148,
    "kebabColor": "hsl(111, 70%, 50%)",
    "fries": 29,
    "friesColor": "hsl(288, 70%, 50%)",
    "donut": 71,
    "donutColor": "hsl(274, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 195,
    "hot dogColor": "hsl(63, 70%, 50%)",
    "burger": 159,
    "burgerColor": "hsl(183, 70%, 50%)",
    "sandwich": 135,
    "sandwichColor": "hsl(200, 70%, 50%)",
    "kebab": 48,
    "kebabColor": "hsl(284, 70%, 50%)",
    "fries": 156,
    "friesColor": "hsl(124, 70%, 50%)",
    "donut": 88,
    "donutColor": "hsl(4, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 33,
    "hot dogColor": "hsl(277, 70%, 50%)",
    "burger": 128,
    "burgerColor": "hsl(40, 70%, 50%)",
    "sandwich": 32,
    "sandwichColor": "hsl(33, 70%, 50%)",
    "kebab": 82,
    "kebabColor": "hsl(198, 70%, 50%)",
    "fries": 60,
    "friesColor": "hsl(129, 70%, 50%)",
    "donut": 121,
    "donutColor": "hsl(160, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 108,
    "hot dogColor": "hsl(6, 70%, 50%)",
    "burger": 127,
    "burgerColor": "hsl(226, 70%, 50%)",
    "sandwich": 160,
    "sandwichColor": "hsl(64, 70%, 50%)",
    "kebab": 136,
    "kebabColor": "hsl(273, 70%, 50%)",
    "fries": 53,
    "friesColor": "hsl(243, 70%, 50%)",
    "donut": 81,
    "donutColor": "hsl(101, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 167,
    "hot dogColor": "hsl(54, 70%, 50%)",
    "burger": 145,
    "burgerColor": "hsl(353, 70%, 50%)",
    "sandwich": 159,
    "sandwichColor": "hsl(274, 70%, 50%)",
    "kebab": 94,
    "kebabColor": "hsl(220, 70%, 50%)",
    "fries": 170,
    "friesColor": "hsl(340, 70%, 50%)",
    "donut": 62,
    "donutColor": "hsl(74, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 181,
    "hot dogColor": "hsl(157, 70%, 50%)",
    "burger": 146,
    "burgerColor": "hsl(17, 70%, 50%)",
    "sandwich": 171,
    "sandwichColor": "hsl(8, 70%, 50%)",
    "kebab": 19,
    "kebabColor": "hsl(39, 70%, 50%)",
    "fries": 146,
    "friesColor": "hsl(216, 70%, 50%)",
    "donut": 129,
    "donutColor": "hsl(286, 70%, 50%)"
  }
]

const SimpleTab = () => (
  <AutoSizer>
    {({ height, width }) => (
      <>
        <Pie
          data={pie_mock_data}
          height={height/2.2}
          width={width}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'nivo' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={22}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color' }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000'
                  }
                }
              ]
            }
          ]}
        />

        <Bar
          data={bar_mock_data}
          height={height/2.2}
          width={width}
          keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          colors={{ scheme: 'nivo' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'fries'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'sandwich'
              },
              id: 'lines'
            }
          ]}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </>
    )}
  </AutoSizer>
)

export default SimpleTab