import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

LinkButton.propTypes = {
  index: PropTypes.number,
  link: PropTypes.string,
  title: PropTypes.string,
};

function LinkButton({ index, link, title, isBlack }) {
  return (
    <Link
      to={link}
      className={`text-xs md:text-sm font-medium ${isBlack ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors uppercase`}
    >
      {title}
    </Link>
  );
}

export default LinkButton;
