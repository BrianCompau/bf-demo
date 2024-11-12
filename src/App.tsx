import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1'
import Page2 from './Page2'

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Page1 />} />
			<Route path="users/" element={<Page2 />} />
		</Routes>
	</BrowserRouter>
);
export default App