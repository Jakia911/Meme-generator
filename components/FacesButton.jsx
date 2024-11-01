const FacesButton = () => {
  return;
  <div>
    <button>Faces</button>

    {faces.map((face, index) => (
      <img
        key={index}
        src={face.img}
        alt="faces"
        onClick={() => setSelectedEyes(face.img)}
        className="facesImg"
      />
    ))}
  </div>;
};

export default FacesButton;
