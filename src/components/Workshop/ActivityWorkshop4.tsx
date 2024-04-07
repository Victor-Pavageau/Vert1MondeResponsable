import { Switch, Carousel } from 'antd';
import { useState } from 'react';
import { imageList } from '../../data/imageList';

function ActivityWorkshop4(): JSX.Element {
  const [goodAnswer, setGoodAnswer] = useState(false);

  return (
    <div className='w-screen h-screen bg-[#303030]'>
      <div className='pt-10 flex items-center gap-5 text-white justify-center'>
        <h4 className='font-thin'>
          Description détaillée
        </h4>
        <Switch
          defaultChecked={goodAnswer}
          onChange={(checked: boolean) => {
            setGoodAnswer(checked);
          }} />
      </div>
      <div className='w-1/4 h-1/4 mx-auto pt-20'>
        <Carousel autoplay={false} dots style={{ width: '100%', height: '100%' }}>
          {
            imageList.map((image) => (
              <img src={image.src} alt={goodAnswer ? image.goodAlt : image.badAlt} />
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

export default ActivityWorkshop4;