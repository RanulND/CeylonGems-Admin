import React, { useEffect, useState } from "react"
import { Line } from 'react-chartjs-2'

const Charts = ({ id, data }) => {
    const [stat, setStat] = useState({
        labels: [],
        datasets: [{
            label: 'No. of Orders',
            data: [],
            backgroundColor:
                'rgba(9, 9, 65, 0.2)',
            borderColor:
                'rgba(9, 9, 65, 1)',
            borderWidth: 1
        }]
    })

    useEffect(() => {
        // console.log(data)
        setStat({
            ...stat,
            labels: (data || []).map(e => e._id),
            datasets: [{
                ...stat.datasets[0],
                data: (data || []).map(e => e.count)
            }]
            
        });
    }, [data])

    return (
        <div>
            <Line key={'sample'} data={stat}
            options={{
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}></Line>
        </div>
    )
}

export default Charts