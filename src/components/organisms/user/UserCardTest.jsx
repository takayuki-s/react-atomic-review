import styled from "styled-components";

export const UserCardTest = () => {
  return (
    <div>
      <img height={160} width={160} src="https://source.unsplash.com/phIFdC6lA4E" alt="プロフィール" />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>test@test.com</dd>
        <dt>TEL</dt>
        <dd>090-123456789</dd>
        <dt>会社名</dt>
        <dd>てけ株式会社</dd>
        <dt>WEB</dt>
        <dd>test.com</dd>
      </SDl>
    </div>
  )
}

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
  }
`