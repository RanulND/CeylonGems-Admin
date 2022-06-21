import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../Services/OrderService";

const Order = () => {
    const { id } = useParams()
    const [order, setOrder] = useState({})

    const retrieveOrder = async () => {
        try {
            const res = await getOrder(id)
            console.log(res.data.data)
            setOrder(res.data.data)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        retrieveOrder()
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">

                </div>
            </div>
        </div>
    )
}

export default Order