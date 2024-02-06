import { workshopsList } from '../../data/workshopsList';
import type { WorkshopType } from '../../types';

type Props = {
  workshop: WorkshopType;
};

function Workshop(props: Props): JSX.Element {
  const { workshop } = props;

  return (
    <div className={`flex flex-col gap-5 lg:gap-20 lg:flex-row items-center ${(workshop !== workshopsList.slice(-1)[0]) && 'mb-10 lg:mb-24'} ${workshop.id % 2 === 0 && 'lg:!flex-row-reverse'}`}>
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