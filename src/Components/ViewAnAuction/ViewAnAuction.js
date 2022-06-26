
import axios from 'axios';
import React, { useState, useEffect,useContext } from 'react'
import { getAuction } from "../../Services/auctionService";
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'




  const ViewAnAuction = () => {
    const { id } = useParams();
    const [auction, setAuction] = useState([])
    const [photos, setPhotos] = useState([]);

    const getAnAuction = async () => {
        try {
            const res = await getAuction(id)
            setAuction(res.data[0])
            setPhotos(res.data.itemImage);
            // console.log(id)
            console.log(res.data[0].title)
            console.log(auction.title)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getAnAuction()
       console.log(id)
    }, [])

  return (
    <div>
      <div className='container align-items-center justify-content-center border border-1 shadow-lg'>
        <div className='row text-center' style={{ fontWeight: '600' }}>
          <h1>Auction Details</h1>
        </div>
        <div className='row py-5'>
        <div className='col-md-6 align-items-center justify-content-center'>
            <div className='row p-5 m-3 '>
              <img className="rounded-3 border border-2 shadow " src={photos} style={{
                height: '30vh',
                objectFit: 'cover'
              }} alt="1" />
            </div>
          </div>
          <div className='col-md-6 '>
            <div className='row justify-content-start align-items-start p-1 m-1 border-bottom border-primary'>
              <div className='col-md-4' style={{ textAlign: 'justify' }}>
                <h5 style={{ textAlign: 'justify' }}>Auction ID:</h5>
              </div>
              <div className='col-md-8' style={{ textAlign: 'justify' }}>
                <p>{auction._id}</p>
              </div>
            </div>
            <div className='row justify-content-start align-items-stretch p-1 m-1 border-bottom border-primary'>
              <div className='col-md-4'>
                <h5 style={{ textAlign: 'left' }}>Title:</h5>
              </div>
              <div className='col-md-8' style={{ textAlign: 'justify' }}>
                <p>{auction.title}</p>
              </div>
            </div>
            <div className='row justify-content-start align-items-start p-1 m-1 border-bottom border-primary' >
              <div className='col-md-4 '>
                <h5 style={{ textAlign: 'justify' }}>Base Value:</h5>
              </div>
              <div className='col-md-8' style={{ textAlign: 'justify' }}>
                <p>{auction.curPrice}</p>
              </div>
            </div>
            <div className='row justify-content-start align-items-stretch p-1 m-1 border-bottom border-primary'>
              <div className='col-md-4'>
                <h5 style={{ textAlign: 'justify' }}>Description:</h5>
              </div>
              <div className='col-md-8' style={{ textAlign: 'justify' }}>
                <p>{auction.desc}</p>
              </div>
            </div>
            <div className='row justify-content-start align-items-stretch p-1 m-1 border-bottom border-primary'>
              <div className='col-md-4'>
                <h5 style={{ textAlign: 'start' }}>Duration:</h5>
              </div>
              <div className='col-md-8' style={{ textAlign: 'justify' }}>
                <p> {auction.duration}</p>
              </div>
            </div>
           
            
           
            <div className='row align-items-center justify-content-center mt-4'>
              <button type="button" className="btn mainButton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Start Auction</button>

    
            </div>
        
           

          </div>
        </div>
      </div>
    </div>

  )
}

export default ViewAnAuction;