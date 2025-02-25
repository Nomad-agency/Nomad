import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
LinkButton.propTypes = {
  index: PropTypes.number,
  link: PropTypes.string,
  title: PropTypes.string,
};

function LinkButton({ index, link, title, isBlack }) {
  const navigate = useNavigate()
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
  return (
    <Link
      onClick={(e) => handleScrollToSection(e, link)}
      to={link}
      className={`text-xs md:text-sm font-medium ${isBlack ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors uppercase`}
    >
      {title}
    </Link>
  );
}

export default LinkButton;
