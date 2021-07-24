import styled from "styled-components"

export const UserCard = () => {
  return (
    <div>
      <img height={160} width={160} src="https://source.unsplash.com/phIFdC6lA4E" alt="プロフィール" />
      <p>名前</p>
      <SDl>
        <div>
          <dt>メール</dt>
          <dd>teke@test.com</dd>
        </div>
        <div>
          <dt>TEL</dt>
          <dd>090-1234-5678</dd>
        </div>
        <div>
          <dt>会社名</dt>
          <dd>てけ株式会社</dd>
        </div>
        <div>
          <dt>WEB</dt>
          <dd>test.com</dd>
        </div>
      </SDl>
    </div>
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