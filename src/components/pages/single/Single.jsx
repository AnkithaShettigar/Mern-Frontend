import Sidebar from '../../sidebar/Sidebar';
import SinglePost from '../../singlePost/SinglePost';
import './Single.css';

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
