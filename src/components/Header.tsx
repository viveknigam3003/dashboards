import { FC } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;
  padding: 8px 32px;
  span {
    font-size: 18px;
    font-family: Inter;
    font-weight: 500;
  }
`

export const Header: FC<{
  title: string,
  icon: string
}> = ({ title }) => {
  return (
    <Wrapper>
      <Title>
        <span>{title}</span>
      </Title>
    </Wrapper>
  )
}