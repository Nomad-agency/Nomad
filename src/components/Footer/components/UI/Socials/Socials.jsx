import LinkButton from '../../../../../pages/HomePage/UI/LinkButton/LinkButton';

const Socials = () => {
  const socialsData = [
    {
      title: 'Telegram',
      link: 'https://t.me/Chistiakova_Liza',
    },
    {
      title: 'Ins***ram',
      link: 'https://www.instagram.com/nomad_agnc/',
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
