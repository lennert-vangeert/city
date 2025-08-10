import Head from "@global/head";
import { Center, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Head title="Homepage" description="This is the homepage" SEODisabled />
      <Center h="100vh">
        <Title order={1}>Homepage</Title>
        <Link to="/aboutus">About us</Link>
      </Center>
    </>
  );
};

export default Homepage;
