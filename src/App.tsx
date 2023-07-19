import { styled } from "styled-components";
import { Header } from "./components/Header";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Wrapper>
      <Header title="Analytics" icon="" />
    </Wrapper>
  );
}

export default App;
