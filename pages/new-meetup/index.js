// our-domain.com/new-meetup
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);

    const response = await fetch("/api/new-meetup", {
      //'/api/new-meetup' didnt work...
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);

    // const data = await response.json(); // that doesnt work
    const data = await response.text();

    // console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add React Meetups</title>
        <meta name="description" content="Browse a list of meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
