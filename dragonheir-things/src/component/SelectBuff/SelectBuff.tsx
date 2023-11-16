import { buffList } from "../../data";
import styles from "./selectbuff.module.css";

type Props = {
  buff: string;
  setBuff: React.Dispatch<React.SetStateAction<string>>;
};

type NameUA = Record<string, string>;

const nameUA: NameUA = {
  all: "усі",
  attack: "шкода",
  defence: "захист",
  health: "здоров'я",
  resist: "опір",
  accuracy: "точність",
  fire: "вогонь",
  ice: "лід",
  lightning: "блискавка",
  necro: "смерть",
  poison: "отрута",
  radiance: "сяйво",
  "talk to animal": "розмовляти з твариною",
  movespeed: "швидкість пересування",
  sweets: "солодощі",
};

const selectNameUA = (arg: keyof NameUA): string => nameUA[arg];

export const SelectBuff: React.FC<Props> = ({ buff, setBuff }) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Оберіть тип необхідного бафа</h3>
      <select
        className={styles.select}
        value={buff}
        onChange={(e) => setBuff(e.target.value)}
      >
        {buffList.map((el) => (
          <option className={styles.option} value={el} key={el}>
            {selectNameUA(el)}
          </option>
        ))}
      </select>
    </section>
  );
};
