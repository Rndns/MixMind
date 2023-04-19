import React, { useEffect, useState } from 'react';
import '../App.css';

function Cat({ click }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setFade('end');

    return () => {
      setFade('');
      console.log('클릭할때마다 useEffect 실행');
    };
  }, [click]);

  return (
    <div>
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230208_44%2F1675797597390SbXVL_JPEG%2F2538312207835928_1043365923.jpeg&type=sc960_832"
        alt="play"
        className={'start ' + fade}
      ></img>
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMzFfNzQg%2FMDAxNjcyNDkxNjA5NzIz.UG3IvWApwfOy1W6kilkcjq7IIO6YgzvK2ehMhzNxV_0g.eZtKLPE-ee_L5w1p89CFocODgDZj210f0eU4HAZ4-M4g.JPEG.ildu12%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001.jpg&type=sc960_832"
        alt="album"
        className={'start ' + fade}
      ></img>
    </div>
  );
}

function App() {
  let [click, setClick] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h3>추천음악 재생</h3>
      </div>

      <button onClick={() => setClick(!click)} className="btn">
        PLAY
      </button>

      {click && <Cat click={click} />}
    </div>
  );
}

export default App;