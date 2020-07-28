import React from "react";
import StudentData from "./data/StudentData";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup,
  VictoryLabel,
} from "victory";
// import StudentData from "./StudentData";
import wincTheme from "./data/WincTheme";

const StudentDetails = ({match}) => {
 
let name = match.params.name
  let dataForChart = StudentData.filter((item) => {
      return item.name === match.params.name
  })
  .map((avg) => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht: ${avg.assignment}
    Moeilijk: ${avg.difficultyRating} Leuk: ${avg.enjoymentRating}`,
  }));

  return (
    <React.Fragment>
    <figure>
  <h3>Dashboard overview {name}</h3>
      <>
        {/* Eerste staaf diagram rood */}
        <div className="barchart">
          <h3 className="inside-div-h3">Difficult and Enjoyment rate all assignments for {name}</h3>
        <VictoryChart
          padding={{ top: 40, bottom: 100, left: 60, right: 60 }}
          domainPadding={15}
          theme={wincTheme}
        >

          <VictoryGroup offset={20}>
            <VictoryBar
              labelComponent={<VictoryTooltip />}
              data={dataForChart}
              animate={{
                duration: 4000,
                onLoad: { duration: 3000 },
              }}
              x="assignment"
              y="difficultyRating"
              alignment="start"
              color='#8791f6'

              tickValues={[1, 2, 3, 4, 5]}
            />

            {/* Eerste staaf diagram geel */}
            <VictoryBar
              labelComponent={<VictoryTooltip />}
              data={dataForChart}
              animate={{
                duration: 2000,
                onLoad: { duration: 3000 },
              }}
              x="assignment"
              y="enjoymentRating"
              color='#38d7a7'

              tickValues={[1, 2, 3, 4, 5]}
            />
          </VictoryGroup>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={dataForChart.map((avg) => avg.assignment)}
            tickLabelComponent={
              <VictoryLabel angle={60} textAnchor="start" />
            }
          />
          <VictoryAxis dependentAxis />

  
        </VictoryChart>
        </div>
        {/* Begin lijn  */}
        <div className="linechart">

            <h3 className="inside-div-h3">Average line chart all assignments for {name}</h3>
        <VictoryChart
          padding={{ top: 40, bottom: 100, left: 60, right: 60 }}
          domainPadding={15}
          theme={wincTheme}
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
            }}
            labelComponent={<VictoryTooltip />}
            data={dataForChart}
            animate={{
              duration: 4000,
              onLoad: { duration: 4000 },
            }}
            x="assignment"
            y="difficultyRating"
            alignment="start"
          />
          <VictoryLine
              style={{
                data: { stroke: "#ff00ff" },
                parent: { border: "1px solid #ccc" },
              }}
              labelComponent={<VictoryTooltip />}
              data={dataForChart}
              animate={{
                duration: 4000,
                onLoad: { duration: 4000 },
              }}
              x="assignment"
              y="enjoymentRating"
              alignment="start"
              />
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={dataForChart.map((avg) => avg.assignment)}
            tickLabelComponent={
              <VictoryLabel angle={60} textAnchor="start" />
            }
          />
          <VictoryAxis dependentAxis />
        </VictoryChart>
        </div>



     
      </>
    </figure>
  </React.Fragment>
  );
};

export default StudentDetails;
