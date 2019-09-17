import React from 'react'

class Home extends React.Component {
    render(){
        return (<div>
                    <div>Welcome Hommie!</div>
                    <button onClick={()=>console.log('You got me!')}>Press me!</button>
                </div>
        );
    }
}

export default Home