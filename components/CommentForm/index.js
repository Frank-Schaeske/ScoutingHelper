import styled from "styled-components";
import { useRouter } from "next/router";

export default function CommentForm({ handleSubmit, buttonText }) {
  const router = useRouter();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment</label>
      <textarea autoFocus name="comment" id="comment" rows="5"></textarea>
      <button type="submit">{buttonText}</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 150px;
  margin: 5% 16%;
`;
