import Navbar from "./components/Navbar";

import { Box } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Connected from "./components/Connected";
import ItWorks from "./components/ItWorks";
import Upcomming from "./components/Upcomming";
import Popular from "./components/Popular";
import Stories from "./components/Stories";

function App() {
	return (
		<div className="App">
			<Box position="absolute" left="0" top="0" right="0">
				<Navbar />
				<Banner />
				<Connected />
				<ItWorks />
				<Upcomming />
				<Popular />
				<Stories />
			</Box>
		</div>
	);
}

export default App;
