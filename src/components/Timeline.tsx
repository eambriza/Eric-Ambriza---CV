import { timelineData } from '@/data/timeline';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">
        {timelineData.length > 0 &&
          timelineData.map((item, idx) => (
            <TimelineItem
              key={idx}
              title={item.title}
              institution={item.institution}
              description={item.description}
              credentialLink={item.credentialLink}
            />
          ))}
      </div>
    </div>
  );
};

export default Timeline;