import { createResource, Suspense } from "solid-js";
import { useParams } from "@solidjs/router";

async function fetchUserBy_id(id: string) {
  const input = `https://jsonplaceholder.typicode.com/users/${id}`;
  const init = undefined;
  const response = await fetch(input, init);
  return response.json();
}

const User = () => {
  // Pass the dynamic route parameter to the createResource primitive
  const params = useParams();
  const [user] = createResource(params.id, fetchUserBy_id);
  

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <p>Name: {user().name}</p>
        <p>Email: {user().email}</p>
        <p>Phone: {user().phone}</p>
      </div>
    </Suspense>
  );
};
export default User;
