import styled from "styled-components";
import { useRouter } from "next/router";
import { StyledButton, ButtonText } from "../Button";
import Link from "next/link";

export default function CommentForm({ handleSubmit, defaultData }) {
  const router = useRouter();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="comment">Comment:</StyledLabel>
      <StyledTextarea
        autoFocus
        name="comment"
        id="comment"
        rows="5"
        maxLength="65"
        defaultValue={defaultData?.comment}
      ></StyledTextarea>
      <Wrapper>
        <StyledButton type="submit">
          <ButtonText>Save</ButtonText>
        </StyledButton>
        <StyledLink href="/">
          <LinkText>New Search</LinkText>
        </StyledLink>
      </Wrapper>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
  margin: 10px 16%;
`;

const StyledTextarea = styled.textarea`
  width: 320px;
  height: 100px;
  padding: 0px 35px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

const StyledLabel = styled.label`
  margin: 5px;
`;

const StyledLink = styled(Link)`
  --color: var(--primary-color);
  --background-color: #ffffff;

  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8em;
  height: 2.5em;
  line-height: 3em;
  overflow: hidden;
  margin: 20px auto;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  background-color: var(--background-color);
  border: 2px solid var(--color);
  border-radius: 20px;
  position: relative;
  text-decoration: none;

  &:before {
    position: absolute;
    content: "";
    background: var(--color);
    width: 200px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  &:hover {
    color: white;
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  &:hover::before {
    top: -30px;
    left: -30px;
  }
`;

const LinkText = styled.span`
  position: relative;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  margin-top: 10px;
`;
