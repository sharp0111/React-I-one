import styled from 'styled-components';

const StyledList = styled.div`
  padding: 20px;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: silver;
  }

  form {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 5px;
  }
  .movie-item {
    list-style-type: none;
    margin: 0 0 0 -40px;
    padding: 0;
  }

  .movie-item:hover {
    font-weight: bold;
    color: #000;
    cursor: pointer;
  }
`;

export default StyledList;