import { useParams } from "react-router";

export default function UserProfilePage() {
  // grab the parameters from our address bar/ url
  const params = useParams();

  //    <Route path="/user-profile/:userId" element={<UserProfile />} />
  // the params.userId is coming in from :userId
  // and that user id pulls the value from the address bar
  // i.e. if we visit this page (http://localhost:5173/user-profile/123)
  // params.userId will be?????

  return <h1>UserProfile ID: {params.userId}</h1>;
}