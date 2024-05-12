import { Box, Button, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { FC } from "react";

interface ICardProps {
  width?: number | string;
  height?: number | string;
  bgColor?: string;
  borderRadius?: number | string;
  size?: string | "lg" | "md" | "sm" | "xs" | "xl" | "xxl";
  showButton?: boolean;
  children?: React.ReactNode;
}

const CardComponent: FC<ICardProps> = ({
  width,
  height,
  bgColor,
  borderRadius,
  size = "md",
  showButton = true,
  children,
}) => {
  return (
    <Box bgColor={bgColor} padding={"15px"} borderRadius={borderRadius}>
      <Card maxW={size} width={width} height={height}>
        <CardBody>{children}</CardBody>
        {showButton ? (
          <CardFooter>
            <Button width={"full"} variant="solid" colorScheme="blue">
              Buy now
            </Button>
          </CardFooter>
        ) : null}
      </Card>
    </Box>
  );
};

export default CardComponent;
