import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon, StarIcon, SettingsIcon } from "@chakra-ui/icons";

const Body_2 = () => {
  return (
    <Flex
      className="why-urban-company"
      justify="space-between"
      align="center"
      bg="white"
    >
      {/* Left Section */}
      <Box className="left-section" w="50%">
        <Heading as="h2" size="lg" mb={4}>
          Why Find My Nanny?
        </Heading>

        <Flex className="feature" align="center" mb={4}>
          <CheckCircleIcon
            className="icon"
            color="orange.400"
            boxSize={6}
            mr={3}
          />
          <Box>
            <Heading as="h3" size="md">
              Transparent pricing
            </Heading>
            <Text>See fixed prices before you book. No hidden charges.</Text>
          </Box>
        </Flex>

        <Flex className="feature" align="center" mb={4}>
          <StarIcon className="icon" color="orange.400" boxSize={6} mr={3} />
          <Box>
            <Heading as="h3" size="md">
              Experts only
            </Heading>
            <Text>
              Our professionals are well trained and have on-job expertise.
            </Text>
          </Box>
        </Flex>

        <Flex className="feature" align="center" mb={4}>
          <SettingsIcon
            className="icon"
            color="orange.400"
            boxSize={6}
            mr={3}
          />
          <Box>
            <Heading as="h3" size="md">
              Fully equipped
            </Heading>
            <Text>We bring everything needed to get the job done well.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Right Section */}
      <Box
        className="right-section"
        w="40%"
        p={6}
        bg="blue.50"
        borderRadius="md"
      >
        <SettingsIcon color="blue.500" boxSize={10} />
        <Heading as="h3" size="md" mt={2}>
          100% Quality Assured
        </Heading>
        <Text>If you don’t love our service, we will make it right.</Text>
      </Box>
    </Flex>
  );
};

export default Body_2;
