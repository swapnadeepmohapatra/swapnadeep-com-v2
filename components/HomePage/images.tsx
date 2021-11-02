import Image from "next/image";
import styled from "styled-components";

export const ImageCard = styled(Image)`
  border-radius: 0.5rem;

  background-color: #f1f1f1;
  transition-duration: 0.8s;

  /* Animation */
  -webkit-animation-duration: 1.6s;
  -moz-animation-duration: 1.6s;
  -o-animation-duration: 1.6s;
  animation-duration: 1.6s;
  -webkit-animation-name: pulseAnimation;
  -moz-animation-name: pulseAnimation;
  -o-animation-name: pulseAnimation;
  animation-name: pulseAnimation;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  -o-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;

  @keyframes pulseAnimation {
    0% {
      background-color: #f1f1f1;
    }

    25% {
      background-color: #9c9c9c;
    }

    50% {
      background-color: #c1c1c1;
    }

    70% {
      background-color: #d8d8d8;
    }
  }
`;
