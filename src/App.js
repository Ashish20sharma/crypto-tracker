import Navbar from './component/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Page1 from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [api, setApi] = useState([])
  const [page, setpage] = useState(true)
  const [viewdetails, setviewdetails] = useState(false)

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").then((res) => {
      if (res.status === 200) {
        setApi(res.data)
      } else {
        console.log("error")
      }
    })
  })

  return (
    <>
      <BrowserRouter>
        <Navbar api={api} setpage={setpage} viewdetails={viewdetails} setviewdetails={setviewdetails} />
        <Routes>
          <Route path='/' element={<Page1 api={api} coinPerPage={12} page={page} setpage={setpage} viewdetails={viewdetails} setviewdetails={setviewdetails} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
