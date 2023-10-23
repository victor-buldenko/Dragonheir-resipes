import { buffList } from '../../recipes';
import styles from './selectbuff.module.css';

type Props = {
  buff: string;
  setBuff: React.Dispatch<React.SetStateAction<string>>;
};
export const SelectBuff: React.FC<Props> = ({ buff, setBuff }) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Оберіть тип необхідного бафа
      </h3>
      <select
        className={styles.select}
        value={buff}
        onChange={(e) => setBuff(e.target.value)}
      >
        {buffList.map((el) => (
          <option className={styles.option} key={el}>
            {el}
          </option>
        ))}
      </select>
    </section>
  );
};
