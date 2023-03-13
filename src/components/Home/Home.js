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
} from "@chakra-ui/react";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import headerimg from "../../assests/headerimg.jpg";
import axios from "axios";

function Home() {
  const location = useLocation();
  const logindata = location.state?.data;
  const [posts, setPosts] = useState([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API_URL);
      setPosts(response.data);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/");
  };

  const noSpecialCharacters = logindata.replace("@gmail.com", "");
  // console.log(noSpecialCharacters);

  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box className="home" data-testid="home">
      <Box>
        <Image className="home__image" src={headerimg} />
      </Box>
      <Box>
        <Button className="btn btn--state-logout" onClick={onToggle}>
          logout
        </Button>
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
      <Box>
        <Heading as="h1" className="home__username">
          Welcome {noSpecialCharacters}!!!
        </Heading>
        {/* <Box className="home__loader">{loading && <Spinner />}</Box> */}
        <Box className="home__data">
          <Box className="home__dataitems">
            <ul data-testid="post-list">
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
