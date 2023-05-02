import ContainerComponent from "../../components/container-component";
import PostComponent from "../../components/post-component/post-component";
import "./styles.css";

export default function TwitterPost() {
  const post1 = {
    name: "Luis Fernando",
    user: "@luis_fernando",
    checked: false,
    message: "Aprendendo useState"
  };

  const post2 = {
    name: "Luis Fernando",
    user: "@luis_fernando",
    checked: false,
    message: "teste de teste"
  };

  return (
    <ContainerComponent centralizar="true">
      <PostComponent post={post1} />
      <PostComponent post={post2} />
    </ContainerComponent>
  );
}
