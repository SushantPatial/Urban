import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Checkbox,
  Select,
  HStack,
  SelectField,
  Spacer,
  Box,
  PinInput,
  PinInputField,
  Heading,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../Utils/Firebase-config";
import { GoogleAuthProvider } from "firebase/auth";
import Flag from "./Flag";
import { verify } from "../Redux/AuthReducer/action";
// import "../StyleComponents/phone.css";

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const dispatch = useDispatch();

  const Auth = useSelector((state) => state.AuthReducer);

  const { isAuth, isLoading, isError } = Auth;

  const handleGmailLogin = () => {
    const provider = new GoogleAuthProvider();
    authentication
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user.uid);
        dispatch(verify(user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {isAuth ? (
        <Button colorScheme="blackAlpha.900">Logout - User</Button>
      ) : (
        <Button ref={btnRef} colorScheme="blackAlpha.900" onClick={onOpen}>
          Login/Signup
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Please login to continue</DrawerHeader>

          <DrawerBody>
            <Button onClick={handleGmailLogin} mt={5} width={"100%"}>
              Continue with Gmail
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
