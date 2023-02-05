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
  // this useEffect will set the filteredExpenses from App.js into initialState
  // and get the total amount foreach month if the expenses have the same month
  useEffect(() => {
    const filteredData = initialState.map((state) => {
      let totalAmount = 0;
      filteredExpenses.forEach((d) => {
        const monthName = new Date(d.date).toLocaleString("en-US", {
          month: "long",
        });
        if (monthName === state.month) {
          totalAmount += parseInt(d.amount);
        }
      });
      return { ...state, amount: totalAmount };
    });
    setLabels(filteredData);
  }, [filteredExpenses]);
  console.log(labels);
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
          "rgba(255, 206, 86, 0.8)",
          "rgba(25, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(105, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(212, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.6)",
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
