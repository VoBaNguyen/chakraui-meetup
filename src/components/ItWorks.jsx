import {
	Box,
	Button,
	Container,
	Grid,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import itWork1 from "../assets/joinagroup.svg";
import itWork3 from "../assets/ticket.svg";
import itWork2 from "../assets/start-group.svg";

export default function ItWorks() {
	const workItems = [
		{
			src: itWork1,
			title: "Join a group",
			desc: "Do what you love, meet others who love it, find your community. The rest is history!",
		},
		{
			src: itWork2,
			title: "Find a event",
			desc: "Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.",
		},
		{
			src: itWork3,
			title: "Start a group",
			desc: "You don’t have to be an expert to gather people together and explore shared interests.",
		},
	];

	return (
		<Container maxW="container.lg" mt={12}>
			<Box
				d="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				maxW="40vw"
				margin="0 auto">
				<Heading as="h3" fontSize="2xl" fontWeight="bold">
					How Meetup works
				</Heading>
				<Text as="p" textAlign="center" fontSize="sm" mt={2}>
					Meet new people who share your interests through online and
					in-person events. It’s free to create an account.
				</Text>
			</Box>
			<Grid templateColumns="repeat(3, 1fr)" gap={8} mt={6}>
				{workItems.map(({ src, title, desc }) => (
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center">
						<Image src={src} />
						<Link to="#" fontWeight="bold" color="teal">
							{title}
						</Link>
						<Text as="p" textAlign="center" fontSize="sm">
							{desc}
						</Text>
					</Box>
				))}
			</Grid>

			<Button
				display="block"
				px={4}
				colorScheme="teal"
				margin="0 auto"
				fontWeight="light"
				mt={12}>
				Join Meetup
			</Button>
		</Container>
	);
}
