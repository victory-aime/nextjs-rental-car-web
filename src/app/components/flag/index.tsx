import React, { FC } from "react";


import { Box, Image } from "@chakra-ui/react";
import { FlagIconProps } from "./interface/flag.interface";
import {FlagImages} from "_/public/assets/images/flag";

const FlagImagesIconComponent: FC<FlagIconProps> = ({
  countryImage,
  border,
  ...rest
}) => {
  const flagImage = FlagImages[countryImage];

  if (!flagImage) {
    return null;
  }

  return (
    <Box alignItems={'flex-start'}>
      <Image
        id={countryImage}
        alt="flag-currency"
        src={`/flag/${countryImage}.png`}
        w="34px"
        h="34px"
        borderRadius={border}
        fit="cover"
        objectPosition="center"
        {...rest}
      />
    </Box>
  );
};

export default FlagImagesIconComponent;
