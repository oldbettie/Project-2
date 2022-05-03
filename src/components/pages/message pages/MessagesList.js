import React, { useEffect, useState } from "react";
import { db, auth } from "../../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import style from './message.module.css';

import {
	collection,
	query,
	where,
	onSnapshot,
	doc,
	getDoc,
	getDocs
} from "firebase/firestore";
import ChatBox from "./ChatBox";
import User from "../../User";
import styles from "./message.module.css";

// displays all favourited users on the left of message box
function MessagesList() {
	const [users, setUsers] = useState([]);
	const [chat, setChat] = useState("");
	const user2 = chat.uid;

	// references the favArr in database and returns an array with all partnerships uids
	const getFavArr = async function (user1) {
		const arrayRef = doc(db, "users", user1);
		const docSnap = await getDoc(arrayRef);
		const data = docSnap.data();
		const favArr = data.favArr;
		return favArr;
	};

	const getPetsChatLog = async function(){
		const documentId =
			auth.currentUser.uid > user2
				? `${auth.currentUser.uid + user2}`
				: `${user2 + auth.currentUser.uid}`;

		const favRef = collection(db, 'favourites', documentId, 'messages')
		const docSnap = await getDocs(favRef)
		// const data = docSnap.data()
		docSnap.forEach((doc) => {
			console.log(doc.data())
			
		})
	}
    getPetsChatLog()

	const getChatLog = async function (user) {
		const user1 = user.uid;
		const favObj = await getFavArr(user1);
		const usersRef = collection(db, "users");
		const q = query(usersRef, where("uid", "in", favObj));

		const unsub = onSnapshot(q, (querySnapshot) => {
			let usersArr = [];
			querySnapshot.forEach((doc) => {
				usersArr.push(doc.data());
			});
			setUsers(usersArr);
		});
		return () => unsub();
	};

	// this allows the chat to update both users
	const selectUser = function (user) {
		setChat(user);
	};

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				getChatLog(user);
			}
		});
	}, []);
	return (
		<div className={style.messageListCont}>
			<div className={style.useContainer}>
				{users.map((user, index) => (
					<User key={index} user={user} selectUser={selectUser} />
				))}
			</div>
			<div className={style.chatbox}>
				{chat ? (
					<div>
						<h3>{chat.person}</h3>
						<ChatBox user1={auth.currentUser.uid} user2={user2} />
					</div>
				) : (
					<div>
						<h3 className="select-user-chatbox">Select a user</h3>
					</div>
				)}
			</div>
		</div>
	);
}

export default MessagesList;
