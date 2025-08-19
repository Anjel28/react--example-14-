import React,{ useState } from 'react';

type Props = {
  //isLoggedIn: boolean;
//  hasNewMessage: boolean;
  ShowDetails: boolean;
};

const Dashboard: React.FC<Props> = ({ ShowDetails }) => {
  const [showDetails, setShowDetails] = React.useState<boolean>(false);
  return (
    <div>
      {/*ternary operator with conditinal condition*/}
     {/*{ isLoggedIn ? (<h1>Welcome back!</h1>
      ) : (<h1>Please log in.</h1>)}*/}
      {/*logical operator- condition*/}
  {/* {hasNewMessage && <p>you have new message'</p>}*/}
  {/*condition with state*/}
  <button onClick={() => setShowDetails(prev => !prev)}>
    Toggle Details
  </button>
  {ShowDetails ? <p>here are you details...</p> : null}
    </div>
  );
}

export default Dashboard;
