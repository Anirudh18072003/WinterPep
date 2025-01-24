import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./Visuals.css";

import revenueData from "../Data/revenueData.json";
import sourceData from "../Data/sourceData.json";

export const Visuals = () => {
  return (
    <>
      {/* Chart 1: Line Chart */}
      <div className="dataCard revenueCard">
        <h3>Monthly Revenue & Cost</h3>
        <div className="chart-container">
          <Line
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
                },
                {
                  label: "Cost",
                  data: revenueData.map((data) => data.cost),
                  backgroundColor: "#FF3030",
                  borderColor: "#FF3030",
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Monthly Revenue & Cost",
                  align: "start",
                  font: {
                    size: 20,
                  },
                  color: "black",
                },
              },
            }}
          />
        </div>
      </div>

      {/* Chart 2: Bar Chart */}
      <div className="dataCard customerCard">
        <h3>Revenue Source</h3>
        <div className="chart-container">
          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: "Revenue Source",
                  align: "start",
                  font: {
                    size: 20,
                  },
                  color: "black",
                },
              },
            }}
          />
        </div>
      </div>

      {/* Chart 3: Doughnut Chart */}
      <div className="dataCard categoryCard">
        <h3>Revenue Sources</h3>
        <div className="chart-container">
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: "Revenue Sources",
                  align: "start",
                  font: {
                    size: 20,
                  },
                  color: "black",
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
