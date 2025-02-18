import React from "react";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";
import USA from "fusioncharts/maps/fusioncharts.usa";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Maps, USA, FusionTheme);

class Chart extends ReactFC {}

const chartConfigs = {
  type: "maps/usa",
  width: "100%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Test",
      theme: "fusion",
      showentitytooltip: "1",
      showentityhovereffect: "1",
      showlabels: "1",
      labelDisplay: "rotate",
      slantLabels: "1",
    },
    data: [],
  },
};

function App() {
  return (
    <div className="App">
      <Chart {...chartConfigs} />
    </div>
  );
}

export default App;
