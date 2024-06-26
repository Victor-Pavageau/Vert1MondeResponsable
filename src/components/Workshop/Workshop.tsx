import { useNavigate } from 'react-router-dom';
import { workshopsList } from '../../data/workshopsList';
import type { WorkshopType } from '../../types';

type Props = {
  workshop: WorkshopType;
};

function Workshop(props: Props): JSX.Element {
  const { workshop } = props;
  const navigate = useNavigate();

  const isLastWorkshop = workshop === workshopsList[workshopsList.length - 1];

  return (
    <div className={`
      flex flex-col w-full gap-5 lg:gap-20 lg:flex-row items-center
      ${!isLastWorkshop && 'mb-10 lg:mb-24'}
      ${workshop.id % 2 === 0 && 'lg:!flex-row-reverse'}
      `}>
      <div className='lg:w-1/2'>
        <h3 className="mb-5" onClick={() => {
          workshop.id === 4 && navigate('/activity-workshop-4');
        }}>
          {workshop.name}
        </h3>
        <p className='whitespace-pre-wrap'>
          {workshop.description}
        </p>
      </div>
      <div className='lg:w-1/2'>
        <img className="max-w-full rounded"
          src={workshop.image}
          alt={workshop.name} />
      </div>
    </div>
  );
}

export default Workshop;