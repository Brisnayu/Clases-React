import Button from "./components/Button";
import TextComponent from "./components/TextComponent";
import Title from "./components/Title";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <Layout direction={"column"}>
      <Button />
      <TextComponent background="defaul">Soy un texto Estilado</TextComponent>
      <TextComponent background="coral">Soy otro texto Estilado</TextComponent>
      <Title primary>Styled Components</Title>
    </Layout>
  );
}

export default App;
