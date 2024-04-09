import { Switch, Carousel } from 'antd';
import { useState } from 'react';
import { imageList } from '../../data/imageList';
import { nanoid } from 'nanoid';

function ActivityWorkshop4(): JSX.Element {
  const [goodAnswer, setGoodAnswer] = useState(false);

  return (
    <div className='w-screen h-screen bg-[#303030]'>
      <div className='pt-2 pr-2 flex justify-end'>
        <Switch
          defaultChecked={goodAnswer}
          onChange={(checked: boolean) => {
            setGoodAnswer(checked);
          }} />
      </div>
      <div className='w-1/4 h-1/4 mx-auto pt-20'>
        <Carousel autoplay={false} dots>
          {
            imageList.map((image) => (
              <img src={image.src} alt={goodAnswer ? image.goodAlt : image.badAlt} key={nanoid()} />
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

export default ActivityWorkshop4;