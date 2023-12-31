import { useRouter } from "next/router";
import { StyledButton, ButtonText } from "../StyledButton/styles";
import { StyledLinkLikeButton, LinkText } from "../StyledLinks/styles";
import { StyledForm, StyledLabel, StyledTextarea, Wrapper } from "./styles";

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
        maxLength="60"
        defaultValue={defaultData?.comment}
      ></StyledTextarea>
      <Wrapper>
        <StyledLinkLikeButton href={linkTarget}>
          <LinkText>{linkText}</LinkText>
        </StyledLinkLikeButton>
        <StyledButton type="submit">
          <ButtonText>{buttonText}</ButtonText>
        </StyledButton>
      </Wrapper>
    </StyledForm>
  );
}
