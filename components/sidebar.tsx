import NextImage from "next/image";
import {
  Box,
  List,
  Divider,
  ListItem,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import NextLink from "next/link";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import MenuItem from "./menuItem";

const navMenu = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
  { name: "Your Library", icon: MdLibraryMusic, route: "/library" },
];

const musicMenu = [
  { name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Favorites", icon: MdFavorite, route: "/favorites" },
];

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" padding="20px">
          <NextImage alt="logo" src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <MenuItem menu={menu} key={String(Math.random() * 100)} />
            ))}
          </List>
        </Box>
        <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <MenuItem menu={menu} key={String(Math.random() * 100)} />
            ))}
          </List>
        </Box>
      </Box>
      <Divider color="gray.800" />
      <Box height="66%" overflowY="auto" paddingY="20px">
        <List spacing={2}>
          {playlist.map((item) => (
            <ListItem paddingX="20px" fontSize="16px" key={item}>
              <LinkBox>
                <NextLink href="/" passHref>
                  <LinkOverlay as="div">{item}</LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
