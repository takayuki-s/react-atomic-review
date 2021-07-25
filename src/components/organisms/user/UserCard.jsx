import styled from "styled-components"
import { Card } from "../../atoms/card/Card";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <img height={160} width={160} src={user.image} alt={user.name} />
      <p>{user.name}</p>
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
    width: 10%;
    /* float: left; */
  }
  dd {
    /* padding-left: 32px; */
    padding-bottom: 8px;
  }
`