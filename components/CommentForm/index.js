import styled from "styled-components";
import { useRouter } from "next/router";

export default function CommentForm({ handleSave }) {
  const router = useRouter();

  return (
    <StyledForm onSubmit={handleSave}>
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" id="comment" rows="5"></textarea>
      <button type="submit">Save Player</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 10% 0% 10% 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 150px;
`;
