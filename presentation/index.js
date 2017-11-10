// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  html: require("../assets/html.jpg"),
  prog:require("../assets/prog.jpg"),
  htm5:require("../assets/Html-5.png"),
  desktop:require("../assets/desktop.png"),
  noviewport:require("../assets/noviewport.png"),
  viewport:require("../assets/viewport.png"),
  block:require("../assets/block.png"),
  lorem:require("../assets/lorem.png"),
  devtools:require("../assets/devtools.png"),
  container:require("../assets/container.png"),
  axis:require("../assets/axis.png"),
  column:require("../assets/column.png"),
  row:require("../assets/row.png"),
  justify:require("../assets/justify.png"),
  space:require("../assets/space.png"),
  wrap:require("../assets/wrap.png"),
  stretch:require("../assets/stretch.png"),
  aligncontent:require("../assets/aligncontent.png"),
  grow:require("../assets/grow.png"),
  order:require("../assets/order.png"),
  selfalign:require("../assets/selfalign.png"),
  basis:require("../assets/basis.png"),
  flexguide:require("../assets/flexguide.png"),
  helper:require("../assets/helper.png"),
  helper:require("../assets/forggy.png"),

};

preloader(images);

const theme = createTheme({
  primary: "#2d2d2d",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  white:"white",
  flexColor:"#F6FCF8"
}, {
  primary: "Helvetica",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Html and Css
          </Heading>
          <Text margin="10px 0 0" textColor="white" size={1} fit bold>
          EASY AND USEFUL
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            @maxkharena
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Трохи історії
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
        <Text size={6} textColor="white">Тім Бернерс-Лі представив HTML в дослідницькому центрі CERN( Європе́йська організація з я́дерних дослі́джень) в Женеві 1989 році</Text>
      </Slide>
      <Slide transition={["fade"]} bgColor="white" textColor="secondary">
          <Heading size={3} textColor="secondary" caps>Версії HTML</Heading>
          <List>
            <ListItem>HTML	1991</ListItem>
            <ListItem>HTML 2.0	1995</ListItem>
            <ListItem>HTML 3.2	1997</ListItem>
            <ListItem>HTML 4.01	1999</ListItem>
            <ListItem>HTML5	2014</ListItem>
            <ListItem>HTML5.1	2016</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.prog.replace("/", "")} margin="0px auto 0px" width="700px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.html.replace("/", "")} margin="0px auto 0px" width="450px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        
        <Text margin="10px 0 0" textColor="secondary" size={6} fit bold>
          Семантика та теги
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
          textSize="2rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.example")}
           margin="20px auto"
         />
       </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.2rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.code")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="white" textColor="primary">
       <Image src={images.htm5.replace("/", "")} margin="0px auto 0px" width="500px" />
       </Slide>
       <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.2rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.div")}
           margin="20px auto"
         />
       </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Теги meta та link
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.2rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.meta")}
           margin="20px auto"
         />
       </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Теги script та style
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.script")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
          Розділяй та володарюй!
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.2rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.goodscript")}
           margin="20px auto"
         />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Коротко про форми
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.form")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.form2")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Таблиці
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.table")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Viewport
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.desktop.replace("/", "")} width="1400px" margin="-250px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.noviewport.replace("/", "")}  height="800px" margin="-50px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
          textSize="1.2rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.viewport")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="white">
          <Image src={images.viewport.replace("/", "")}  height="800px" margin="-80px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
          https://whatwg.org/
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
          https://www.w3.org/
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Селектори та їх "вага"
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
          textSize="1.4rem"
           lang="css"
           source={require("raw-loader!../assets/deck.selectors")}
           margin="20px auto"
         />
       </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           "0,0,0,0"
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
          textSize="1.4rem"
           lang="css"
           source={require("raw-loader!../assets/deck.selectors2")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           !important is important!
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
          textSize="1.4rem"
           lang="css"
           source={require("raw-loader!../assets/deck.important")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
          textSize="1.2rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.sample")}
           margin="20px auto"
         />
       </Slide>
       <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Блочна модель 
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.block.replace("/", "")} margin="0px auto 0px" width="1050px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
          textSize="1.1rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.block")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="white">
          <Image src={images.lorem.replace("/", "")} margin="0px auto 0px" width="1050px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
          300px+10+10+20+20+10+10 = 380px;
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Інспектор елементів
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.devtools.replace("/", "")} margin="0px auto 0px" width="1050px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
          https://www.w3schools.com/css/css_boxmodel.asp
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
          Flexbox
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.5rem"
           lang="jsx"
           source={require("raw-loader!../assets/deck.container")}
           margin="-20px auto"
         />
       </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.flex")}
           margin="-20px auto"
         />
       </Slide>
        <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.container.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.axis.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.row")}
           margin="-20px auto"
         />
       </Slide>
        <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.column.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.row.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.7rem"
           lang="css"
           source={require("raw-loader!../assets/deck.justify")}
           margin="-20px auto"
         />
       </Slide>
        <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.space.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.7rem"
           lang="css"
           source={require("raw-loader!../assets/deck.wrap")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.wrap.replace("/", "")} margin="0 -65px 0" width="400px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.align")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.stretch.replace("/", "")} margin="0 -65px 0" width="700px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="1.6rem"
           lang="css"
           source={require("raw-loader!../assets/deck.aligncontent")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.aligncontent.replace("/", "")} margin="0 -65px 0" width="700px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.grow")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.grow.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.order")}
           margin="-20px auto"
         />
       </Slide>
        <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.order.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.selfalign")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.selfalign.replace("/", "")} margin="0 -65px 0" width="800px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.basis")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.basis.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <CodePane
           textSize="2rem"
           lang="css"
           source={require("raw-loader!../assets/deck.flexitem")}
           margin="-20px auto"
         />
       </Slide>
       <Slide transition={["fade"]} bgColor="flexColor">
          <Image src={images.basis.replace("/", "")} margin="0 -65px 0" width="1100px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Homework)
          </Text>
        </Slide>
       
        <Slide transition={["fade"]} bgColor="white">
        <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Шпаргалка по flexbox
          </Text>
          <Image src={images.helper.replace("/", "")} margin="0 -65px 0" width="500px" />
        </Slide>
        
        <Slide transition={["fade"]} bgColor="white">
        <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Урок по flexbox css-tricks
          </Text>
          <Image src={images.flexguide.replace("/", "")} margin="0 -65px 0" width="500px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
        <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
        FLEXBOX FROGGY навчальна гра 
          </Text>
          <Image src={images.flexguide.replace("/", "")} margin="0 -65px 0" width="500px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           "Зверстати" за допомогою flexbox 
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           домашню сторінку Google
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           Рішення задачі відправляти пул-реквестом
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
           в папку на репозиторії homeworks/html-css/username
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="white" caps>That's all folks</Heading>
        </Slide>
      </Deck>
    );
  }
}
