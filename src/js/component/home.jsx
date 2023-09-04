import React from "react";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jamb/>
			<div className="container row m-auto p-0 justify-content-between mb-4">
				<Cards title='First Card' img='https://i.pinimg.com/originals/f3/6d/27/f36d2783ac3099cde493066550b64f8b.jpg' text="All you need in life is a friend like me" btn='Adopt a dog'/>
				<Cards/>
				<Cards/>
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
