import { Box, Button, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Add-cart.css";
function Addcart() {
  const location = useLocation();
  let ans = location.state.data;
  const [set, setdata] = useState([...ans]);

  const handleDelete = (i) => {
    const deletVal = [...set];
    deletVal.splice(i, 1);
    setdata(deletVal);
    // console.log(modifiedArr);
  };

  return (
    <Box className="addcart">
      <Box>
        <Image
          className="addcart__image"
          src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
        />
        <Heading as="h4" className="addcart__heading">
          {" "}
          items
        </Heading>
      </Box>
      <Box className="cart__items">
        <Box className="cart__item">
          {set.map((x, i) => (
            <Flex className="cart__iteminfo" id={x.id}>
              <Image className="cart__image" src={x.image} />
              <Spacer />
              <Heading as="span" className="cart__itemname">
                {x.name}
              </Heading>
              <Spacer />
              <Heading as="span" className="cart__itemprice">
                {x.price}
              </Heading>
              <Spacer />
              <Button
                className="btn btn--state-delete"
                onClick={(i) => handleDelete(i)}
              >
                X
              </Button>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Addcart;
