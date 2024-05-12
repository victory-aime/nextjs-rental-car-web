import {
  Box,
  Text,
  Center,
  Stack,
  Heading,
  Image,
} from "@chakra-ui/react";
import CardComponent from "_components/card";
import FlagImagesIconComponent from "_components/flag";


export default function Home() {
  return (
    <Center>
      <Box>
        <Text>Bonjour le web</Text>
      </Box>
      <Box mt={20}>
        <CardComponent
          borderRadius={"12px"}
          bgColor="#A6A6A6"
          width={"full"}
          height={"full"}
          size={"md"}
        >
          <Image
            src={'/flag/AED.png'}
            width={50}
            height={50}
            alt="Green double couch with wooden legs"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardComponent>
        <FlagImagesIconComponent countryImage={"EUR"} border={"50"} />
      </Box>
    </Center>
  );
}
