import styled from "styled-components";

const Home = props => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>Find telented pros in record time with upwork and keep business moving.</p>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section``;
export default Home;
