import Reservations from './pages/Reservations';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Donate from './pages/Donate';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/reservations" element={<Reservations />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/about" element={<About />} />
				<Route path="/order-online" element={<OrderOnline />} />
				<Route path="/login" element={<Login />} />
				<Route path="/donate" element={<Donate />} />
			</Routes>
		</>
	);
}

export default App;
