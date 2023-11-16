import { Recipes } from "../../data";
import { checkRarity } from "../../utility";


const tableCols = [
  "img",
  "recipe name",
  "type",
  "buff",
  "ingredients",
  "alternative",
];

type Props = {list: Recipes[]};
export const RecipesTable: React.FC<Props> = ({ list }) => {
  return (
          <table className="recipes-box">
        <thead>
          <tr>
            {tableCols.map((el) => (
              <th className="recipe-th" key={el}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, name, icons, result, ingr, altIngr }) => (
            <tr key={name}>
              <td className={checkRarity(id)}>
                <img
                  className="recipes-image"
                  src={`/images/${id + 1}.png`}
                  alt={name}
                  key={`${name}-${id}`}
                />
              </td>
              <td className="recipes-name">{name}</td>
              <td className="icon-box">
                {icons.map((el: string) => (
                  <img
                    className="icon"
                    src={`/fury/${el}`}
                    alt={el}
                    key={`${name}-${el}`}
                  />
                ))}
              </td>
              <td>
                {result.map((el: string) => (
                  <p key={`${name}-${el}`}>{el}</p>
                ))}
              </td>
              <td>
                {ingr && (
                  <div className="ingredients">
                    {ingr.map((el: string) => (
                      <p key={`${name}-${el}`}>{el}</p>
                    ))}
                  </div>
                )}
              </td>
              <td>
                {altIngr && (
                  <div className="ingredients">
                    {altIngr.map((el: string) => (
                      <p key={`${name}-${el}`}>{el}</p>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};