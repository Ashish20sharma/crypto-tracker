import React, { useState } from 'react';
import './Home.css'
export default function Page1({ api, page, setpage,viewdetails,setviewdetails ,coinPerPage}) {
    const [viewitem, setviewitem] = useState([])
    const [currentpage, setCurrentPage] = useState(1)

  const indexOfLastItem=currentpage*coinPerPage;
  const indexOfFirstitem=indexOfLastItem-coinPerPage;
  const currentItem=api.slice(indexOfFirstitem,indexOfLastItem);

  const pageNumber=[];
  for(let i=1;i<=Math.ceil(api.length/coinPerPage);i++){
    pageNumber.push(i)
  }
    function handleviewdetails(id) {
        var b = []
        api.forEach((elem) => {
            if (elem.id === id) {
                b.push(elem)
                setviewdetails(true)
                setpage(false)
            }
        })
        setviewitem(b)
    }
    function handlecancle(){
        setpage(true)
        setviewdetails(false)
    }
    return (
        <>

            {page && <div className="main">
                <div className="page">
                    {currentItem.map((ele) => {
                            return <div className="page1" key={ele.id}>
                                <h5>#{ele.market_cap_rank}</h5>
                                <img src={ele.image} alt='img' />
                                <h3>{ele.name}</h3>
                                <h3>Market cap-${ele.market_cap}</h3>
                                <h3>Price-${ele.current_price}</h3>
                                <button onClick={() => handleviewdetails(ele.id)}>view Details</button>
                            </div>
                    })}
                </div>
                <div className="buttons">
                    {pageNumber.map((number)=>{
                    return <div onClick={()=>setCurrentPage(number)} >{number}</div>
                    })} 
                </div>
            </div>}
            {viewdetails && <div className='details-box'>
                {viewitem.map((elem) => {
                    return <>
                        <div className='details'>
                            <h1>{elem.name}</h1>
                            <div className='coin'>
                                <img src={elem.image} alt='img' />
                                <div className='coin-right'>
                                    <h5>Rank-{elem.market_cap_rank}</h5>
                                    <h5>price-${elem.current_price}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='low-high'>
                            <div className='low'>
                                <h4>24 Hour Low</h4>
                                <h4>${elem.low_24h}</h4>
                            </div>
                            <div className='high'>
                                <h4>24 Hour High</h4>
                                <h4>${elem.high_24h}</h4>
                            </div>
                            <div className='circulating-supply'>
                                <h4>Circulating Supply</h4>
                                <h4>${elem.circulating_supply}</h4>
                            </div>
                            <div className='market-cap'>
                                <h4>Market Cap</h4>
                                <h4>${elem.market_cap}</h4>
                            </div>
                        </div>
                        <div className='cancle'>
                            <div className='cross' onClick={()=>handlecancle()}>x</div>
                        </div>
                    </>
                })}
            </div>}
        </>
    )
}
