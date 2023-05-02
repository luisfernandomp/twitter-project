import "./styles.css";

export default function ContainerComponent({ children, centralizar }) {
  let classCentralizar = centralizar ? "container-flex" : "";

  return <div className={`container ${classCentralizar}`}>{children}</div>;
}
