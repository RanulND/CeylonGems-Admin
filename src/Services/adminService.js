import axios from 'axios'

const getAdmins = () => {
        // let admins = []
        const url = 'http://localhost:5000/api/admin/get-admins'
        axios.get(url).then(res => {
            // console.log(res.data)
            let admins = res.data;
            console.log(admins)
            return res.data;
        }).catch(err => {
            console.log(err)
        })

    // return () => {
    //     const url = 'http://localhost:5000/api/admin/get-admins'
    //     axios.get(url).then(res => {
    //         console.log(res.data)
    //         return res.data;
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // };
    
} 

export { getAdmins }
