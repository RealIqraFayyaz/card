export default function Card() {
  return (
    <div className="container">
      <header>
        <span className="logo">
          <img src="/assets/logo.png" alt="logo" />
          <h5>Master Card</h5>
        </span>

        <img src="/assets/chip.jpg" alt="chip" className="chip" />
      </header>

      <div className="card-details">
        <div className="name-number">
          <h6>Card Number</h6>
          <h5 className="number">8050 5040 2030 3020</h5>
          <h5 className="name">Prem kumar shahi</h5>
        </div>

        <div className="valid-date">
          <h6>Valid Thru</h6>
          <h5>05/28</h5>
        </div>
      </div>
    </div>
  );
}