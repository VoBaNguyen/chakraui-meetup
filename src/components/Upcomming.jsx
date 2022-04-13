import {
	Box,
	Container,
	Grid,
	Heading,
	IconButton,
	Image,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import upComing1 from "../assets/upcomming-one.png";
import upComing2 from "../assets/upcomming-two.jpg";
import upComing3 from "../assets/upcomming-three.jpg";
import upComing4 from "../assets/upcomming-four.jpg";
import avatar from "../assets/popular-image.jpg";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Upcomming() {
	const upComingItems = [
		{
			src: upComing1,
			time: "MON, APR 25 - 5:00 AM ICT",
			title: "Top Web3 Projects to Watch",
			follower: 277,
		},
		{
			src: upComing2,
			time: "THU, APR 21 - 6:00 AM ICT",
			title: "Befriend Your Anxiety",
			follower: 277,
		},
		{
			src: upComing3,
			time: "MON, APR 25 - 5:00 AM ICT",
			title: "(Beginner Level, N4) Introduce yourself in Japanese",
			follower: 277,
		},
		{
			src: upComing4,
			time: "MON, APR 25 - 5:00 AM ICT",
			title: "New Group Forming!",
			follower: 277,
		},
	];
	return (
		<Container maxW="container.lg" mt={20}>
			<Heading as="h3" fontSize="2xl" fontWeight="bold">
				Upcoming online events
			</Heading>
			<Grid templateColumns="repeat(4, 1fr)" gap={4} mt={6}>
				{upComingItems.map(({ src, time, title, follower }) => (
					<Link to="#">
						<Box className="event-container">
							<Box
								className="event-top"
								minHeight="250px"
								position="relative">
								<Image
									src={src}
									borderRadius="md"
									outline="solid #c4c4c4 1px"
								/>
								<Box
									position="absolute"
									display="flex"
									alignItems="center"
									borderRadius="2px"
									top="0"
									background="#ffffff"
									fontSize="sm"
									m={1}
									px={1}>
									<svg
										data-swarm-icon="true"
										width="18"
										height="18"
										fill="#757575"
										ml="4"
										d="block"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
									</svg>
									<Text
										as="p"
										ml="2"
										color="#757575"
										fontWeight="semibold"
										fontSize="sm">
										Online Event
									</Text>
								</Box>
								<Text
									as="p"
									fontSize="sm"
									col
									r="#62
									262"
									mt={2}>
									{time}
								</Text>
								<Text
									as="p"
									fontSize="sm"
									fontWeight="bold"
									mt={2}>
									{title}
								</Text>
							</Box>
							<Box
								className="event-bot"
								display="flex"
								justifyContent="space-between"
								alignItems="center">
								<UnorderedList listStyleType="none" m={0}>
									<ListItem
										display="flex"
										alignItems="center">
										<Image
											src={avatar}
											width="30px"
											borderRadius="50%"
											boxShadow="0 0 0 3px #fff"
										/>
										<Image
											src={avatar}
											width="30px"
											borderRadius="50%"
											boxShadow="0 0 0 3px #fff"
											ml={-2}
										/>
										<Image
											src={avatar}
											width="30px"
											borderRadius="50%"
											boxShadow="0 0 0 3px #fff"
											ml={-2}
										/>
										<Text as="span" fontSize="sm" ml={2}>
											{follower}
										</Text>
									</ListItem>
								</UnorderedList>
								<IconButton
									icon={<ExternalLinkIcon />}
									variant="link"
									color="#626262"
								/>
							</Box>
						</Box>
					</Link>
				))}
			</Grid>
		</Container>
	);
}
