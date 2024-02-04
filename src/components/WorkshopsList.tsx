import { nanoid } from 'nanoid';
import { workshopsList } from '../data/workshopsList';
import Workshop from './Workshop';

function WorkshopsLit(): JSX.Element {
  return (
    <>
      <div className="mt-32 ml-32">
        <h2>
          Nos ateliers
        </h2>
      </div>
      <div className="mt-10 mx-60 flex flex-col justify-center">
        {
          workshopsList.map((workshop) => (
            <div key={nanoid()}>
              <Workshop workshop={workshop} />
            </div>
          ))
        }
      </div>
    </>
  );
}

export default WorkshopsLit;