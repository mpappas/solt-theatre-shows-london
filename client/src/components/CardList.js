import React from 'react';
import Card from './Card';

const isSoldOut = (show) => {
  const tickets_url_array = show.see_tickets_url_infos;
  const subDomain = 'tktsonline.seetickets.com';
  const failover = 'officiallondontheatre.seetickets.com';
  let tickets_active_url = '';

  if (tickets_url_array.length) {
    const main_domain = tickets_url_array.find((domain) => domain.url.includes(subDomain));
    const failover_domain = tickets_url_array.find((domain) => domain.url.includes(failover));

    tickets_active_url = main_domain ? main_domain : failover_domain;
  }

  return tickets_active_url;
};

const CardList = ({ showsList }) => {
  return (
    <div>
      {showsList.map((show, i) => {
        const tickets_active_url = isSoldOut(show);
        return (
          <Card
            key={i}
            title={showsList[i].title}
            description={showsList[i].excerpt}
            img_url={showsList[i].image}
            tickets_url={tickets_active_url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
