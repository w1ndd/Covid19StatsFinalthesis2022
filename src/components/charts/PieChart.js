import React from 'react'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export default function PieChart({ chartData }) {
    const options = {
        animation: false
    }
    return (
        <Pie data={chartData} options={options}/>
    ) 
}