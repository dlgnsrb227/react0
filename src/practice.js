function Practice(props){
  return (
    <div>
      <h1>{props.word}하세요</h1>
      <h2>{props.self} 한번</h2>
      <h3>{props.react} 연습을</h3>
      <h4>{props.do}입니다.</h4>
    </div>
  );
};

export default Practice;