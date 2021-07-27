import { useLocation } from "react-router-dom"
import styled from "styled-components"
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
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={users.id} user={user} isAdmin={isAdmin}/>
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`