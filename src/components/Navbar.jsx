import { AtSignIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Container,
	IconButton,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/brand-logo.svg";

const Navbar = () => {
	return (
		<Container maxW="container.xl" height="60px">
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				px={4}
				py={2}>
				<Box>
					<Image src={logo} alt="MeetUp" />
				</Box>
				<Box display="flex" alignItems="center">
					<IconButton
						icon={<AtSignIcon />}
						variant="link"
						colorScheme="gray.600"
						mr={4}
						fontSize="sm"
						fontWeight={200}
					/>
					<Button
						colorScheme="gray.600"
						variant="link"
						mr={4}
						fontSize="sm"
						fontWeight={200}
						_hover={{
							color: "teal.600",
						}}>
						Login
					</Button>
					<Button
						colorScheme="gray.600"
						variant="link"
						fontSize="sm"
						fontWeight={200}
						_hover={{
							color: "teal.600",
						}}>
						Sign Up
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Navbar;
