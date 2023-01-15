import { GetLastWeekOrdersStatisticQuery } from '@app/core/types'
import { Card, CardContent, Typography } from '@mui/material'
import { DateTime } from 'luxon'
import { FC } from 'react'
import { TooltipProps } from 'recharts'
import { Payload } from 'recharts/types/component/DefaultLegendContent'

interface FinanceChartTooltipProps {
    active?: boolean,
    payload?: [{
        payload:{
            date:string;
            sum:number;
            count:number;
        }
    }],
}

export const FinanceChartTooltip: FC<FinanceChartTooltipProps> = ({ active, payload }) => {
    if (!active || !payload || !payload[0]) return null

    return <Card>
        <CardContent>
            <Typography>
                {DateTime.fromFormat(payload[0].payload.date, 'y-LL-dd').toLocaleString(
                    DateTime.DATE_MED
                )}
            </Typography>
            <Typography>
                Сума замовлень : {payload[0].payload.sum}
            </Typography>
            <Typography>
                Кількість замовлень : {payload[0].payload.count}
            </Typography>
        </CardContent>
    </Card>
}