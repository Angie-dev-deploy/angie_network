const news: any = [
  {
    index: 0,
    title: "Articol 1",
    photo: require("@/assets/images/events/poza1.jpeg"),
    date: "10.10.2018", // Change to an older date
    text: "sdnhfb b ahsf bfaids baifba oiufbdaisbfiubfuiabigba dsfaui  uiab",
  },
  {
    index: 1,
    title: "Articol 2",
    photo: require("@/assets/images/events/poza1.jpeg"),
    date: "10.10.2019", // Change to an older date
    text: "sdnhfb b ahsf bfaids baifba oiufbdaisbfiubfuiabigba dsfaui  uiab",
  },
  {
    index: 2,
    title: "Articol 3",
    photo: require("@/assets/images/events/poza1.jpeg"),
    date: "10.10.2020", // Change to an older date
    text: "sdnhfb b ahsf bfaids baifba oiufbdaisbfiubfuiabigba dsfaui  uiab",
  },
  {
    index: 3,
    title: "Articol 4",
    photo: require("@/assets/images/events/poza1.jpeg"),
    date: "10.10.2021", // Change to an older date
    text: "sdnhfb b ahsf bfaids baifba oiufbdaisbfiubfuiabigba dsfaui  uiab",
  },
  {
    index: 4,
    title: "Articol 5",
    photo: require("@/assets/images/events/poza1.jpeg"),
    date: "10.10.2022", // Change to the newest date
    text: "sdnhfb b ahsf bfaids baifba oiufbdaisbfiubfuiabigba dsfaui  uiab",
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
