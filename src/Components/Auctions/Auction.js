
import './Auction.css'
import { getAuctions } from "../../Services/auctionService";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";



const Auctions = (props) => {
    const [auctions, setAuctions] = useState([])
  

    const getAllAuctions = async () => {
        try {
            const res = await getAuctions()
            setAuctions(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getAllAuctions()
       
    }, [])


    return (
       
            <div className="container auctions">
                <div className="card">
                    <div className="table-responsive">
                        <table className="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Auction ID</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Base Value</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Ends in</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                             {auctions.map(auction => (
                                <tr key={auction._id}>
                                    <td>
                                        <div className="d-flex px-2">
                                            <div className="my-auto">
                                                <h6 className="mb-0 text-xs">{auction._id}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-normal mb-0">{auction.curPrice}</p>
                                    </td>
                                    <td>
                                        <span className="badge badge-dot me-4">
                                            <i className="bg-info"></i>
                                            <span className="text-dark text-xs">Ongoing</span>
                                        </span>
                                    </td>
                                    <td className="align-middle text-center">
                                         {auction.duration}
                                    </td>

                                    <td className="align-middle">
                                    <Link to={`/auction/${auction._id}`} className="btn btn-primary">View</Link>
                                    </td>
                                </tr>
                                ))} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
                
    )
}

export default Auctions;