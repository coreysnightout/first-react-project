import React from "react";
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  var formStyle = {
    backgroundColor: "#f4f2f5",
    marginTop: "10",
    marginBottom: "10",
  }
  return (
    <div>
      <div style={formStyle}>
        <hr/>
        {props.ticketList.map((ticket, index) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}/>
        )}
      </div>
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array.isRequired
};

export default TicketList;
