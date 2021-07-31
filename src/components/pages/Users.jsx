import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `てけ${val}`,
    image: "https://source.unsplash.com/phIFdC6lA4E",
    email: "teke@test.com",
    phone: "090-1234-5678",
    company: {
      name: "てけ株式会社"
    },
    website: "https://google.com"
  }
})

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch  = () => setUserInfo({ isAdmin: !userInfo.isAdmin })
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px; 
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`