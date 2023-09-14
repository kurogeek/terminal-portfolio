import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I'm kurogeek, but my name is <HighlightSpan>Phanupong Janthapoon</HighlightSpan>
      </p>
      <p>
        I'm <HighlightAlt>a software engineer with some dev-ops skills</HighlightAlt> currently live in
        Chiang Mai, Thailand.
      </p>
      <p>
        I write software and solve problems.
      </p>
      <p>
        Currently, I'm on the mission on bringing back the internet and software from big tech companies.
      </p>
    </AboutWrapper>
  );
};

export default About;
