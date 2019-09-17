import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'

class Gome extends React.Component {
    render(){
        return (<div>
                    hey
                </div>
        );
    }
}

export default () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/apple" component={Gome} />
            </Switch>
        </div>
    )
}