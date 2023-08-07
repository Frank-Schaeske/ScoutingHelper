import styled from "styled-components";
import { useRouter } from "next/router";
import { StyledButton, ButtonText } from "../StyledButton";
import { StyledLink, LinkText } from "../StyledLink";

export default function CommentForm({
  handleSubmit,
  defaultData,
  buttonText,
  linkText,
  linkTarget,
}) {
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
        <StyledLink href={linkTarget}>
          <LinkText>{linkText}</LinkText>
        </StyledLink>
        <StyledButton type="submit">
          <ButtonText>{buttonText}</ButtonText>
        </StyledButton>
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

const Wrapper = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  margin-top: 10px;
`;
