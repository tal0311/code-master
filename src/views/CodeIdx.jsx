
import CodeList from "../cmps/CodeList";

function CodeIdx({codes}) {
  console.log(codes);
  return (
    <section className="code-idx">
      <h1>CodeIdx</h1>
    
      <CodeList codes={codes} />
    </section>
  );
}

export default CodeIdx;