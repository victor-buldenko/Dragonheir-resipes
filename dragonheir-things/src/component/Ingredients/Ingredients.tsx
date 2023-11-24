import { Link } from "react-router-dom";
import { ingridientsUA } from "../../data/ingridients_ua";
import { ingrID } from "../../data/interfaces";
import { nanoid } from 'nanoid';
import { useModalStore } from "../../store/store";

type Props = {
  listIngr: ingrID[];
};
export const Ingredients: React.FC<Props> = ({ listIngr }) => {
  const { setIsOpen, setID } = useModalStore();
  const getIconPath = (arg: number) => ingridientsUA.find(el => el.id === arg)?.iconPath;
  const search = (arg: number) => {
    if (!arg) {
      return ''
    }

    const ingredient = ingridientsUA.find(el => el.id === arg);

    if(!ingredient) {
      return '';
    }

    return ingredient.name;
    };

  return (
  <>
   {
   listIngr.map(el => (
    el[1] !== 0 
      ?
      <Link 
        to='.'
        className="ingridient ingridient-link"
        key={nanoid()}
        onClick={() => {
          setIsOpen(true);
          setID(el[1]);          
        }} 
      >
        {`${el[0]} ${search(el[1])}`}
        <img src={getIconPath(el[1])} />
      </Link>
      : 
      <span 
        className="ingridient"
        key={nanoid()}
      >
        {`${el[0]} ${search(el[1])}`}
      </span>
    ))
    }
  </>
  );
};