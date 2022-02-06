import React from 'react';

const Main = () => {
  return <>
      {/* section one */}
      <section className='logos'>
        <div className='logos1'>
            <h2>Payment Information</h2>
            <p>Choose your method of payment</p>
        </div>
        <div className='logos2'>
            <div className='logo-align'>
              <img className='logo' src="/images/Visa-Emblem.jpg" alt="" />
                <img className='logo' src="/images/discover.png" alt="" />
                 <img className='logo third' src="/images/paypal.png" alt="" />
            </div>
      
        </div>
    </section>

    {/* section two */}
    <section className='form-input'>
        <div className='atm-logo'>
            <img className='atms' src="/images/atm4.jfif" alt="" />
        </div>
        <div>
            <form action="">
                <section className='form-1' id='form-1'>
                    <div>
                        <p>Credit card number</p>
                        <input className='inputs' type="text" value={" 5338 7700 0000 0000"}/>
                    </div>
                    <div>
                        <p>Expiration date</p>
                        <input className='inputs' type="text" value={"12/99"}/>
                    </div>
                </section>
                <section  className='form-1'>
                    <div>
                        <p>Security code</p>
                        <input className='inputs' type="text" value={" 0000"}/>
                    </div>
                    <div>
                        <p>Postal Code</p>
                        <input className='inputs' type="text" value={"10119"} />
                    </div>
                </section>
                <input type="checkbox" /> Use this card for next time purchase <br />
                <input className='submit' type="submit" value={'Add card'}/>
            </form>
        </div>
    </section>
   
  </>;
};

export default Main;
