import RotatingWord from '../../../../../components/Main/component/RotatingWord/index.jsx';

const TitleSection = () => {
  const words = ['новому', 'смелому', 'значимому'];

  return (
    <>
      <h1 className="text-[26px] xs:text-[28px] sm:text-[45px] md:text-[64px] lg:text-[85px] xl:text-[101px] font-medium leading-[20px] sm:leading-[50px] md:leading-[68.9px] lg:leading-[90.9px] text-[#C4C4C4]  tracking-[-0.030em] relative">
        <span className="text-center">Сделай шаг к  </span>
        <span className="text-center">
          <span className="text-secondary">
            <RotatingWord words={words} duration={2.5} fade={1} />
          </span>
          <span className="text-secondary absolute right-0"> —</span>
        </span>
      </h1>
      <div className="text-center text-[26px] xs:text-[28px] sm:text-[45px] md:text-[64px] lg:text-[85px] xl:text-[101px] font-medium leading-[36px] md:leading-[68.9px] lg:leading-[90.9px] text-[#C4C4C4]  tracking-[-0.030em]">напиши нам</div>
    </>
  );
};

export default TitleSection;
