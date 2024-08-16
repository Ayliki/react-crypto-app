import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCrypto } from "../../context/crypto-contex";

ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
};

export default function PortfolioChart() {
    const {assets} = useCrypto()

    const data = {
        labels: assets.map(asset=>asset.name),
        datasets: [
        {
            label: '$',
            data: assets.map(asset=>asset.totalAmount),
            backgroundColor: Object.values(CHART_COLORS),
        }
        ]
    };

    return (
        <div style = {{display: 'flex', marginBottom: '1rem', justifyContent: 'center', height: 400}}>
            <Pie data={data} />
        </div>
    );
}
