import { useRecordContext } from "react-admin"
import { Goods } from "@app/core/types"
import { Typography } from "@mui/material"

export const GoodsListExpand = () => {
    const goodsItem = useRecordContext<Goods>()

    return (
        <div style={{display:"flex",gap:'50px'}}>
            <div>
                <Typography variant="subtitle2">
                    Опис :
                </Typography>
                <Typography variant="body2">
                    {goodsItem.description}
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle2">
                    Додатковий опис :
                </Typography>
                <Typography variant="body2">
                    {goodsItem.title}
                </Typography>
            </div>
        </div>
    )


}