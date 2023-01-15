import React, { FC } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { FinanceChartTooltip } from './finance-chart-tooltip'



interface FinanceChartProps{
    data:any[]
}



export const FinanceChart:FC <FinanceChartProps> = ({data}) => {
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<FinanceChartTooltip/>}/>
            <Bar dataKey="count" fill="#ea580c" />
        </BarChart>
    )
}
