import React from 'react';

const Card = ({ title, description, img_url, tickets_url }) => {
  const target_url = tickets_url ? tickets_url.url : '';

  return (
    <div className="tc grow br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="theatre shows" src={img_url} width="500px" />
      <div>
        <h2>{title}</h2>
        <p className="tj-ns br3 pa3 ma2 dib measure-wide">{description}</p>
      </div>
      <div>
        <button
          onClick={() => {
            window.open(target_url, '_blank');
          }}
          className="bn f6 dim br2 pv3 ph7 white bg-light-red"
        >
          {target_url ? 'Buy Now' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
};

export default Card;
