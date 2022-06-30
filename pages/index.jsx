import Head from 'next/head';
import { Container, Button } from 'react-bootstrap';

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

      {/* Name */}
      <div>
        <label for="puppy-name" className="name">
          Name:
        </label>

        <input type="text" className="rectangle-two" id="puppy-name" />
      </div>

      {/* Date of Birth */}
      <div className="">
        <label for="puppy-dob" className="date-of-birth">
          Date of Birth:
        </label>

        <input
          type="number"
          className="rectangle-three"
          id="puppy-dob"
          placeholder="Month"
        />

        <input
          type="number"
          className="rectangle-four"
          id="puppy-dob"
          placeholder="Day"
        />

        <input
          type="number"
          className="rectangle-five"
          id="puppy-dob"
          placeholder="Year"
        />
      </div>

      {/* Gender */}
      <div className="gender-checkbox">
        <label for="puppy-gender" className="gender">
          Gender:
        </label>

        <input
          type="checkbox"
          className="female"
          placeholder="Female"
          id="puppy-gender"
        />

        <input
          type="checkbox"
          className="male"
          placeholder="Male"
          id="puppy-gender"
        />
      </div>

      {/* Misc Notes */}
      <div className="misc-notes">
        <label for="puppy-notes" className="misc-title">
          Misc Notes:
        </label>

        <textarea
          className="misc-rectangle-six"
          placeholder="Add additional notes here"
        ></textarea>
      </div>

      {/* Form Action Buttons */}
      <Button className="rectangle-seven">Cancel</Button>

      <Button className="rectangle-eight">Submit</Button>
    </Container>
  );
}
