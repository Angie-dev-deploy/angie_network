const news: any = [
  {
    index: 0,
    title: "Think BIG with ANGIE!",
    photo: require("../../public/images/newsImages/news1_photo1.jpeg"),
    photo_2: require("../../public/images/newsImages/news1_photo2.jpeg"),
    date: "23.11.2023",
    text: `
    <b>15-16.11.2023, Craiova, University House</b> <br/><br/>
    <p>This is the statement under which the first transnational meeting of the Academic Network for Innovative and Green Europe / ANGIE project took place.
    The representatives of 8 European universities and a university association met in Craiova to launch the newest project coordinated by the University of Craiova.</p>
    <br/>
    <p>It was a fruitful meeting, colleagues became friends, tasks became clear.
    We have started and in the next 24 months we will create a new master's study program dedicated to sustainable development for an innovative and eco Europe</p>
    `,
    text_2: `
    <p>Participants:</p>
    <ol style="margin-left: 16px;">
      <li><b>Emmanuel Ohene</b> / ACEEU GmbH,</li>
      <li><b>Ines Ascenso Pires, Luís Alves</b> / UNIVERSIDADE DE LISBOA,</li>
      <li><b>Damjan Klobcar</b> / UNIVERZA V LJUBLJANI,</li>
      <li><b>Andrej David</b> / ZILINSKA UNIVERSITA V ZILINE,</li>
      <li><b>Giuseppe Casalino</b> / POLITECNICO DI BARI,</li>
      <li><b>Manuel Gonzalez Sanchez</b> / UNIVERSIDAD DE MALAGA,</li>
      <li><b>Bianca Duldner-Borca</b> / FH OO FORSCHUNGS & ENTWICKLUNGS GmbH,</li>
      <li><b>Mihnea Stoica</b> / BABES BOLYAI UNIVERSITY,</li>
      <li><b>Dănuț Savu, Gabriel Benga, Dorel Berceanu, Sorin Savu, Dalia Simion, Daniela Tarniță</b> / UNIVERSITY OF CRAIOVA</li>
      <li>Students:
        <ul style="margin-left: 32px;">
          <li><b>Arianne-Maria Savu</b> / BABES BOLYAI UNIVERSITY</li>
          <li><b>Alexandru-Andrei Avram</b> / TECHNICAL UNIVERSITY OF CLUJ-NAPOCA</li>
          <li><b>Pavel Drăgan</b> / BUCHAREST TECHNICAL UNIVERSITY</li>
        </ul>
      </li>
    </ol>
    `,
  },
  {
    index: 1,
    title: "Article 2",
    photo: require("../../public/images/events/conference_1.jpeg"),
    photo_2: require("../../public/images/events/dinner_1.jpeg"),
    date: "10.10.2019", // Change to an older date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
  {
    index: 2,
    title: "Article 3",
    photo: require("../../public/images/events/conference_1.jpeg"),
    photo_2: require("../../public/images/events/dinner_1.jpeg"),
    date: "10.10.2020", // Change to an older date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
  {
    index: 3,
    title: "Article 4",
    photo: require("../../public/images/events/conference_1.jpeg"),
    photo_2: require("../../public/images/events/dinner_1.jpeg"),
    date: "10.10.2021", // Change to an older date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
  {
    index: 4,
    title: "Article 5",
    photo: require("../../public/images/events/conference_1.jpeg"),
    photo_2: require("../../public/images/events/dinner_1.jpeg"),
    date: "10.10.2022", // Change to the newest date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
].sort((a: any, b: any) => {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
});

export default news;
