import { useContext } from "react";
import dataContext from "../../../context/dataContext";
import styled, { ThemeProvider } from 'styled-components';

const ScrollContainer = styled.p`
  padding: 0.5rem 1rem;
  overflow: auto;
  height: 5rem;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #3d3d3d;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.badgeColor};
    border-radius: 20px;
    height: 25px;
  }
`;

function AboutCard() {
    const { about, badges } = useContext(dataContext);

    const theme = {
      badgeColor: badges[0]?.color || '#fff',
    };

    return (
        <div>
            <h3>Sobre</h3>
            <hr />
            <ThemeProvider theme={theme}>
              <ScrollContainer>
                {about}
              </ScrollContainer>
            </ThemeProvider>
        </div>
    )
}

export default AboutCard;
