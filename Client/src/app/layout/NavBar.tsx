import { Group } from "@mui/icons-material";
import {
    AppBar,
    Box,
    CircularProgress,
    Container,
    MenuItem,
    MenuList,
    Toolbar,
    Typography,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./userMenu";

export default function Navbar() {
    const { uiStore } = useStore();
    const { currentUser } = useAccount();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundImage:
                        "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%) ",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <MenuList>
                            <MenuItem
                                component={NavLink}
                                to="/"
                                sx={{ display: "flex", gap: 2 }}
                            >
                                <Group fontSize="large" />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: "bold",
                                        position: "relative",
                                    }}
                                >
                                    Reactivities
                                </Typography>

                                <Observer>
                                    {() =>
                                        uiStore.isLoading ? (
                                            <CircularProgress
                                                size={20}
                                                thickness={7}
                                                sx={{
                                                    color: "white",
                                                    position: "absolute",
                                                    top: "30%",
                                                    left: "105%",
                                                }}
                                            />
                                        ) : null
                                    }
                                </Observer>
                            </MenuItem>
                        </MenuList>

                        <MenuList sx={{ display: "flex" }}>
                            <MenuItemLink to="/activities">
                                Activities
                            </MenuItemLink>

                            <MenuItemLink to="/counter">Counter</MenuItemLink>

                            <MenuItemLink to="/errors">Errors</MenuItemLink>
                        </MenuList>

                        <MenuList>
                            <MenuItem>
                                {currentUser ? (
                                    <UserMenu />
                                ) : (
                                    <>
                                        <MenuItemLink to="/login">
                                            Login
                                        </MenuItemLink>
                                        <MenuItemLink to="/register">
                                            Register
                                        </MenuItemLink>
                                    </>
                                )}
                            </MenuItem>
                        </MenuList>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
