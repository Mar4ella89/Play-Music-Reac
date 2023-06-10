import PropTypes from 'prop-types';
import { Event } from 'AllExamples/EventBoard-example-2/components/Event/Event';
import { Board } from './EventBoard.styled';
import GoBackButton from 'components/generic/GoBackButton/GoBackButton';

const EventBoard = ({ events }) => {
  return (
    <>
      <GoBackButton path={'/examples'} />
      <Board>
        {events.map(({ name, location, speaker, type, time }) => (
          <Event
            key={name}
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            start={time.start}
            end={time.end}
          />
        ))}
      </Board>
    </>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};

export default EventBoard;
