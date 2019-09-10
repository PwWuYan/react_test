import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange(val, e) {
        this.setState({
            [val]: e.target.value
        })
    }
    handleRegister(){
        let {username,password}=this.state
        this.$api.post.register({
            username,password,nickname:'lsc'
        }).then(res=>{
            console.log(res)
           if(res.data.code===1){
               this.props.history.push('/login')
           }
        })
    }
   
    render() {      
        let arr=localStorage.getItem('img')
        console.log(arr)
        return (
           
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        onChange={this.handleChange.bind(this, 'username')}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChange.bind(this, 'password')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" className="login-form-button" onClick={this.handleRegister.bind(this)}> 
                        register
                </Button>

                </Form.Item>
            </Form>
           
        );
    }
}
export default index;