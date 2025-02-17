const TitleSection = ({ projectTitle, clientTitle, nowrap }) => {
  return (
    <>
      <div className="flex justify-between items-center text-[#9F9F9F] text-[0.625rem] sm:text-sm uppercase">
        <span>[проект]</span>
        <span>[клиент]</span>
      </div>

      <div className="flex justify-between items-center text-secondary font-semibold text-[0.9375rem] sm:text-[1.25rem] md:text-[1.875rem] lg:text-[2.5rem] xl:text-[3.125rem] tracking-tighter mt-5 leading-[12.5px] sm:leading-[20.5px] md:leading-[60.5px] uppercase">
        <span className="whitespace-nowrap">{projectTitle}</span>
        <p className="w-[48%] flex items-center justify-between">
          <span>—</span> 
          <span className={`text-right ${nowrap ? 'whitespace-nowrap' : 'whitespace-pre-line'}`}>{clientTitle}</span>
        </p>
      </div>
    </>
  );
};

export default TitleSection;
