import CodePreview from './CodePreview';
import SvgIcon from './SvgIcon';

function CodeList({ codes, favorites }) {
  console.log(favorites);
  // console.log(codes);
  return (
    <ul className='code-list clean-list'>
      {codes.map((code) => {
        const isFavorite = (favorites.includes(code._id))
        return <CodePreview key={code._id} code={code} isFavorite={isFavorite} />;
      })}
    </ul>
  );
}

export default CodeList;