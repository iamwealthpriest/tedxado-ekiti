const SpeakerCard = ({ image, name, title }) => (
    <div className="text-center text-white">
      <img src={image} alt={name} className="w-full object-cover rounded-md" />
      <h4 className="mt-2 font-bold">{name}</h4>
      <p className="text-sm">{title}</p>
    </div>
  );

export default SpeakerCard;