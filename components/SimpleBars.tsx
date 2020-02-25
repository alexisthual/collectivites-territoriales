import { Bar } from "@nivo/bar";
import { useState, useEffect } from "react";

interface DataPoint {
  COMPTE_T: number;
  value: number;
  year: number;
}

const SimpleBars = ({
  data,
  height,
  width
}: {
  data: DataPoint[];
  height: number;
  width: number;
}) => {
  const [barsData, setBarsData] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (data) {
      const a: any = {};
      const k: string[] = [];
      data.forEach((d: DataPoint) => {
        if (d.COMPTE_T in a) {
          a[d.COMPTE_T][d.year.toString()] = d.value;
        } else {
          a[d.COMPTE_T] = {
            COMPTE_T: d.COMPTE_T.toString(),
            [d.year.toString()]: d.value
          };
        }

        if (k.indexOf(d.year.toString()) == -1) {
          k.push(d.year.toString());
        }
      });

      setKeys(k.sort());
      setBarsData(Object.values(a));
    }
  }, [data]);

  return (
    <Bar
      data={barsData}
      height={height / 2.2}
      width={width}
      keys={keys}
      indexBy="COMPTE_T"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      colors={{ scheme: "set3" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
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
  );
};

export default SimpleBars;
