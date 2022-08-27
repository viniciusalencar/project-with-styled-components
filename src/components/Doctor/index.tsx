import React from "react";
import { 
  Container,
  Avatar,
  Name,
  Spacialist,
  DoctorProps
} from "./styles";

export type DoctorDataProps = {
  id: string;
  name: string;
  avatar: string;
  spacialist: string;
};

type Props = DoctorProps & {
  data: DoctorDataProps;
}

export const Doctor = ({ type, data, ... rest }: Props) => {
  return (
    <Container type={type}>
      <Avatar source={{ uri: data.avatar }} />
      <Name>
        {data.name}
      </Name>

      <Spacialist>
        {data.spacialist}
      </Spacialist>
    </Container>
  )
};