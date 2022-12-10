import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatContext } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const {user,setUser}= useContext(ChatContext)  
  const local= JSON.parse(localStorage.getItem("userInfo"))
  
  return (
    <div style={{ width: "100%" }} >
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
