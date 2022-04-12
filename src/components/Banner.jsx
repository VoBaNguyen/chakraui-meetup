import {
	Badge,
	Box,
	Container,
	Grid,
	IconButton,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import illustration from "../assets/illustration.svg";
import explore1 from "../assets/image-one.jpg";
import explore2 from "../assets/image-two.jpg";
import explore3 from "../assets/image-three.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Banner() {
	const joinItems = [
		{ src: explore1, msg: "Make new friends" },
		{ src: explore2, msg: "Explore the outdoors" },
		{ src: explore3, msg: "Connect over tech" },
	];
	const pill = [
		"Boots your career",
		"Find your zen",
		"Get moving",
		"Share language + culture",
		"Read with friends",
		"Write together",
		"Hone your craft",
	];

	return (
		<Container maxW="container.lg">
			{/* Banner */}
			<Grid templateColumns="repeat(2, 1fr)" gap={4} mt={12}>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center">
					<Text
						as="h1"
						fontSize="5xl"
						fontWeight="bold"
						lineHeight="3rem">
						Celebrating 20 years of real connections on Meetup
					</Text>
					<Text as="p" fontSize="sm" mt={4}>
						Whatever you're looking to do this year, Meetup can
						help. For 20 years, people have turned to Meetup to meet
						people, make friends, find support, grow a business, and
						explore their interests. Thousands of events are
						happening every day—join the fun.
					</Text>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center">
					<Image src={illustration} />
				</Box>
			</Grid>

			{/* Join Meetup */}
			<Grid templateColumns="repeat(3, 1fr)" gap={4} mt={12}>
				{joinItems.map(({ src, msg }) => {
					return (
						<Box>
							<Image src={src} borderRadius="md" />
							<Link mt={2} display="flex" alignItems="center">
								<Text
									as="span"
									color="teal"
									fontWeight="bold"
									fontSize="sm">
									{msg}
								</Text>
								<IconButton
									icon={<ArrowForwardIcon />}
									variant="link"
									fontSize="2xl"
									colorScheme="teal"
								/>
							</Link>
						</Box>
					);
				})}
			</Grid>

			{/* Pill */}
			<Box mt={6} display="flex" justifyContent="space-between">
				{pill.map((msg) => (
					<Badge
						bg="teal"
						color="#fff"
						px={4}
						py={2}
						borderRadius="3xl"
						fontWeight={200}
						textTransform="initial">
						{msg}
					</Badge>
				))}
			</Box>
		</Container>
	);
}
