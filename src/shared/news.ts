const news: any = [
  {
    index: 0,
    title: "Article 1",
    photo: require("@/assets/images/events/conference_1.jpeg"),
    photo_2: require("@/assets/images/events/dinner_1.jpeg"),
    date: "10.10.2018", // Change to an older date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
  {
    index: 1,
    title: "Article 2",
    photo: require("@/assets/images/events/conference_1.jpeg"),
    photo_2: require("@/assets/images/events/dinner_1.jpeg"),
    date: "10.10.2019", // Change to an older date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
  {
    index: 2,
    title: "Article 3",
    photo: require("@/assets/images/events/conference_1.jpeg"),
    photo_2: require("@/assets/images/events/dinner_1.jpeg"),
    date: "10.10.2020", // Change to an older date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
  {
    index: 3,
    title: "Article 4",
    photo: require("@/assets/images/events/conference_1.jpeg"),
    photo_2: require("@/assets/images/events/dinner_1.jpeg"),
    date: "10.10.2021", // Change to an older date
    text: `Stay up-to-date with the latest happenings and exciting developments. Explore a wide range of news articles covering diverse topics, including technology, community events, and more. Whether you're interested in informative updates or looking for engaging stories, our news page has something for everyone.`,
    text_2: `Discover inspiring stories, stay informed about upcoming events, and delve into thought-provoking articles. We aim to provide you with a well-rounded news experience that caters to various interests.Bookmark this page and check back regularly for fresh content and insights. Thank you for being part of our news community!`,
  },
  {
    index: 4,
    title: "Article 5",
    photo: require("@/assets/images/events/conference_1.jpeg"),
    photo_2: require("@/assets/images/events/dinner_1.jpeg"),
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
