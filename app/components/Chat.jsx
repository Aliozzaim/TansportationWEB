"use client";
import React, { useState, useEffect } from "react";
import auth, { db } from "../firebase/firebase-config"
import Messages from "./Messages"
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore"

//import "../styles/Chat.css";

const Chat = ({ room }) => {
  const messagesRef = collection(db, "messages")
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  return (
    <>
      <Messages />
    </>
  )
}
export default Chat;
