import { styled } from "styled-components";

export const PhoneCallMessagestyles = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 100px;
`;

export default function PhoneCallMessage() {
  return (
    <PhoneCallMessagestyles>
      <p>
        Need assistance? Call us at <strong>+48733853074</strong>.
      </p>
    </PhoneCallMessagestyles>
  );
}
