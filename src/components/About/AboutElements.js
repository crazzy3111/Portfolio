import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
  display: block; /* Makes the image a block element */
  margin-left: auto; /* Centers the image horizontally */
  margin-right: auto; /* Centers the image horizontally */
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 2px solid transparent; /* Default border for transition */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 100, 0.5); /* Blue shadow */
    border: 2px solid rgba(0, 0, 255, 0.7); /* Blue border on hover */
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
