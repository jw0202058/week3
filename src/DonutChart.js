import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DonutChart = ({ data }) => {
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map(prediction => prediction.className),
    datasets: [
      {
        data: data.map(prediction => Math.round(prediction.probability * 100)),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9800',
          '#4CAF50',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'white',
        fontSize: 14,
        padding: 20,
      },
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label: (tooltipItem, data) => {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return `${label}: ${value}%`;
        },
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (chartRef.current) {
        const elementTop = chartRef.current.getBoundingClientRect().top;
        const offset = window.innerHeight * 0.5; // 화면 높이의 절반 이상 보일 때 감지
        const isChartVisible = elementTop < window.innerHeight - offset;
        if (isChartVisible !== chartVisible) {
          setChartVisible(isChartVisible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [chartVisible]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* 차트 컴포넌트 */}
      <div style={{ width: '500px', height: '500px' }} ref={chartRef}>
        {chartVisible && <Doughnut data={chartData} options={chartOptions} />}
      </div>

      {/* 오른쪽에 색상 정보 */}
      <div style={{ marginLeft: '100px' }}>
        {/* 오른쪽 색상 정보 표시 코드 생략 */}
      </div>
    </div>
  );
};

export default DonutChart;