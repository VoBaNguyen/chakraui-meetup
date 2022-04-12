import { SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	IconButton,
	Input,
	Text,
} from "@chakra-ui/react";
import React from "react";

const Connected = () => {
	const inputForm = [
		{
			label: <SearchIcon />,
			placeHolder: 'Search for "tennis"',
			props: { mr: 2 },
		},
		{
			label: <TriangleDownIcon />,
			placeHolder: "City or zip code",
			props: { ml: 2 },
		},
	];

	return (
		<Container maxW="container.lg" mt={12}>
			<Grid templateColumns="repeat(2, 1fr)" gap={2}>
				<Box>
					<Heading as="h3" fontSize="2xl" fontWeight="bold">
						What do you want to do?
					</Heading>
					<Box display="flex">
						{inputForm.map(({ label, placeHolder, props }) => (
							<Box flexBasis="50%">
								<FormControl
									id="search-key"
									position="relative"
									{...props}>
									<Input
										type="text"
										placeHolder={placeHolder}
										pl={8}
										size="sm"
										borderRadius="sm"
										_focus={{
											outline: "none",
										}}
									/>
									<IconButton
										icon={label}
										position="absolute"
										left={0}
										size="sm"
										bg="transparent"
										variant="link"
										height="100%"
									/>
								</FormControl>
							</Box>
						))}
					</Box>
					<Button colorScheme="red" width="100%">
						Search
					</Button>
				</Box>
				<Box />
			</Grid>
			<Box>Test</Box>
		</Container>
	);
};

export default Connected;
