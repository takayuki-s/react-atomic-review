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
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={users.id} user={user} />
      ))}
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px; 
`