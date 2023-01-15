import { Goods } from "@app/core/types"
import { useRecordContext } from "react-admin"

export const GoodsEditTitle = () => {
    const goodsItem = useRecordContext<Goods>()
    if(!goodsItem){
        return null
    }
    return (
        <div>
            {goodsItem.title}
        </div>
    )
}