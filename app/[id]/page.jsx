import React from 'react'
import Link from 'next/link'


const page = async ({ params: { id } }) => {

    console.log(id)


    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await data.json()
    console.log(response)
    return (
        <div className='flex justify-center m-4'>
            {
                <div className=" card bg-base-100 m-2 w-[100%] shadow-xl">
                    <div className="card-body">
                        <h2  className="card-title">Name : {response.name}</h2>
                        <p>Email : <b>{response.email}</b> </p>
                        <p>Phone no : <b>{response.phone}</b> </p>
                        <p>Website : <b>{response.website}</b> </p>
                        <p>Company : <b>{response.company.name}</b> </p>
                        <p>City : <b>{response.address.city}</b> </p>
                        <p>Street : <b>{response.address.street}</b> </p>
                        <p>Zipcode : <b>{response.address.zipcode}</b> </p>
                        <div className="card-actions justify-start">
                  <Link href={`/`}><button className="btn btn-primary" >Back to All User!</button></Link>
                </div>
                 
                    </div>
                </div>


            }
        </div>
    )
}

export default page