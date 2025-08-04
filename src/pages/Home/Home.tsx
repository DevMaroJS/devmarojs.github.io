import { Button, Card, FlexLayout } from '@components';
import { ColorZone, StyledHome } from './Home.styled';

export const Home: React.FC = () => {
  return (
    <StyledHome direction="column">
      <FlexLayout
        direction="row"
        justifyContent="space-around"
        padding="2rem 0"
        gap="2rem"
        minHeight="auto"
      >
        <div className="title-container">
          <h1>
            This is <ColorZone>Yldemaro</ColorZone>, <br />A{' '}
            <ColorZone>full-stack</ColorZone> developer.
          </h1>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim fugit
            nobis dicta totam maxime, tempore repudiandae asperiores distinctio
            facere neque voluptate numquam ut odio praesentium eveniet, officia
            voluptatum nulla non.
          </p>
          <Button variant="primary" link="/contact">
            Contact me!!
          </Button>
        </div>
        <div className="currently-container">
          <img src="" alt="" />
          <Card width="70%">
            <span className="square" />
            <span>
              Currently working on{' '}
              <span className="current-project">Portfolio</span>
            </span>
          </Card>
        </div>
      </FlexLayout>
      {/* <FlexLayout
        direction="column"
        justifyContent="space-around"
        minHeight="auto"
        alignItems="end"
        padding="3rem 5rem"
      >
        <Card>
          <span>With great power comes great responsibility</span>
        </Card>
        <Card>
          <span>- Uncle Ben</span>
        </Card>
      </FlexLayout> */}
      {/* <div>
        <div>
          <h2>#projects</h2>
          <Link to="/projects">view all </Link>
        </div>
        <div>cards</div>
      </div>
      <div>
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
