import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5radar from '@amcharts/amcharts5/radar';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const RadarChart = ({ chartId }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    am5.ready(() => {
      // Check if the chart is already initialized
      if (!chartRef.current) {
        // Create root element
        const root = am5.Root.new(chartId);

        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

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
        //   "litres": 501
        }, {
          "country": "Czechia",
        //   "litres": 301
        }, {
          "country": "Ireland",
        //   "litres": 266
        }, {
          "country": "Germany",
        //   "litres": 165
        }, {
          "country": "Australia",
        //   "litres": 139
        }, {
          "country": "Austria",
        //   "litres": 336
        }, {
          "country": "UK",
        //   "litres": 290
        }, {
          "country": "Belgium",
        //   "litres": 325
        }, {
          "country": "The Netherlands",
        //   "litres": 40
        }];
        series.data.setAll(data);
        xAxis.data.setAll(data);

        // Animate chart and series in
        series.appear(1000);
        chart.appear(1000, 100);

        // Save the chart reference for future checks
        chartRef.current = chart;
      }
    });
  }, [chartId]);

  return <div id={chartId} style={{ width: '100%', height: '400px' }} />;
};

export default RadarChart;
