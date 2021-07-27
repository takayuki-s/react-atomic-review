import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin}/>
      <SDl>
        <div>
          <dt>メール</dt>
          <dd>{user.email}</dd>
        </div>
        <div>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
        </div>
        <div>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
        </div>
        <div>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
        </div>
      </SDl>
    </Card>
  )
}

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  div {
    display: flex;
  }
  dt {
    width: 20%;
    /* float: left; */
  }
  /* @media screen and (min-width: 900px) {
    dt {
      width: 20%;
    }
  } */
  dd {
    /* padding-left: 32px; */
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`