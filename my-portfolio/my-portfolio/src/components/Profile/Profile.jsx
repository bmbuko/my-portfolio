import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import CustomTimeLine from "../Timeline/Timeline";

const ProfileContent = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 100%;
  display: inline-block;
`;
const ProfileName = styled.div`
  line-height: 18px;
  padding: 20px;
`;

const ProfileImage = styled.div`
  margin-top: -10px;
  -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  clip-path: polygon(0 9%, 100% 0%, 100% 94%, 0% 100%);
`;
const Name = styled(Typography)`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 500;
`;
const Title = styled(Typography)`
  && {
    font-size: 13px;
    color: #777;
  }
`;

const Profile = () => {
  return (
    <ProfileContent>
      <ProfileName>
        <Name>
          <Name>Busi Mbuko</Name>
        </Name>
        <Title className="title">React Developer</Title>
      </ProfileName>
      <ProfileImage>
        <img
          src={require("../../Assets/Images/Busi.jpg").default}
          alt=""
          style={{ width: "100%" }}
        />
      </ProfileImage>
      <div className="">
        <CustomTimeLine />
        <br />
        <button>my button</button>
      </div>
    </ProfileContent>
  );
};
export default Profile;
