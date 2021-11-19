import React , { Component } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import "../public/global.less";
import styled from 'styled-components';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeSelect, UserSelect } from '../redux/selector';
import { SetTheme, SetUser } from '../redux/actions';
import { SelectPicker } from 'rsuite';
import { CustomProvider } from "rsuite";
import faIR from "rsuite/locales/fa_IR";

const H1 = styled.h1`
  text-decoration: underline;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.themeData = [{label: "شب", value: "dark"}, {label: "روز", value: "light"}, {label: "واضح", value: "high-contrast"}]
  }
  

  componentDidMount(){
    const {setUser} = this.props;
    setUser("HI Im User")
  }

  render(){
    const {user, setTheme, theme} = this.props;
    console.log(user)
    return (
      <CustomProvider locale={faIR} rtl theme={theme}>
        <Link href="/show-redux-state">
          <a>Click to see current Redux State</a>
        </Link>
          <H1>سلام خوبی خسته نباشی</H1>
          <SelectPicker data={this.themeData} onSelect={theme => setTheme(theme)} value={theme} />
      </CustomProvider>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  user : UserSelect,
  theme: ThemeSelect
})
const mapDispatchToProps = dispatch => ({
  setUser : user => dispatch(SetUser(user)),
  setTheme : theme => dispatch(SetTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);