import './App.css';
import { SelectBuff } from './component/SelectBuff';
import { recipes } from './recipes';
import { useState } from 'react';
import { checkItemBuff } from './utility';

export type State = Record<string, boolean>;

const tableCols = [
  'img',
  'recipe name',
  'type',
  'buff',
  'ingredients',
  'alternative',
];

function App() {
  const [buffSelected, setBuffSelected] = useState('');
  const filteredRecipes = recipes.filter((item) =>
    checkItemBuff(buffSelected, item)
  );

  return (
      <section>
        <h1 className='recipes-title'>Reciples list</h1>

        <SelectBuff buff={buffSelected} setBuff={setBuffSelected} />

        <table className='recipes-box'>
          <thead>
            <tr>
              {tableCols.map((el) => (
                <th className='recipe-th' key={el}>
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRecipes.map(
              ({ id, name, icons, result, ingr, altIngr }) => (
                <tr key={name}>
                  <td>
                    <img
                      className='recipes-image'
                      src={`/images/${id + 1}.png`}
                      alt={name}
                      key={`${name}-${id}`}
                    />
                  </td>
                  <td className='recipes-name'>{name}</td>
                  <td className='icon-box'>
                    {icons.map((el: string) => (
                      <img
                        className='icon'
                        src={`/furies/${el}`}
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
                      <div className='ingredients'>
                        {ingr.map((el: string) => (
                          <p key={`${name}-${el}`}>{el}</p>
                        ))}
                      </div>
                    )}
                  </td>
                  <td>
                    {altIngr && (
                      <div className='ingredients'>
                        {altIngr.map((el: string) => (
                          <p key={`${name}-${el}`}>{el}</p>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </section>
  );
}

export default App;
