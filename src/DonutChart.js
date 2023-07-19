import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DonutChart = ({ data }) => {
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
    responsive: true, // 차트가 반응형으로 크기가 조정되도록 설정
    maintainAspectRatio: false, // 차트의 가로 세로 비율을 유지하지 않도록 설정 (true로 하면 도넛이 능글렁해질 수 있음)
    legend: {
      display: true, // 범례 표시 여부 설정 (false로 하면 차트 하단에 범례가 표시되지 않음)
      position: 'bottom', // 범례 위치 설정 (top, bottom, left, right 중 선택)
      labels: {
        fontColor: 'white', // 범례 텍스트 색상 설정
        fontSize: 14, // 범례 텍스트 크기 설정
        padding: 20, // 범례 내용과 차트 사이의 간격 설정
      },
    },
    tooltips: {
      enabled: true, // 마우스 호버 시 정보 툴팁 표시 여부 설정
      callbacks: {
        label: (tooltipItem, data) => {
          // 툴팁 텍스트 형식 설정 (툴팁에 어떤 정보를 어떤 형식으로 표시할지 설정)
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return `${label}: ${value}%`;
        },
      },
    },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* 차트 컴포넌트 */}
      <div style={{ width: '500px', height: '500px' }}>
        <Doughnut data={chartData} options={chartOptions} />
      </div>

      {/* 오른쪽에 색상 정보 */}
      <div style={{ marginLeft: '100px' }}>
        {data.map((prediction, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: prediction.backgroundColor, marginRight: '5px' }}></div>
            <span style={{ color: 'white', fontSize: '20px' }}>{prediction.className} : {Math.round(prediction.probability * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;