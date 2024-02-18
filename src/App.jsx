import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Checkout from "./components/checkout/Checkout"
// import Invoice from "./components/invoice/Invoice"
// import Login from "./components/login/Login"

import Layout from './components/Layout'
import Unauthorized from './components/Unauthorized'
import Login from './components/login/Login'
import Catalogue from './components/catalogue/Catalogue'
import Checkout from './components/checkout/Checkout'
import Invoice from './components/invoice/Invoice'

import RequireAuth from './components/RequireAuth'

const ROLES = {
  placeOrder: "placeOrder",
  checkToken: "checkToken",
  getWalletsBalances: "getWalletsBalances",
  queryWalletTransactions: "queryWalletTransactions",
  checkItemAvailability: "checkItemAvailability",
  orderStatus: "orderStatus",
  queryOrders: "queryOrders",
  queryUsers: "queryUsers",
  items: "items",
  dailyOrders: "dailyOrders",
  logo: "logo",
  securePlus: "securePlus"
}

function App() {

  return (
    <> 
    <BrowserRouter>
      <Routes> 

        <Route path="/" element={<Layout/>}> 
          {/* public routes */}
          <Route path="/login" element={<Login/>}/>

          {/* protected routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.items]}/>}>
            <Route path='/' element={<Catalogue/>}/>
            <Route path='/catalog' element={<Catalogue/>}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.placeOrder]}/>}>
            <Route path='/checkout' element={<Checkout/>}/>
          </Route>



           {/* catch all */}
          <Route path='unauthorized' element={<Unauthorized/>}/>
        </Route>    

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
