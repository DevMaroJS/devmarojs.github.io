import { Button, Card, FlexLayout } from '@components';
import { ColorZone, Line, StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import PortfolioPreview from '@assets/default-featured.png';

export const Home: React.FC = () => {
  return (
    <StyledHome direction="column">
      <FlexLayout
        className="home-container"
        direction="column"
        justifyContent="space-between"
        gap="1rem"
      >
        <FlexLayout
          className="title-currently-container"
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <div className="title-container">
            <h1>
              This is <ColorZone>Yldemaro</ColorZone>, <br />A{' '}
              <ColorZone>full-stack</ColorZone> developer.
            </h1>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              fugit nobis dicta totam maxime, tempore repudiandae asperiores
              distinctio facere neque voluptate numquam ut odio praesentium
              eveniet, officia voluptatum nulla non.
            </p>
            <Button variant="primary" link="/contact">
              Contact me!!
            </Button>
          </div>
          <div className="currently-container">
            <img src="" alt="" />
            <Card
              width="70%"
              contentAlign="flex-start"
              className="currently-card"
            >
              <span className="square" />
              <span>
                Currently working on{' '}
                <span className="current-project">Portfolio</span>
              </span>
            </Card>
          </div>
        </FlexLayout>
        <FlexLayout direction="row" justifyContent="center" alignItems="center">
          <FlexLayout
            direction="column"
            justifyContent="space-around"
            alignItems="end"
          >
            <Card className="quote-card">
              <span>With great power comes great responsibility</span>
            </Card>
            <Card width="140px" className="sign-card">
              <span>- Uncle Ben</span>
            </Card>
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>

      <FlexLayout className="projects-container" direction="column" gap="1rem">
        <FlexLayout
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FlexLayout
            className="section-title-container"
            direction="row"
            gap="1rem"
            alignItems="center"
            justifyContent="flex-start"
          >
            <h2>
              <ColorZone>#</ColorZone>projects
            </h2>
            <Line percentage={65} mobilePercentage={20} />
          </FlexLayout>
          <Link className="view-all-link" to="/projects">
            {`view all ~~>`}
          </Link>
        </FlexLayout>
        <FlexLayout
          className="projects-card-container"
          direction="row"
          gap="5rem"
          justifyContent="flex-start"
        >
          <Card
            className="featured"
            width="33%"
            description="React, Typescript, Styled components."
            bodyAlignment="column"
            alignItems="flex-start"
            image={PortfolioPreview}
          >
            <h2>Portfolio</h2>
            <span>
              This is my personal portfolio, built with React, Typescript and
              Styled components.
            </span>
            <FlexLayout
              className="buttons-container"
              direction="row"
              gap="1rem"
              justifyContent="flex-start"
            >
              <Button
                variant="primary"
                target="_blank"
                link="https://devmarojs.github.io/"
              >
                {`Live |>`}
              </Button>
              <Button
                variant="secondary"
                target="_blank"
                link="https://github.com/DevMaroJS/devmarojs.github.io"
              >
                {`Github <~>`}
              </Button>
            </FlexLayout>
          </Card>
          {/* <Card width="33%" className="featured" description="...">
            <span>Empty</span>
          </Card>
          <Card width="33%" className="featured" description=" ...">
            <span>Empty</span>
          </Card> */}
        </FlexLayout>
      </FlexLayout>
      <FlexLayout className="skills-container" direction="column" gap="1rem">
        <FlexLayout
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FlexLayout
            className="section-title-container"
            direction="row"
            gap="1rem"
            alignItems="center"
            justifyContent="flex-start"
          >
            <h2>
              <ColorZone>#</ColorZone>skills
            </h2>
            <Line percentage={45} mobilePercentage={55} />
          </FlexLayout>
        </FlexLayout>
        <FlexLayout
          className="skills-card-container"
          direction="row"
          gap="1rem"
          justifyContent="flex-start"
        >
          <Card
            className="skills-card"
            width="20%"
            title="Languages"
            description="Javascript Typescript Python"
            bodyAlignment="column"
            alignItems="flex-start"
          />
          <Card
            className="skills-card"
            width="20%"
            title="Frameworks"
            description="ReactJs NextJs Angular Express.js Flask"
            bodyAlignment="column"
            alignItems="flex-start"
          />
          <Card
            className="skills-card"
            width="20%"
            title="Databases"
            description="MySql Postgres MongoDB Firebase"
            bodyAlignment="column"
            alignItems="flex-start"
          />
          <Card
            className="skills-card"
            width="20%"
            title="Tools"
            description="VSCode Linux Git"
            bodyAlignment="column"
            alignItems="flex-start"
          />
          <Card
            className="skills-card"
            width="20%"
            title="Others"
            description="HTML CSS Sass Tailwind MCP REST API "
            bodyAlignment="column"
            alignItems="flex-start"
          />
        </FlexLayout>
      </FlexLayout>
      <FlexLayout className="about-me-container" direction="column" gap="1rem">
        <FlexLayout
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FlexLayout
            className="section-title-container"
            direction="row"
            gap="1rem"
            alignItems="center"
            justifyContent="flex-start"
          >
            <h2>
              <ColorZone>#</ColorZone>about-me
            </h2>
            <Line percentage={55} mobilePercentage={45} />
          </FlexLayout>
        </FlexLayout>
        <FlexLayout
          className="about-me-text-container"
          direction="column"
          gap="1rem"
          justifyContent="flex-start"
        >
          <span>Hello, I'm Yldemaro!</span>
          <span>
            Full-Stack Developer with 8+ years of experience building and
            delivering high-quality, scalable web applications. Skilled in
            JavaScript and TypeScript across both front-end and back-end
            ecosystems, including frameworks and libraries such as Angular,
            ReactJS, Next.js, ExpressJS, NestJS, and Serverless architectures.
          </span>
          <span>
            Proficient in styling technologies (SCSS, SASS, LESS, Styled
            Components) and experienced with relational and NoSQL databases like
            MySQL, PostgreSQL, MongoDB, and Firebase. A passionate lifelong
            learner who thrives on exploring emerging technologies and staying
            ahead of industry trends to deliver modern, impactful solutions.
          </span>
        </FlexLayout>
      </FlexLayout>
    </StyledHome>
  );
};
