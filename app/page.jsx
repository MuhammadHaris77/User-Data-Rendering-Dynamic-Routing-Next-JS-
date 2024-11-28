import React from 'react'
import Link from 'next/link'

const Home = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users/')
  const response = await data.json()
  console.log(response)

  return (
    <div className='flex flex-wrap m-2'>

      {
        response.map((item) => {
          return <div className='p-1'>
            <div className="card bg-base-100 m-2 w-[390px] h-[300px] shadow-xl">
              <div className="card-body m-4">
                <h4 className="card-title">Name : {item.name}</h4>
                <h4 className="card-title">Email : {item.email}</h4>
                <br />
                <br />
                <div className="card-actions justify-start">
                  <Link href={`/${item.id}`}><button className="btn btn-primary" >View User Detail</button></Link>
                </div>
              </div>
            </div>
          </div>
        })
      }

    </div>
  )
}

export default Home

