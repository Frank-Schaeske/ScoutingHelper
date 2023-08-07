import styled from "styled-components";
import { useRouter } from "next/router";
import { StyledButton, ButtonText } from "../Button";

export default function CommentForm({ handleSubmit, defaultData }) {
  const router = useRouter();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment:</label>
      <textarea
        autoFocus
        name="comment"
        id="comment"
        rows="5"
        maxLength="65"
        defaultValue={defaultData?.comment}
      ></textarea>
      <StyledButton type="submit">
        <ButtonText>Save</ButtonText>
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 150px;
  margin: 10px 16%;
`;
