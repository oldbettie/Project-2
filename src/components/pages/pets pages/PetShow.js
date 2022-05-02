// show page for a certain pet
import React, { useState, useEffect } from "react";
import { db, storage, auth } from "../../../firebase-config";
import { doc, collection, getDoc } from "firebase/firestore";
import { NavLink, useParams } from "react-router-dom";

function PetShow() {
	// get the pet id(the file name)
	let params = useParams();
	console.log(params.type);
	const [petInfo, setPetInfo] = useState(null);
	let data;

	const getPet = async (uid) => {
		const petDocRef = doc(db, "pets", uid);
		const petDocSnap = await getDoc(petDocRef);
		data = petDocSnap.data();
		setPetInfo(data);
		console.log(data);
	};

	useEffect(() => {
		if (petInfo === null) {
			getPet(params.type);
		}
	}, []);

	return (
		<div>
			{petInfo === null ? (
				""
			) : (
				<div>
					<h1>Name:{petInfo.name}</h1>
					<h1>Age:{petInfo.age}</h1>
					<h1>DOB:{petInfo.dob}</h1>
					<h1>Type:{petInfo.type}</h1>
					<h1>Gender:{petInfo.gender}</h1>
					<h1>Location:{petInfo.location}</h1>
					<h1>Description:{petInfo.description}</h1>
					<img src={petInfo.imageUrl} />
					{/* Only the owner of the pet can edit and delete the profile */}
					{petInfo.user_uid === auth.currentUser.uid ? (
						<div>
							<NavLink to={`/pet/edit/${params.type}`}>
								<button>Edit</button>
							</NavLink>
							<button>Delete</button>
						</div>
					) : (
						""
					)}
				</div>
			)}
		</div>
	);
}

export default PetShow;
