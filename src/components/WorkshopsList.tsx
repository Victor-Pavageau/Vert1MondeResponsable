import { nanoid } from 'nanoid';
import { workshopsList } from '../data/workshopsList';
import Workshop from './Workshop';

function WorkshopsLit(): JSX.Element {
  return (
    <>
      <div className="mt-24 flex justify-center">
        <h2 id="ateliers">
          Nos ateliers
        </h2>
      </div>
      <div className="mt-10 mx-10 lg:mx-60 text-sm lg:text-base flex flex-col justify-center">
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