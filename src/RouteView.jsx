
import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
class routeView extends Component {
    render() {
        let {routes}=this.props
        let routeARR=routes.filter(item=>!item.redirect)
        let redirectArr=routes.filter(item=>item.redirect)
        return (
            <Switch>
                {
                    routeARR.map((item,i)=>{
                        return <Route path={item.path} key={i} render={(props)=>{
                            return <item.component {...props} children={item.children} />
                        }}></Route>
                    })
                }{
                    redirectArr.length&&redirectArr.map((item,i)=>{
                        return <Redirect from={item.path} to={item.redirect} key={i} />
                    })
                }
            </Switch>
        );
    }
}

export default routeView;

