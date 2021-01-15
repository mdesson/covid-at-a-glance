import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  datasets: [
    {
      label: 'Sales',
      type: 'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2'
    },
    {
      type: 'bar',
      label: 'Visitor',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
      yAxisID: 'y-axis-1'
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels
      }
    ]
  }
};

const CasesChart = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        'https://api.covid19tracker.ca/reports/regions/2406'
      );
      const { data, labels } = res.data.data.reduce((acc, curr) => {
        if (!acc.labels) acc.labels = [];
        if (!acc.data) acc.data = { datasets: [{ data: [] }, { data: [] }] };
        const cases = curr.change_cases ? curr.change_cases : 0;
        const vaccinated = curr.total_vaccinated ? curr.total_vaccinated : 0;

        acc.labels.push(curr.date);
        acc.data.datasets[0].data.push(cases);
        acc.data.datasets[0].data.push(vaccinated);

        return acc;
      }, {});

      setData(data);
      setLabels(labels);
    };
    fetchData();
  }, []);
  return <Bar data={data} options={options} />;
};

export default CasesChart;
