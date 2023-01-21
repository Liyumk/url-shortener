import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
    ChakraProvider,
    theme,
    Heading,
    Text,
    Box,
    Badge,
    Flex,
    Spacer,
    Button,
} from "@chakra-ui/react";

function App() {
    return (
        <Box p="2">
            <Box maxW="2xl" textAlign="center" m="0 auto">
                <Heading>URL Shortener</Heading>
                <Text fontSize="xl">Shorten your url here</Text>
            </Box>
        </Box>
    );
}

export default App;
