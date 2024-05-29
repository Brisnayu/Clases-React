import Avatar from "@mui/material/Avatar";

const BasicAvatar = () => {
  return (
    <>
      <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/0d/36/a4/0d36a4f75bed807c2b228bbccdf20a08.gif" />
      <Avatar sx={{ width: 100, height: 100 }} alt="Travis Howard" src="https://i.pinimg.com/originals/44/18/f6/4418f6d008d99ea34c081809880fdb2f.gif" />
      <Avatar sx={{ width: 200, height: 200 }} alt="Cindy Baker" src="https://i.pinimg.com/originals/e3/6d/d7/e36dd74807d8c39beb492d422c13e50f.gif" />
    </>
  );
};

export default BasicAvatar;
