import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';

export default function Home() {
  return (
    // Rectangle One
    <Container className="rectangle-one">
      <Head>
        <title>eSalon Puppy Assignment!</title>

        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <h1 className="puppy-profile">Puppy Profile</h1>

      <hr className="line-one" />
    </Container>
  );
}
