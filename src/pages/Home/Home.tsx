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

      <FlexLayout direction="column" gap="1rem">
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
            <Line percentage={65} mobilePercentage={25} />
          </FlexLayout>
          <Link className="view-all-link" to="/projects">
            view all{' '}
          </Link>
        </FlexLayout>
        <FlexLayout
          className="projects-container"
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
            <FlexLayout direction="row" gap="1rem" justifyContent="flex-start">
              <Button
                variant="primary"
                target="_blank"
                link="https://devmarojs.github.io/"
              >
                Live
              </Button>
              <Button
                variant="secondary"
                target="_blank"
                link="https://github.com/DevMaroJS/devmarojs.github.io"
              >
                Repo
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
      {/* <div>
        <h2>#skills</h2>
        <div>
          <div></div>
          <div>cards</div>
        </div>
      </div>
      <div>#about-me</div>
      <div>#contacts</div> */}
    </StyledHome>
  );
};
