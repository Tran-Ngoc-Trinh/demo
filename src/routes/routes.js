import Home from './../pages/Home/Home';
import Crypto from './../pages/Crypto/Crypto';
import CryptoLayout from './../layouts/CryptoLayout/CryptoLayout'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/crypto', component: Crypto, layout: CryptoLayout}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes};