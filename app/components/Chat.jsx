"use client";
import React, { useState, useEffect } from "react";
import auth, { db } from "../firebase/firebase-config"
import ChatInfoCard from "./atoms/chatInfoCard"
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
    <div>
      <div>
        <div>
          <ChatInfoCard />
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default Chat;
