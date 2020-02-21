import { Pie } from '@nivo/pie'
import { useState, useEffect } from 'react'

interface DataPoint {
  COMPTE_T: number,
  value: number
}

const SimplePie = ({ data, height, width }: {data: DataPoint[], height: number, width: number}) => {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    if(data) {
      const newData = data.map((entry: DataPoint) => ({
        id: '' + entry.COMPTE_T,
        label: '' + entry.COMPTE_T,
        value: entry.value,
      }))

      setPieData(newData)
    }
  }, [data])

  return (
    <Pie
      data={pieData}
      height={height/2.2}
      width={width}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'set3' }}
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
  )
}

export default SimplePie