import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  console.log(process.env.REACT_APP_AUTH0_DOMAIN)

  return <Button variant="outline" colorScheme="blue" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;