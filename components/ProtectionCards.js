function ProtectionCards() {
  const items = ["Message Scanner","URL Checker","Deepfake Detector","Pattern Recognition","Domain Trust"];

  return (
    <div className="cards-row">
      {items.map((item) => (
        <div className="mini-card" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default ProtectionCards;