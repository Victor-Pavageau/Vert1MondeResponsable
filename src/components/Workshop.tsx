import { workshopsList } from '../data/workshopsList';
import type { Workshop } from '../types';

type Props = {
  workshop: Workshop;
};

function Workshop(props: Props): JSX.Element {
  const { workshop } = props;

  return (
    <div className={`flex gap-20 items-center ${(workshop !== workshopsList.slice(-1)[0]) && 'mb-32'} ${workshop.id % 2 === 0 && 'flex-row-reverse'}`}>
      <div>
        <h3 className="mb-5">
          {workshop.name}
        </h3>
        <p>
          {workshop.description}
        </p>
      </div>
      <div>
        <img className="max-w-full rounded" src={workshop.image} alt={workshop.name} />
      </div>
    </div>
  );
}

export default Workshop;