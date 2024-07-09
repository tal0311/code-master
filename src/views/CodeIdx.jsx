
import CodeList from "../cmps/CodeList";
import { userService } from "../services/user.service";

function CodeIdx({codes}) {

  const user= userService.getLoggedInUser()

  // console.log(codes);
  return (
    <section className="code-idx">
      <h1>Lobby</h1>
    
      <CodeList codes={codes} favorites={user.favorites} />
    </section>
  );
}

export default CodeIdx;