import React from 'react';
import { Link } from 'react-router-dom';

const Page2: React.FC = () => (
	<div>
		<h1>Home Page</h1>
		<Link to="/users/42">Go to User 42 Page</Link>
	</div>
);
export default Page2;