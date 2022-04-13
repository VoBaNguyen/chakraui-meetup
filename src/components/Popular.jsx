import { Box, Container, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import popularImg from "../assets/story-one.jpg";
import deviceLeft from "../assets/device-left.webp";
import deviceRight from "../assets/device-right.webp";
import meetupLogo from "../assets/meetup-logo.svg";

export default function Popular() {
	const iosApp =
		"https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=256";
	const androidApp =
		"https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256";
	const groups = [
		{
			src: popularImg,
			title: "Muslim Converts (New Group): Connect-...",
			time: "No upcoming events",
			desc: "",
		},
		{
			src: popularImg,
			title: "Shorewalkers: Members Only Groups",
			time: "Thu, APR 14 - 9:15 PM ICT",
			desc: "Weekday Saunter Stretch Series (3 of 3 - Thursday)",
		},
		{
			src: popularImg,
			title: "Dashing Whippets Running Team",
			time: "Thu, APR 14 - 9:15 PM ICT",
			desc: "Manhattan Wednesday Easy Run - Amsterdam Ale House",
		},
	];

	return (
		<Container maxW="container.lg" mt={12}>
			<Heading as="h3" fontSize="2xl">
				Poppular groups
			</Heading>
			<Grid templateColumns="repeat(3, 1fr)" gap={4} mt={6}>
				{groups.map(({ src, title, time, desc }) => (
					<Box
						border="solid #c4c4c4 1px"
						borderRadius="md"
						padding={2}>
						<Box
							display="flex"
							paddingBottom={2}
							borderBottom="solid #c4c4c4 1px">
							<Image
								width="50px"
								height="50px"
								src={src}
								objectFit="cover"
								borderRadius="md"
								display=""
							/>
							<Text as="p" fontWeight="bold" fontSize="lg" ml={2}>
								{title}
							</Text>
						</Box>
						<Box py={2}>
							<Text as="p" fontSize="sm" color="#c4c4c4">
								{time}
							</Text>
							<Text as="p" fontSize="sm">
								{desc}
							</Text>
						</Box>
					</Box>
				))}
			</Grid>

			{/* Application */}
			<Grid templateColumns="repeat(3, 1fr)" gap={2} mt={40}>
				<Box>
					<Image src={deviceLeft} />
				</Box>
				<Box>
					<Image src={meetupLogo} margin="0 auto" />
					<Text as="p" fontWeight="bold" textAlign="center" mt={8}>
						Stay connected.
						<br />
						Download the app.
					</Text>
					<Box display="flex" justifyContent="space-around" mt={8}>
						<Image src={iosApp} alt="ISO App" />
						<Image src={androidApp} alt="Android App" />
					</Box>
				</Box>
				<Box>
					<Image src={deviceRight} />
				</Box>
			</Grid>
		</Container>
	);
}
