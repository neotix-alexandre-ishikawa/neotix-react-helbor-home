import styled from "styled-components";
import { FaGripLines } from "react-icons/fa";

export const Container = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  padding: 40px;
  display: flex;

  @media (max-width: 1000px) {
    width: 70%;
    justify-content: space-between;
  }

  img {
    width: 13em;
  }
`;

export const GripLines = styled(FaGripLines)`
  color: #fff;
  width: 80px;
  height: 40px;
  margin-right: 30px;
`;
