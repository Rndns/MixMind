import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const onClikBtn = () => {
    navigate(-1);
  };
  return (
    <button onClick={onClikBtn}></button>
  );
}

export default BackButton