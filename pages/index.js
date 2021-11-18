import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import "../public/global.less";
import styled from 'styled-components';

const H1 = styled.h1`
  text-decoration: underline;
`;

const Index = () => {

  return (
    <>
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
        <H1>سلام خوبی خسته نباشی</H1>
    </>
  )
}

export default Index
