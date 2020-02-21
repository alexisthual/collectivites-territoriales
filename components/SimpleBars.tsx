import { Bar } from '@nivo/bar'
import { useState, useEffect } from 'react'

// const bar_mock_data = [
//   {
//     "country": "AD",
//     "hot dog": 196,
//     "hot dogColor": "hsl(67, 70%, 50%)",
//     "burger": 9,
//     "burgerColor": "hsl(133, 70%, 50%)",
//     "sandwich": 98,
//     "sandwichColor": "hsl(64, 70%, 50%)",
//     "kebab": 3,
//     "kebabColor": "hsl(254, 70%, 50%)",
//     "fries": 74,
//     "friesColor": "hsl(239, 70%, 50%)",
//     "donut": 95,
//     "donutColor": "hsl(280, 70%, 50%)"
//   },
//   {
//     "country": "AE",
//     "hot dog": 156,
//     "hot dogColor": "hsl(119, 70%, 50%)",
//     "burger": 72,
//     "burgerColor": "hsl(163, 70%, 50%)",
//     "sandwich": 31,
//     "sandwichColor": "hsl(14, 70%, 50%)",
//     "kebab": 148,
//     "kebabColor": "hsl(111, 70%, 50%)",
//     "fries": 29,
//     "friesColor": "hsl(288, 70%, 50%)",
//     "donut": 71,
//     "donutColor": "hsl(274, 70%, 50%)"
//   },
//   {
//     "country": "AF",
//     "hot dog": 195,
//     "hot dogColor": "hsl(63, 70%, 50%)",
//     "burger": 159,
//     "burgerColor": "hsl(183, 70%, 50%)",
//     "sandwich": 135,
//     "sandwichColor": "hsl(200, 70%, 50%)",
//     "kebab": 48,
//     "kebabColor": "hsl(284, 70%, 50%)",
//     "fries": 156,
//     "friesColor": "hsl(124, 70%, 50%)",
//     "donut": 88,
//     "donutColor": "hsl(4, 70%, 50%)"
//   },
// ]

interface DataPoint {
  COMPTE_T: number,
  value: number,
  year: number,
}

const SimpleBars = ({ data, height, width }: {data: DataPoint[], height: number, width: number}) => {
  const [barsData, setBarsData] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if(data) {
      const a: any = {}
      const k: string[] = []
      data.forEach((d: DataPoint) => {
        if(d.COMPTE_T in a) {
          a[d.COMPTE_T][d.year.toString()] = d.value
        } else {
          a[d.COMPTE_T] = {
            COMPTE_T: d.COMPTE_T.toString(),
            [d.year.toString()]: d.value,
          }
        }

        if (k.indexOf(d.year.toString()) == -1) {
          k.push(d.year.toString())
        }
      })

      console.log(k)
      console.log(Object.values(a))

      setKeys(k.sort())
      setBarsData(Object.values(a))
    }
  }, [data])

  return (
    <Bar
      data={barsData}
      height={height/2.2}
      width={width}
      keys={keys}
      indexBy="COMPTE_T"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      colors={{ scheme: 'set3' }}
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
  )
}

export default SimpleBars