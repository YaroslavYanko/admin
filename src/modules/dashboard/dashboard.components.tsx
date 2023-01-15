import { useGetLastWeekOrdersStatisticQuery } from "@app/core/types"
import { Card, CardContent, Typography } from "@mui/material"
import { Loading, useGetList } from "react-admin"
import { FinanceChart } from "./finance-chart"

export const Dashboadr = () => {

    const { data, loading } = useGetLastWeekOrdersStatisticQuery()

    if (loading) {
        return <Loading />
    }


    return (
        <Card sx={{ marginTop: '64px' }}>
            <CardContent>
                <Typography variant="h4">Вітання в адмінці Твоя Поличка</Typography>
                <Card variant="outlined">
                <Typography variant="h6">Продажі за останній тиждень</Typography>
                    <CardContent>
                        <FinanceChart data={data?.last_week_orders ?? []} />
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}