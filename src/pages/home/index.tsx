import React from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Image,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const Home = () => {
    return (
        <Flex h="100vh" bg={"blue.700"}>
            {/* <Box
                h="100vh"
                w="full"
                position={"absolute"}
                zIndex="-1"
                // bgImage={bgTexture}
            >
             
            </Box> */}
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
                        />
                        <InputRightElement width="4.5rem" mt="6" mr="1">
                            <Button
                                size="md"
                                rounded="sm"
                                roundedRight={"md"}
                                textColor="black"
                                bg={"gray.300"}
                                _hover={{
                                    background: "gray.500",
                                    textColor: "gray.100",
                                }}
                            >
                                Shorten
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Box textAlign={"start"}>
                        <Flex
                            justify={"space-between"}
                            align={"center"}
                            mt="4"
                            px="2"
                            py="1"
                            bg="gray.400"
                            rounded="sm"
                        >
                            <Text color="gray.700">
                                Hey there this is short url
                            </Text>
                            <Button bg="gray.300">
                                <CopyIcon fontSize={"20"} color="gray.900" />
                            </Button>
                        </Flex>
                        <Box textAlign={"center"} mt="5">
                            QR Code image here
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;
