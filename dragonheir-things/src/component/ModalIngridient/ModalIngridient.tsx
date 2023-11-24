import { useLayoutEffect } from "react";
import { ingridientsUA } from "../../data/ingridients_ua";
import { useModalStore } from "../../store/store";
import { nanoid } from "nanoid";

export const ModalIngridient: React.FC = () => {
  const { id, isOpen, setIsOpen } = useModalStore();
  const ingredient = ingridientsUA.find((el) => el.id === id);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("scroll-lock", isOpen);
  }, [isOpen]);

  return (
    <>
      {" "}
      {isOpen && (
        <section
          className="modal"
          onClick={() => setIsOpen(!isOpen)}
          key={nanoid()}
        >
          <img src={ingredient?.iconPath} alt="icon" className="modal-img" />
          <div className="ingr-sellers ingr-caption">
            <span>Локація</span>
            <span>NPC</span>
            <span>Ціна</span>
          </div>
          {ingredient &&
            ingredient.data.map(({ location, seller_name, price }) => (
              <div className="ingr-sellers" key={nanoid()}>
                <span key={nanoid()}>{location}</span>
                <span key={nanoid()}>{seller_name}</span>
                <span key={nanoid()}>{price}</span>
              </div>
            ))}
        </section>
      )}
    </>
  );
};
