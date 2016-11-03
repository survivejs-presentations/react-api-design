// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
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
  demo: require("../images/demo.gif").replace("/", ""),
  survivejs: require("../images/survivejs.png").replace("/", "")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React API Design
            </Heading>
            <Heading size={2} textColor="tertiary">
              Case <Link href="http://reactabular.js.org">Reactabular</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps size={1}>
              Agenda
            </Heading>
            <List>
              <Appear><ListItem>Evolution of Reactabular</ListItem></Appear>
              <Appear><ListItem>Lessons Learned</ListItem></Appear>
              <Appear><ListItem>Lerna</ListItem></Appear>
              <Appear><ListItem>API Patterns</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} caps>
              Reactabular
            </Heading>
            <img src={images.demo} height="524px" alt="Reactabular" />
            <Text>
              <Link href="https://twitter.com/sapegin">Thanks @sapegin</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Starting Points
            </Heading>
            <List>
              <Appear><ListItem>Needed a table for a CMS. No proper solutions at the time.</ListItem></Appear>
              <Appear><ListItem>Decided to push logic to a column definition</ListItem></Appear>
              <Appear><ListItem>Developed as a single package containing everything you need (monolith)</ListItem></Appear>
              <Appear><ListItem>First commit - 19.01.2015</ListItem></Appear>
              <Appear><ListItem>First public release three days later</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">
              0.2.0 - 22.01.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Data Definition
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_01.js")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Column Definition
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_02.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Table Definition
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_03.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.3.0 - 29.01.2015
            </Heading>
            <List>
              <Appear><ListItem>Further iteration on the basic ideas</ListItem></Appear>
              <Appear><ListItem>Pushed <Link href="https://www.npmjs.com/package/react-pagify">react-pagify</Link> to a package of its own. Used to experiment with React context based design.</ListItem></Appear>
              <Appear><ListItem>Separated pagination logic to <Link href="https://www.npmjs.com/package/segmentize">segmentize</Link> (no React dependency)</ListItem></Appear>
              <Appear><ListItem>Search, sort, inline editing through the cell interface</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Cell Formatting Interface
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_04.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.4.0 - 03.02.2015
            </Heading>
            <List>
              <Appear><ListItem>Refactored events as header (handlers) to pass to the component</ListItem></Appear>
              <Appear><ListItem>On retrospect, not flexible enough</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Header Interface
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_05.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.5.0 - 07.04.2015
            </Heading>
            <List>
              <Appear><ListItem>First external contribution</ListItem></Appear>
              <Appear><ListItem>Documentation improvements, React fatigue</ListItem></Appear>
              <Appear><ListItem>Initial tests</ListItem></Appear>
              <Appear><ListItem>More flexible sorting (basic algorithms)</ListItem></Appear>
              <Appear><ListItem>Highlighting search results</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.6.0 - 04.06.2015
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://www.bithound.io/github/reactabular/reactabular"><img src="https://www.bithound.io/github/reactabular/reactabular/badges/score.svg" alt="bitHound Score" /></Link> <Link href="https://david-dm.org/reactabular/reactabular"><img src="https://david-dm.org/reactabular/reactabular.svg" alt="Dependency status" /></Link></ListItem></Appear>
              <Appear><ListItem>More flexible highlighting interface</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.7.0 - 27.08.2015
            </Heading>
            <List>
              <Appear><ListItem>More external contributions (6 contributors by now)</ListItem></Appear>
              <Appear><ListItem><Link href="https://gitter.im/reactabular/reactabular"><img src="https://badges.gitter.im/Join%20Chat.svg" alt="Join the chat at https://gitter.im/reactabular/reactabular" /></Link> <Link href="https://secure.travis-ci.org/reactabular/reactabular"><img src="https://secure.travis-ci.org/reactabular/reactabular.svg" /></Link></ListItem></Appear>
              <Appear><ListItem>Allow custom props per row</ListItem></Appear>
              <Appear><ListItem>Support for editing complex objects</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.8.0 - 14.10.2015
            </Heading>
            <List>
              <Appear><ListItem>Realized setting row keys is a good idea (performance)</ListItem></Appear>
              <Appear><ListItem>More React fatigue (tooling keeps changing)</ListItem></Appear>
              <Appear><ListItem>Moved from Jest to Karma/Mocha</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.9.0 - 04.11.2015
            </Heading>
            <List>
              <Appear><ListItem>Dropped dev branch in favor of single one (kept getting PRs against master), not a lot of value in separation</ListItem></Appear>
              <Appear><ListItem>Split up documentation to multiple files over one huge README</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.10.0 - 19.01.2016
            </Heading>
            <List>
              <Appear><ListItem>11 external contributors</ListItem></Appear>
              <Appear><ListItem>header &rarr; columnNames</ListItem></Appear>
              <Appear><ListItem>className &rarr; headerClass</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.11.0 - 14.02.2016
            </Heading>
            <List>
              <Appear><ListItem>Multi-column sorting (external contribution)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.12.0 - 22.03.2016
            </Heading>
            <List>
              <Appear><ListItem>Wrote changelog (better late than never)</ListItem></Appear>
              <Appear><ListItem>Bumped lodash minimum version to 4.0 (new API) and fixed the imports</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.13.0 - 07.06.2016
            </Heading>
            <List>
              <Appear><ListItem>Support multiple search filters (external contribution)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              0.14.0 - 09.06.2016
            </Heading>
            <List>
              <Appear><ListItem>Force row key to be set</ListItem></Appear>
              <Appear><ListItem>Dropped certain heavy dependencies (react/lib/update, lodash/merge)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">
              Pääversiomuutospelko*
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              1.0.0 - 25.06.2016
            </Heading>
            <List>
              <Appear><ListItem>Almost complete rewrite sponsored by <Link href="http://www.kenandy.com/">Kenandy Inc.</Link></ListItem></Appear>
              <Appear><ListItem>Rewrote documentation using <Link href="https://interactivethings.github.io/catalog/">Catalog</Link></ListItem></Appear>
              <Appear><ListItem>Cleaned up core design - rows, column definition, React definition</ListItem></Appear>
              <Appear><ListItem>Monorepo using <Link href="https://lernajs.io/">Lerna</Link> and split to eight packages</ListItem></Appear>
              <Appear><ListItem>READMEs are aggregated as runnable documentation</ListItem></Appear>
              <Appear><ListItem>Started driving development through examples based on client needs (drag and drop, etc.)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              2.0.0 - 16.08.2016
            </Heading>
            <List>
              <Appear><ListItem>17(!) packages now</ListItem></Appear>
              <Appear><ListItem>Extracted <Link href="https://www.npmjs.org/package/react-edit">react-edit</Link>. Might go to a repository of its own later.</ListItem></Appear>
              <Appear><ListItem>Drag and drop helpers, tree helpers, search helpers, whatnot</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/reactabular-easy">reactabular-easy</Link> - Opinionated wrapper that loses some flexibility, but is easier to use (no need to glue parts together)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Data Definition
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_01.js")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Column Definition
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_06.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading fit>
              Table Definition
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_07.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              3.0.0 - 01.09.2016
            </Heading>
            <List>
              <Appear><ListItem>Virtualization (performance!), <Link href="https://www.npmjs.com/package/reactabular-virtualized">reactabular-virtualized</Link></ListItem></Appear>
              <Appear><ListItem>Minor API tweaks (onRow signature)</ListItem></Appear>
              <Appear><ListItem>Integrated virtualization and tree functionality to reactabular-easy</ListItem></Appear>
              <Appear><ListItem>3.0.6 - Reworked virtualization so that it works with Radium and allowed <code>BodyRow</code> <code>shouldComponentUpdate</code> to be set <code>true</code>.</ListItem></Appear>
              <Appear><ListItem>This should have been a minor version instead</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              4.0.0 - 12.09.2016
            </Heading>
            <List>
              <Appear><ListItem>Breaking change at <b>reactabular-easy</b> - Pushed <code>onDragColumn</code> control to user</ListItem></Appear>
              <Appear><ListItem>Single, urgent change forced SemVer push</ListItem></Appear>
              <Appear><ListItem>4.x series introduced extensions to different APIs (tree, easy, edit)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              5.0.0 - 28.09.2016
            </Heading>
            <List>
              <Appear><ListItem>Breaking change at <b>reactabular-easy</b> - Pushed toggle to <code>onToggleShowingChildren</code></ListItem></Appear>
              <Appear><ListItem>Maybe maintaining <b>reactabular-easy</b> at the same repository {`wasn't`} the brightest idea</ListItem></Appear>
              <Appear><ListItem>5.x series provided fixes especially to tree functionality. Also styling hooks through <code>props</code> interface.</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              6.0.0 - 14.10.2016
            </Heading>
            <List>
              <Appear><ListItem>Breaking changes to harmonize styling related naming and tree API signatures</ListItem></Appear>
              <Appear><ListItem>Moved back to Jest (fast and easy now)</ListItem></Appear>
              <Appear><ListItem>Added <code>scrollTo(index)</code> for virtualized tables</ListItem></Appear>
              <Appear><ListItem>I botched the initial release as Lerna {`didn't`} bump peer version ranges (bug?). Stronger prepublish flow would be nice.</ListItem></Appear>
              <Appear><ListItem>6.x series introduced smaller fixes and improved tree</ListItem></Appear>
              <Appear><ListItem>Increasing interest (30 contributors) and support requests</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Next Steps
            </Heading>
            <List>
              <Appear><ListItem>Improve tree abstraction further (now just utilities)</ListItem></Appear>
              <Appear><ListItem>Add missing tests (unit, acceptance, property based tests)</ListItem></Appear>
              <Appear><ListItem>Move logic parts repositories of their own</ListItem></Appear>
              <Appear><ListItem>Let community take over those repositories (thanks <b>git-toni</b>)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Lessons Learned
            </Heading>
            <List>
              <Appear><ListItem>Going to a monorepo was a good decision despite the glitches</ListItem></Appear>
              <Appear><ListItem>Especially architecture benefitted from the change</ListItem></Appear>
              <Appear><ListItem>Principles over features</ListItem></Appear>
              <Appear><ListItem>SemVer is easy to muck up</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              SemVer Explained
            </Heading>
            <List>
              <Appear><ListItem>SemVer === {`<major>.<minor>.<patch>`}</ListItem></Appear>
              <Appear><ListItem>ComVer === {`<not compatible>.<compatible>`}</ListItem></Appear>
              <Appear><ListItem>EmoVer === {`<emotional>.<major>.<minor>`}</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Example Driven Development
            </Heading>
            <List>
              <Appear><ListItem>Examples are grown into packages &rarr; becomes a new README</ListItem></Appear>
              <Appear><ListItem>As the package idea is solid, unit tests are written to support the functionality</ListItem></Appear>
              <Appear><ListItem><Link href="https://codecov.io/gh/reactabular/reactabular"><img src="https://codecov.io/gh/reactabular/reactabular/branch/master/graph/badge.svg" alt="codecov" /></Link> shows what to improve</ListItem></Appear>
              <Appear><ListItem>Ideally there would be acceptance tests against examples to avoid regressions</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">
              Lerna
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Lerna Briefly
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://lernajs.io/">Lerna</Link> is a tool for managing multiple packages</ListItem></Appear>
              <Appear><ListItem>Expects a <b>packages</b> directory</ListItem></Appear>
              <Appear><ListItem><b>lerna bootstrap</b> - Install dependencies of all packages</ListItem></Appear>
              <Appear><ListItem><b>lerna publish</b> - Update and publish changed packages</ListItem></Appear>
              <Appear><ListItem><b>lerna run</b> - Run a script on each package (say, a build script)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Lerna Versioning Modes
            </Heading>
            <List>
              <Appear><ListItem>Fixed (think Babel)</ListItem></Appear>
              <Appear><ListItem>Independent</ListItem></Appear>
              <Appear><ListItem>Ideal - <Link href="https://github.com/lerna/lerna/issues/298">hybrid mode</Link></ListItem></Appear>
              <Appear><ListItem>In hybrid mode you could have both fixed and independent packages at the same repository (think 1.x and 0.x)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              The Good
            </Heading>
            <List>
              <Appear><ListItem>Monorepo avoids configuration overhead (packaging, testing)</ListItem></Appear>
              <Appear><ListItem>One repository to maintain over many - Alternative: consume configuration as a dependency</ListItem></Appear>
              <Appear><ListItem>Easier to author packages &rarr; you make more packages</ListItem></Appear>
              <Appear><ListItem>Leads to decoupled design - Logic separate from React</ListItem></Appear>
              <Appear><ListItem>Possible to write integration tests</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              The Bad
            </Heading>
            <List>
              <Appear><ListItem>Monorepos {`aren't`} fully understood &rarr; Tooling not stable yet</ListItem></Appear>
              <Appear><ListItem>If you {`aren't`} careful, the repository can become huge (see Babel)</ListItem></Appear>
              <Appear><ListItem>Due to npm bug, manual releases are still needed &rarr; <b>lerna publish --skip-npm</b></ListItem></Appear>
              <Appear><ListItem>Harder to contribute due to the exotic setup?</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              The Ugly
            </Heading>
            <List>
              <Appear><ListItem>Single issue tracker, potentially harder to manage</ListItem></Appear>
              <Appear><ListItem>No automated releases yet. Ideal: tag &rarr; CI releases for you</ListItem></Appear>
              <Appear><ListItem>Changelog management is rough. Tooling might appear.</ListItem></Appear>
              <Appear><ListItem>Hard to collaborate if your monorepo is private and you want to contract</ListItem></Appear>
              <Appear><ListItem>Git log can become rather large</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading caps fit size={1} textColor="tertiary">
              API Patterns
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              React Component Wrapping
            </Heading>
            <CodePane lang="jsx">
          {`const wrapper = ({ children }) => (
  <div className="table">
    {children}
  </div>
);

...

<Table.Provider components={{ table: wrapper }} ...>
  <Table.Body rows={rows} rowKey="id" />
</Table.Provider>`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps size={1}>
              Curry
            </Heading>
            <CodePane lang="javascript">
          {`const editable = edit.edit({
  isEditing: ({ columnIndex, rowData }) => { ... },
  onActivate: ({ columnIndex, rowData }) => { ... },
  onValue: ({ value, rowData, property }) => { ... }
});

...

columns: [
  {
    property: 'name',
    header: {
      label: 'Name'
    },
    cell: {
      transforms: [editable(edit.input())]
    }
  }
]`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps size={1}>
              Data Flow
            </Heading>
            <CodePane lang="jsx">
          {`render() {
  const {
    searchColumn, columns, sortingColumns, query
  } = this.state;
  const visibleColumns = columns.filter(column => column.visible);
  const rows = compose(
    tree.filter('showingChildren'),
    tree.sort({
      columns,
      sortingColumns
    }),
    tree.search({ columns, query })
  )(this.state.rows);

  ...
}`}
            </CodePane>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="http://www.survivejs.com/">
              <Heading size={1}>
                SurviveJS
              </Heading>
            </Link>
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
        </Deck>
      </Spectacle>
    );
  }
}
