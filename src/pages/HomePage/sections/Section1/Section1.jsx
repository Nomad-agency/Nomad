import PropTypes from 'prop-types';
import RotatingWord from '../../components/Main/component/RotatingWord/index.jsx';

Section1.propTypes = {
  refData: PropTypes.shape({
    section1Ref: PropTypes.object.isRequired,
  }).isRequired,
  isRotatingWord: PropTypes.bool.isRequired,
};

export default function Section1({ refData, isRotatingWord }) {
  const words = ['limits', 'frames', 'brakes'];

  return (
    <section
      ref={refData.section1Ref}
      className="container mx-auto mt-[5.625rem]"
      style={{
        zIndex: -2,
      }}
    >
      <div className="text-[2rem] md:text-[5rem] lg:text-[6.3125rem] tracking-tighter sm:tracking-tight relative" id="about">
        <span className="font-lastik text-primary font-[400]">&quot; We have </span>
        <span className="font-[500] whitespace-pre">
          no <RotatingWord words={words} duration={2.5} fade={1} isAnimation={isRotatingWord} />
        </span>
        <span className="absolute right-16 sm:right-48 md:right-8 lg:right-24 xl:right-[17rem]"> —</span>
      </div>
      <div className="text-[2rem] md:text-[5rem] lg:text-[6.3125rem] text-primary sm:text-right mt-[-0.9rem] md:mt-[-2.5rem] lg:mt-[-3.75rem] tracking-tight">
        <span className="block sm:inline-block text-primary font-[500] text-center sm:text-right leading-10 sm:leading-[60px]">physical</span>
        <span className="block sm:inline-block font-[400] font-lastik whitespace-pre text-right mt-[-0.9rem] sm:mt-0">
          {' '}
          or creative &quot;
        </span>
      </div>
    </section>
  );
}
