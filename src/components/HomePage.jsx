import React, { useContext } from 'react'
import Item from './Item'
import ContentApi from './ContentApi'

export default function HomePage() {

    const { data } = useContext(ContentApi)

    console.log("Homepage render");

    
    return (
        <main className='homePage'>
            
            {data && data.map((e,i)=>
              <Item key={e.id} product={e} />
            )}

            
            
        </main>
    )
}
