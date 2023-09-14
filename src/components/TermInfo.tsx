import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>guest</User>@<WebsiteName>kurogeek.com</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
