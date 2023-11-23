import classNames from "classnames";

type Props = {
  status: boolean;
  click: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Burger: React.FC<Props> = ({ status, click }) => {
  return (
    <button
      type="button"
      onClick={() => click(!status)}
      className={classNames("burger-button", { open: status })}
    >
      <span className="burger-line top"></span>
      <span className="burger-line mid"></span>
      <span className="burger-line bot"></span>
    </button>
  );
};
