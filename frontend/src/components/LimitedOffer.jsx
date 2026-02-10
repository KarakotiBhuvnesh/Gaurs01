const LimitedOffer = ({ onCTAClick }) => {
  return (
    <section className="limited-offer">
      <h2>Limited-Time Pre-Launch Investment Opportunity</h2>
      <p>Early buyers get preferred pricing & priority allotment</p>

      <button onClick={onCTAClick}>
        Unlock Offer Details
      </button>
    </section>
  );
};

export default LimitedOffer;
