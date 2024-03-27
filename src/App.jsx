import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryKey, useChatMessagesContext } from "./ChatMessagesProvider";

const App = () => {
  const { data } = useQuery({ queryKey: queryKey }, () => {}, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return (
    <>
      <div className="header">Les recherches de Jean</div>
      <div className="appContainer">{<MainElement data={data} />}</div>
    </>
  );
};

const MainElement = (props) => {
  const [channel, setChannel] = useState("");
  const [msg, setMsg] = useState("Pas de message");

  return (
    <>
      <input
        type="text"
        className="input_channel"
        placeholder="Chaine à suivre"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      />
      <button className="button_connect">Se connecter</button>
      <button className="button_record">Enregistrer</button>
      <div className="chat_holder">
        {props.data &&
          props.data.map((msg) => (
            <div className="new_message">{`${msg.user} : ${msg.message}`}</div>
          ))}
      </div>
    </>
  );
};

export default App;
