import CodePreview from './CodePreview';

function CodeList({ codes }) {
    console.log(codes);
  return (
    <ul className='code-list clean-list'>
      {codes.map((code) => <CodePreview key={code._id} code={code} />)}
    </ul>
  );
}

export default CodeList;