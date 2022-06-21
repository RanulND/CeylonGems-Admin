import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../Services/OrderService";

const Orders = () => {

    const [orders, setOrders] = useState([])

    const getOrders = async() => {
        try {
            const res = await getAllOrders()
            console.log(res.data.data)
            setOrders(res.data.data)
        } catch (err) {
            
        }
    }
    useEffect(() => {
        getOrders()
    }, [])
    
    return (
        <>
            <div className="container orders">
                <div className="card">
                    <div className="table-responsive">
                        <table className="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Order ID</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Total Price</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Payment Status</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Deliver Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => (
                                        <tr key={order._id}>
                                        <td>
                                            <div className="d-flex px-2">
                                                {/* <div>
                                                    <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-spotify.svg" className="avatar avatar-sm rounded-circle me-2" />
                                                </div> */}
                                                <div className="my-auto">
                                                    <h6 className="mb-0 text-xs">{order._id}</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-normal mb-0">$2,500</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-dot me-4">
                                                <i className="bg-info"></i>
                                                <span className="text-dark text-xs">{order.buyerPaymentStatus ? 'true' : 'false'}</span>
                                            </span>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            {order.deliveredStatus ? 'true' : 'false'}
                                        </td>
    
                                        <td className="align-middle">
                                            <Link className="btn btn-link text-xs mb-0 viewButton" to={`/orders/order/${order._id}`}>
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                    ))
                                }
                               

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Orders;