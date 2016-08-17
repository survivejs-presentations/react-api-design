// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = {
  assembly: require("../assets/assembly.jpg").replace("/", ""),
  babel: require("../assets/babel.jpg").replace("/", ""),
  city: require("../assets/city.jpg").replace("/", ""),
  components: require("../assets/components.jpg").replace("/", ""),
  cowboy: require("../assets/cowboy.jpg").replace("/", ""),
  enterprise: require("../assets/enterprise.jpg").replace("/", ""),
  jumper: require("../assets/jumper.jpg").replace("/", ""),
  legos: require("../assets/legos.jpg").replace("/", ""),
  survivejs: require("../assets/survivejs.png").replace("/", ""),
  tools: require("../assets/tools.jpg").replace("/", ""),
  types: require("../assets/types.jpg").replace("/", ""),
  unique: require("../assets/unique.png").replace("/", "")
};

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React API Design
            </Heading>
            <Heading size={2} textColor="white">
              Case Reactabular
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.troll} bgDarken={0.85}>
            <Heading caps fit size={1} textColor="tertiary">
              Questions?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Heading size={1} textColor="primary">
              SurviveJS
            </Heading>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>

          <Slide transition={slideTransition} textColor="primary">
            <Heading caps fit size={1} textColor="secondary">
              Image Credits
            </Heading>
            <Markdown>
              {`
* [estefania17 (PD)](https://pixabay.com/en/lego-blocks-bricks-toy-game-252602/), [Kae (PD)](https://commons.wikimedia.org/wiki/File:Componentes.JPG)
* [elijay (PD)](https://pixabay.com/en/cowboy-horse-dog-pasture-western-1130695/), [skeeze (PD)](https://pixabay.com/en/leonard-nimoy-william-shatner-393861/)
* [Efraimstochter (PD)](https://pixabay.com/en/wheels-machine-installation-art-784865/)
              `}
            </Markdown>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
