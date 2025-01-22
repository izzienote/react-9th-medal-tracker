import React, { useState } from "react";

const InputLists = (props) => {
  const { setScores, scores } = props;

  const [addCountry, setAddCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // 인풋값 핸들러
  const handleCountry = (event) => setAddCountry(event.target.value);
  const handleGold = (event) => setGold(event.target.value);
  const handleSilver = (event) => setSilver(event.target.value);
  const handleBronze = (event) => setBronze(event.target.value);

  // 데이터 초기값 정의
  const [data, setData] = useState({
    addCountry: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  // 클릭 시, 데이터값 입력받은 새 데이터로 정의
  const btnClick = () => {
    const newData = {
      id: new Date().getTime(),
      addCountry,
      gold,
      silver,
      bronze,
    };

    setScores([...scores, newData]);
    console.log(newData);
  };

  return (
    <div>
      <div>
        <h1>2024 파리 올림픽</h1>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <label className="label-style" htmlFor="name">
          국가명
        </label>
        <input
          onChange={handleCountry}
          value={addCountry}
          id="name"
          className="input-style"
          type="text"
          placeholder="국가명을 입력해주세요"
        />

        <label className="label-style" htmlFor="gold">
          금메달
        </label>
        <input
          onChange={handleGold}
          value={gold}
          id="gold"
          className="input-style"
          type="number"
          placeholder="금메달 수량 입력"
        />

        <label className="label-style" htmlFor="silver">
          은메달
        </label>
        <input
          onChange={handleSilver}
          value={silver}
          id="silver"
          className="input-style"
          type="number"
          placeholder="은메달 수량 입력"
        />

        <label className="label-style" htmlFor="bronze">
          동메달
        </label>
        <input
          onChange={handleBronze}
          value={bronze}
          id="bronze"
          className="input-style"
          type="number"
          placeholder="동메달 수량 입력"
        />

        <div>
          <button onClick={btnClick} className="button-style-yellow">
            국가 추가
          </button>
          <button onClick={btnClick} className="button-style-yellow">
            업데이트
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputLists;
