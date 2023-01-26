import React from "react";
import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Center,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

import QrCode from "./components/QrCode";

const Home = () => {
    return (
        <Flex h="100vh" bg={"blue.900"}>
            <Box
                w={"2xl"}
                m="auto"
                alignItems={"center"}
                p="2"
                textAlign={"center"}
            >
                <Box m="0 auto" textColor={"white"}>
                    <Heading as="h2">URL shortener</Heading>
                    <Text fontSize={"lg"} mt="2">
                        Shorter. Easier. Cleaner
                    </Text>
                    <InputGroup>
                        <Input
                            placeholder="http://yourURL"
                            size="lg"
                            mt="5"
                            fontSize="md"
                            variant={"filled"}
                            textColor="black"
                            _focus={{
                                borderColor: "blue.200",
                                bg: "gray.100",
                            }}
                        />
                        <InputRightElement width="5rem" mt="6" mr="1">
                            <Button
                                size="md"
                                rounded="sm"
                                roundedRight={"md"}
                                textColor="black"
                                bg={"gray.300"}
                                _hover={{
                                    background: "gray.400",
                                    textColor: "gray.100",
                                }}
                            >
                                Shorten!
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Box textAlign={"start"}>
                        <Flex
                            justify={"space-between"}
                            align={"center"}
                            mt="4"
                            pl="4"
                            pr="4"
                            py="3"
                            bg="gray.500"
                            rounded="sm"
                        >
                            <Text textColor="gray.100">
                                Hey there this is short url
                            </Text>
                            <CopyIcon
                                fontSize={"20"}
                                color="gray.200"
                                _hover={{
                                    textColor: "white",
                                    cursor: "pointer",
                                }}
                            />
                        </Flex>
                        <Center alignItems={"center"} mt="10" h={150}>
                            <QrCode size={150} />
                        </Center>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;
