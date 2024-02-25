import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Textarea, Heading, Select, useColorModeValue, HStack, IconButton, Stack, SimpleGrid } from "@chakra-ui/react";
import { FaDiceD20, FaSave } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Character Creator
        </Heading>
        <Box p={8} bg={bgColor} boxShadow="base" borderRadius="lg" w="100%">
          <VStack spacing={5}>
            <FormControl id="character-name" isRequired>
              <FormLabel>Character Name</FormLabel>
              <Input placeholder="E.g. Eldon the Brave" />
            </FormControl>
            <SimpleGrid columns={2} spacing={5}>
              <FormControl id="race">
                <FormLabel>Race</FormLabel>
                <Select placeholder="Select race">
                  <option>Human</option>
                  <option>Elf</option>
                  <option>Dwarf</option>
                  {/* Add more races as options */}
                </Select>
              </FormControl>
              <FormControl id="class">
                <FormLabel>Class</FormLabel>
                <Select placeholder="Select class">
                  <option>Warrior</option>
                  <option>Mage</option>
                  <option>Rogue</option>
                  {/* Add more classes as options */}
                </Select>
              </FormControl>
            </SimpleGrid>
            <FormControl id="abilities">
              <FormLabel>Abilities</FormLabel>
              <Textarea placeholder="List your character's abilities" />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Describe your character" />
            </FormControl>
            <FormControl id="equipment">
              <FormLabel>Equipment</FormLabel>
              <Textarea placeholder="List your character's equipment" />
            </FormControl>
          </VStack>
        </Box>
        <HStack w="100%" justify="space-between">
          <Button leftIcon={<FaDiceD20 />} colorScheme="purple">
            Roll Stats
          </Button>
          <Stack direction="row">
            <Button leftIcon={<FaSave />} colorScheme="green">
              Save Character
            </Button>
            {/* Add more action buttons if necessary */}
          </Stack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
