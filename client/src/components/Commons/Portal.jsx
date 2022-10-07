import reactDom from "react-dom";

export default function Portal(props) {
  const el = document.getElementById("modal");
  return reactDom.createPortal(props.children, el);
}
