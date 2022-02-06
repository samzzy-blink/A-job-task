import React from 'react';

const Footer = () => {
  return <>
  <div class="line"></div>
  <section className='footer'>
      <div className='subtotal'>
          <h4>Subtotal</h4>
          <h4>₦2,497.00</h4>
      </div>
      <div className='tax'>
          <h4>Estimated TAX</h4>
          <h4>₦119.64</h4>
      </div>
      <div className='code'>
          <h4>Promotional Code: <span> Z4KXLM9A</span></h4>
          <h4>₦-60.00</h4>
      </div>
  </section>
  <div class="line"></div>

  <div className='total'>
          <button>Complete payment</button>
          <h4 id='total'>TOTAL:₦2556.64</h4>
      </div>
  </>;
};

export default Footer;
