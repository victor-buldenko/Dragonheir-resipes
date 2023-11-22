
type Props = {
  style: string;
  state: {
    check: boolean;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export const FilterButton: React.FC<Props> = ({ style, state }) => {
  return (
    <button
      type="button"
      className={`herotypebutton ${style} ${state.check && "herotypebutton-check"}`}
      onClick={() => state.setCheck(( !(state.check) ))}
    />
  );
};
