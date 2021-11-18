import React , { Component } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import "../public/global.less";
import styled from 'styled-components';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { UserSelect } from '../redux/selector';
import { render } from 'less';
import { SetUser } from '../redux/actions';

const H1 = styled.h1`
  text-decoration: underline;
`;

class Index extends Component {

  componentDidMount(){
    const {setUser} = this.props;
    setUser("HI Im User")
  }

  render(){
    const {user} = this.props;
    console.log(user)
    return (
      <>
        
        <Link href="/show-redux-state">
          <a>Click to see current Redux State</a>
        </Link>
          <H1>سلام خوبی خسته نباشی</H1>
      </>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  user : UserSelect
})
const mapDispatchToProps = dispatch => ({
  setUser : user => dispatch(SetUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);
