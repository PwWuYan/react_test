import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            svg:'',
            img:''

        }
    }
    componentDidMount(){
        this.$api.get.img().then(res=>{
            this.setState({
                svg:res.data.data
            })
      
        })
    }
    handleChange(val, e) {
        this.setState({
            [val]: e.target.value
        })
    }
    handleRegister(){
        let {username,password,img}=this.state
        this.$api.post.login({
            username,password,captcha:img
        }).then(res=>{
           if(res.data.code===1){
               this.props.history.push('/detail')
           }
        })
    }
    render() {
        let {svg} = this.state;
        return (
            <div ref="ref">
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
                    图形验证码: 
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        placeholder="验证码"
                        onChange={this.handleChange.bind(this, 'img')}
                    />        
                    <p style={{ height: '102px', }} dangerouslySetInnerHTML={{ __html: svg }} ></p>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" className="login-form-button" onClick={this.handleRegister.bind(this)}> 
                        login
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}


export default index;