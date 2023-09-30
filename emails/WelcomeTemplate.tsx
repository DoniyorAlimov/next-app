import React from "react";
import {
  Html,
  Body,
  Preview,
  Container,
  Text,
  Link,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Container>
        <Text>Hello {name}</Text>
        <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
      </Container>
    </Html>
  );
};

export default WelcomeTemplate;
