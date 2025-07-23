import { Chrono } from "react-chrono";


function Timeline() {
  const items = [
  {
    title: "March 2023-March 2025",
    cardTitle: "Digital Applied Learning and Innovation (DALI) Lab",
    cardSubtitle: "Software Developer",
  },
  {
    title: "June 2024-August 2024",
    cardTitle: "Quantum Gears",
    cardSubtitle: "Software Developer",
  },
  {
    title: "January 2023-June 2024",
    cardTitle: "Undergraduate Research Assistantship at Dartmouth",
    cardSubtitle: "Economic Research Assistant",

  },
  {
    title: "July 2023-May 2024",
    cardTitle: "Chambiar AI",
    cardSubtitle: "Fullstack Developer",
  },
  {
    title: "March 2022-June 2022",
    cardTitle: "The Bezanilla Lab",
    cardSubtitle: "Laboratory Technician",
  },
  {
    title: "September 2017-November 2021",
    cardTitle: "Westwood Youth Soccer",
    cardSubtitle: "Soccer Referee/Coach/Evaluator",
  },
  {
    title: "June 2018-August 2021",
    cardTitle: "Hale Reservation / Self Employed",
    cardSubtitle: "Lifeguard + Swim Instructor",
  },
  {
    title: "March 2020-September 2021",
    cardSubtitle: "COVID Delivery Driver",
    cardTitle: "Jin's Fine Asian Cuisine",  
  },
  {
    title: "December 2018-March 2019",
    cardSubtitle: "Youth Basketball Commentator",
    cardTitle: "Westwood Youth Basketball",
  },
  {
    title: "June 2017-Present",
    cardTitle: "Self-Employed",
  
    cardSubtitle: "Tutor",
  }
  
  ]



  const fontSizes = {
    cardSubtitle: '1.4rem',
    cardText: '1rem',
    cardTitle: '1.7rem',
    title: '1rem',
  }

  const theme = {
    primary: '#00693e',
    cardTitleColor: 'black',
    cardSubtitleColor: '#00693e',
    cardBgColor: 'white',
    cardForeColor: 'white',
    titleColor: 'black',
    titleColorActive: 'black',

  }
  return (
  <Chrono items={items} mode="VERTICAL" allowDynamicUpdate
    activeItemIndex={29}
    disableClickOnCircle={false} theme={theme} fontSizes={fontSizes}
    disableToolbar={true} lineWidth={5} useReadMore={false} cardHeight={"fit-content"}
    cardWidth={1000}
    nestedCardHeight={0}
  />)
}

export default Timeline