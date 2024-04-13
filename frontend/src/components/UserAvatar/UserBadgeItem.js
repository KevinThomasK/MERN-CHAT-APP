import { Box } from "@chakra-ui/react";
import React from "react";
import { IoMdClose } from "react-icons/io";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      display={"flex"}
      borderRadius={"lg"}
      m={1}
      mb={2}
      variant="solid"
      fontSize={"1rem"}
      background="#03A9F4"
      color={"white"}
      cursor={"pointer"}
      onClick={handleFunction}
    >
      {user.name}
      <IoMdClose
        style={{ paddingLeft: "4px", marginTop: "2px", fontSize: "1.4rem" }}
      />
    </Box>
  );
};

export default UserBadgeItem;
