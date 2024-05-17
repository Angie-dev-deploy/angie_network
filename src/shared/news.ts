const news: any = [
  {
    index: 0,
    title: "Think BIG with ANGIE!",
    photo: require("../../public/images/newsImages/news1/news1_photo1.jpeg"),
    photo_2: require("../../public/images/newsImages/news1/news1_photo2.jpeg"),
    date: "23 November 2023",
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
    title: "University of Zilina (Slovakia)",
    subtitle: "Project partner: Department of Water Transport",
    photo: require("../../public/images/newsImages/news2/zilinska1.jpg"),
    photo_2: require("../../public/images/newsImages/news2/zilinska2.jpg"),
    date: "15 May 2024",
    text: `<p>University of Žilina (UNIZA) with 70 years of history belongs to one of the
    leading educational and scientific institutions in Slovakia. With its rich
    tradition it occupies a significant place among Slovak universities. This fact is
    not only connected with the number of students or offer of interesting and
    quality study programmes but the university also has the significant research
    and foreign activities. The current university is no longer focused only on
    transport and communications. It is a broadly-conceived university located in
    a unique university campus at Veľký Diel. It has seven faculties (the Faculty of
    Operation and Economics of Transport and Communications, the Faculty of
    Civil Engineering, the Faculty of Mechanical Engineering, the Faculty of
    Electrical Engineering and Information Technology, Faculty of Management
    Science and Informatics, the Faculty of Security Engineering, the Faculty of
    Humanities)</p>`,
    text_2: `<p>The Department of Water Transport is one of the profile departments of the
    Faculty of Operation and Economics of Transport and Communications at the
    University of Žilina (Slovakia). The Department was established in 1991 as a
    result of the lack of well-qualified staff who could work in the field of inland
    navigation in Slovakia.</p>
    <br/>
    <p>The study of water transport is modern, innovative, and interesting. The
    theoretical training is of high quality, including subjects recommended by
    practice. The innovative study includes a virtual environment in which
    students verify the acquired knowledge on a vessel control simulator in the
    department&#39;s specialized laboratory. Students will support their theoretical
    knowledge in practice through excursions in ports, terminals, institutions
    dealing with water transport and onboard. The Department of Water Transport
    closely cooperates with practices and companies that are among the largest
    and best in the field of water transport.</p>`,
  },
].sort((a: any, b: any) => {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  } else {
    return 0;
  }
});

export default news;
