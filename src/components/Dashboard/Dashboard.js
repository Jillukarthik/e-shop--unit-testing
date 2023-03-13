import {
  Box,
  Button,
  Heading,
  Image,
  useDisclosure,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  ButtonGroup,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import "./Dashboard.css";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjkL2yLqdFNpg1hAtZaT8VAlINPtOPDyMKQ&usqp=CAU",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAwEcNh1ZSUB27JtJpRZuXAb73f8S4aA88yt4UXYESGsLQUeifJwrrMkN4wEFA0dctTo&usqp=CAU",
    },
    {
      id: 3,
      name: "Product 3",
      price: 20.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtfhnjzUZ8F4A_vEQ3MDexWuLz8QhK7GOQg&usqp=CAU",
    },
    {
      id: 4,
      name: "Product 4",
      price: 25.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjkL2yLqdFNpg1hAtZaT8VAlINPtOPDyMKQ&usqp=CAU",
    },
  ];
  const location = useLocation();
  const logindata = location.state?.data;

  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/");
  };
  const noSpecialCharacters = logindata?.replace("@gmail.com", "");
  // console.log(noSpecialCharacters);

  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box className="dashboard">
      <Box className="dashboard__header">
        <Heading as="h1" title="header__estore">
          E-Store
        </Heading>
        <Box className="dashboard__headerbutton">
          <Heading className="dashboard__username" title="header__name">
            Welcome {noSpecialCharacters} !!!
          </Heading>
        </Box>
      </Box>
      <Heading className="dashboard__products">Products</Heading>
      <Box className="products__items">
        <ol className="products__item">
          {products.map((product) => (
            <li className="product" key={product.id}>
              <Image
                className="product__image"
                src={product.image}
                alt={product.name}
              />
              <Heading as="span" className="product__name">
                {product.name}
              </Heading>
              <Heading as="span" className="prodcuct__price">
                ${product.price.toFixed(2)}
              </Heading>
              <Button>Add to cart</Button>
            </li>
          ))}
        </ol>
      </Box>
      <Flex className="footer__item">
        <p> E-Store &copy; 2023</p>
        <Spacer />
        <Button className="btn btn--statein-logout" onClick={onToggle}>
          logout
        </Button>
      </Flex>
      <Box>
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverContent className="btn btn--state-popover">
            <PopoverHeader className="popover__confirmation">
              Confirmation
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Are you sure you want to logout</PopoverBody>
            <PopoverFooter className="popover__footer">
              <ButtonGroup className="popover__btngroup">
                <Button variant="outline" onClick={onClose}>
                  No
                </Button>
                <Button colorScheme="red" onClick={redirectLogin}>
                  Yes
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
}

export default App;
