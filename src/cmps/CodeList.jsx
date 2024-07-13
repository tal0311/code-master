import CodePreview from './CodePreview';
import SvgIcon from './SvgIcon';

function CodeList({ codes, favorites, updateUser }) {
  // console.log(favorites);

  return (
    <ul className='code-list clean-list'>
      {codes.map((code) => {
        const isFavorite = (favorites?.includes(code._id))
        return <CodePreview key={code._id} code={code} isFavorite={isFavorite} updateUser={updateUser} />;
      })}
    </ul>
  );
}

export default CodeList;