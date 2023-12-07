import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar({ api, setpage, setviewdetails }) {
  const [search, setsearch] = useState([])
  const [searchdiv, setsearchdiv] = useState(false)
  const [item, setitem] = useState([])

  function handlesearch(e) {
    setsearch(e.target.value)
    var a = [...api]
    var b = []
    a.forEach((elem) => {
      if (e.target.value !== "" && elem.id.toLowerCase().includes((e.target.value).toLowerCase())) {
        b.push(elem)
        setsearchdiv(true)
        setpage(false)
        setviewdetails(false)
      } else if (e.target.value === '') {
        setsearchdiv(false)
        setpage(true)
      }
    })
    setitem(b)
  }
  function handlesearchdiv() {
    setsearchdiv(false)
    setpage(true)
  }
  return (
    <>
      <nav>
        <div className="brand-name">
          <h4>Crypto Trackker</h4>
        </div>
        <div className="search">
          <input type="search" placeholder='Search crypto' value={search} onInput={(e) => handlesearch(e)} />
        </div>
      </nav>
      {searchdiv && <div className="main">
        <div className="page">
          {item.map((ele) => {
            return <div className="page1" key={ele.id}>
              <h5>#{ele.market_cap_rank}</h5>
              <img src={ele.image} alt='img' />
              <h3>{ele.name}</h3>
              <h3>Market cap-${ele.market_cap}</h3>
              <h3>Price-${ele.current_price}</h3>
              <button>view Details</button>
            </div>
          })}
        </div>
        <div className="buttons">
          <Link to="/page1" onClick={() => handlesearchdiv()}> <div>1</div></Link>
          <Link to="/page2" onClick={() => handlesearchdiv()}> <div >2</div></Link>
          <Link to="/page3" onClick={() => handlesearchdiv()}> <div >3</div></Link>
          <Link to="/page4" onClick={() => handlesearchdiv()}> <div >4</div></Link>
          <Link to="/page5" onClick={() => handlesearchdiv()}> <div >5</div></Link>
          <Link to="/page6" onClick={() => handlesearchdiv()}> <div >6</div></Link>
          <Link to="/page7" onClick={() => handlesearchdiv()}> <div >7</div></Link>
          <Link to="/page8" onClick={() => handlesearchdiv()}> <div >8</div></Link>
          <Link to="/page9" onClick={() => handlesearchdiv()}> <div >9</div></Link>
        </div>
      </div>}
    </>
  )
}
