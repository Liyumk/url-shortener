import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Box>
            <Box maxW="2xl" m="0 auto" p="5" textAlign="center">
                <Text fontSize="4xl">Oops!</Text>
                <Text fontSize="xl">Something went wrong.</Text>
                {isRouteErrorResponse(error) && (
                    <Box mt="3">
                        <Text
                            mx="auto"
                            px="2"
                            py="1"
                            w="fit-content"
                            bg="red.300"
                            color="white"
                            fontSize="md"
                        >
                            {error.statusText || error.data}
                        </Text>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
export default ErrorPage;
