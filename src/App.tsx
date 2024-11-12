import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1'

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/bf-demo/" element={<Page1 />} />
		</Routes>
	</BrowserRouter>
);
export default App