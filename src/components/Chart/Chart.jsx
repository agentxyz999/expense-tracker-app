import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Chart = ({ filteredExpenses }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "My Expenses by Year",
      },
    },
  };

  const initialState = [
    { month: "January", amount: 0 },
    { month: "February", amount: 0 },
    { month: "March", amount: 0 },
    { month: "April", amount: 0 },
    { month: "May", amount: 0 },
    { month: "June", amount: 0 },
    { month: "July", amount: 0 },
    { month: "August", amount: 0 },
    { month: "September", amount: 0 },
    { month: "October", amount: 0 },
    { month: "November", amount: 0 },
    { month: "December", amount: 0 },
  ];

  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const filteredData = initialState.map((state) => {
      const dataItem = filteredExpenses.find((d) => {
        const monthName = new Date(d.date);
        return (
          monthName.toLocaleString("en-US", { month: "long" }) === state.month
        );
      });
      if (dataItem) {
        return { ...state, amount: dataItem.amount };
      }
      return state;
    });
    setLabels(filteredData);
  }, [filteredExpenses]);

  const data = {
    labels: labels.map((label) => {
      return label.month;
    }),
    datasets: [
      {
        label: "Amount in Peso",
        data: labels.map((label) => {
          return label.amount;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(25, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(105, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(212, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Chart;
