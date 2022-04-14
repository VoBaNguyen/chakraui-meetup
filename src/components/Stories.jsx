import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";
import story1 from "../assets/story-one.jpg";
import story2 from "../assets/story-two.jpg";
import story3 from "../assets/story-three.jpg";

export default function Stories() {
	const stories = [
		{
			src: story1,
			title: "Three ways to make coworker friendships while working from home",
			desc: "Work friendships don't need to face just because you're working remotely. Here are three fun ways you can get to know your colleagues.",
		},
		{
			src: story2,
			title: "Three ways to make coworker friendships while working from home",
			desc: "Work friendships don't need to face just because you're working remotely. Here are three fun ways you can get to know your colleagues.",
		},
		{
			src: story3,
			title: "Three ways to make coworker friendships while working from home",
			desc: "Work friendships don't need to face just because you're working remotely. Here are three fun ways you can get to know your colleagues.",
		},
	];
	return (
		<Container maxW="container.lg" mt={32}>
			<Box textAlign="center" maxW="50vw" margin="0 auto">
				<Heading as="h3" fontSize="2xl">
					Stories from Meetup
				</Heading>
				<Text as="p" fontSize="sm">
					People on Meetup have fostered community, learned new skils,
					started businesses, and made life-long friends. Learn how.
				</Text>
			</Box>
			<Grid templateColumns="repeat(3, 1fr)" gap={4} mt={8}>
				{stories.map(({ src, title, desc }) => (
					<GridItem>
						<Image src={src} />
						<Text as="p" fontWeight="bold" mt={4}>
							{title}
						</Text>
						<Text as="span" mt={4} fontSize="sm" color="#a0a0a0">
							{desc}
						</Text>
					</GridItem>
				))}
			</Grid>
		</Container>
	);
}
