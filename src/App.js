import React from 'react'
import store from './components/redux/store'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import Cart from './Pages/Cart/Cart'
import Header from './components/Header/Header.jsx'
import ThankPage from './Pages/ThankPage/ThankPage'
const App = () => {
  return (
    <div>
      <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Header/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                        <Route path="/thanks" element={<ThankPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    </div>
  )
}

export default App