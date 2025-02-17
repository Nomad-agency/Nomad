import LinkButton from '../../../../../pages/HomePage/UI/LinkButton/LinkButton';

const Socials = () => {
  const socialsData = [
    {
      title: 'Telegram',
      link: '/',
    },
    {
      title: 'WhatsApp',
      link: '/',
    },
    {
      title: 'Ins***ram',
      link: '/',
    },
  ];
  return (
    <div className="flex items-center justify-between">
      {socialsData.map((item, index) => (
        <LinkButton key={index} title={item.title} link={item.link} target={'_blank'} />
      ))}
    </div>
  );
};

export default Socials;
