import { useGetLastWeekOrdersStatisticQuery } from "@app/core/types"
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Loading, useGetList } from "react-admin"
import { NewOrders } from "../orders/components/new-orders/new-orders.component"
import { FinanceChart } from "./finance-chart"

export const Dashboadr = () => {

    const { data, loading } = useGetLastWeekOrdersStatisticQuery()

    if (loading) {
        return <Loading />
    }


    return (
        <Card sx={{ marginTop: '64px' }}>
            <CardContent>
                <Typography variant="h4">Привіт, це адмінка сайту Твоя поличка</Typography>
                <Grid container spacing={2}>
                      <Grid item xs={12}>
                 
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">Продажі за останній тиждень</Typography>
                                <FinanceChart data={data?.last_week_orders ?? []} />
                            </CardContent>
                        </Card>
            
                      </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">Останні нові замовлення</Typography>
                                <NewOrders />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}