import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5radar from '@amcharts/amcharts5/radar';
import * as am5xy from '@amcharts/amcharts5/xy';

const RadarChart = () => {
  useEffect(() => {
    am5.ready(() => {
      // Create root element
      const root = am5.Root.new("chartdiv");

      // Set themes
      root.setThemes([am5.themes.animated.new(root)]);

      // Create chart
      const chart = root.container.children.push(am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX"
      }));

      // Add cursor
      const cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
        behavior: "zoomX"
      }));

      cursor.lineY.set("visible", false);

      // Create axes and their renderers
      const xRenderer = am5radar.AxisRendererCircular.new(root, {});
      xRenderer.labels.template.setAll({
        radius: 10
      });

      const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5radar.AxisRendererRadial.new(root, {})
      }));

      // Create series
      const series = chart.series.push(am5radar.RadarLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "litres",
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));

      series.strokes.template.setAll({
        strokeWidth: 2
      });

      series.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: series.get("fill")
          })
        });
      });

      // Set data
      const data = [{
        "country": "Lithuania",
        "litres": 501
      }, {
        "country": "Czechia",
        "litres": 301
      }, {
        "country": "Ireland",
        "litres": 266
      }, {
        "country": "Germany",
        "litres": 165
      }, {
        "country": "Australia",
        "litres": 139
      }, {
        "country": "Austria",
        "litres": 336
      }, {
        "country": "UK",
        "litres": 290
      }, {
        "country": "Belgium",
        "litres": 325
      }, {
        "country": "The Netherlands",
        "litres": 40
      }];
      series.data.setAll(data);
      xAxis.data.setAll(data);

      // Animate chart and series in
      series.appear(1000);
      chart.appear(1000, 100);
    });
  }, []);

  return <div id="chartdiv" style={{ width: '100%', height: '500px' }} />;
};

export default RadarChart;
