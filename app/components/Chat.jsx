"use client";
import React, { useState, useEffect } from "react";
import auth, { db } from "../app/firebase/firebase-config.js";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

//import "../styles/Chat.css";

const Chat = ({ room }) => {
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div>
      <div>
        <h1>Mesajlar</h1>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Chat;
