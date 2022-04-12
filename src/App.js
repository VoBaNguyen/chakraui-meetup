import Navbar from "./components/Navbar";

import { Box } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Connected from "./components/Connected";

function App() {
	return (
		<div className="App">
			<Box position="absolute" left="0" top="0" right="0">
				<Navbar />
				<Banner />
				<Connected />
			</Box>
		</div>
	);
}

export default App;
