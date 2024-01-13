import React from 'react';
import Shoes from '../images/shoes.png';
import Image from 'next/image';

export default function Cart() {
  return (
    <section>
      <div className='details cart'>
        <Image src={Shoes} alt='Product image' />
        <div className='box'>
          <div className='row'>
            <h2>Item</h2>
            <span>$49.90</span>
          </div>
          <p className='adidas'>Adidas SuperStar</p>
          <p>
            Dennis is family on the Dime. This project, which has a tangible connection to both brands, combines the
            iconic design language of Dime with the proven functionality of Busenitz Vulc 2.0 and attracts skaters all
            over the world. Using a molded Adiprene insole, anti-slip Geofit collar and grippy Geoflex sole, the
            Busenitz Vulc 2.0 shoes are geared for performance straight out of the box, while the abrasion-resistant
            Adituff toe reinforcement and leather upper offer superior durability.
          </p>
          <div className='amount'>
            <button className='count'> - </button>
            <span>5</span>
            <button className='count'> + </button>
          </div>
        </div>
        <div className='delete'>X</div>
      </div>
    </section>
  );
}
