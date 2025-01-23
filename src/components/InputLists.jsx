import React, { useState } from "react";

const InputLists = (props) => {
  const { setScores, scores } = props;
  // 데이터 초기값 정의
  const [data, setData] = useState({
    addCountry: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  // 인풋값 핸들러
  const handleCountry = (event) =>
    setData({ ...data, ["addCountry"]: event.target.value });

  const handleGold = (event) =>
    setData({ ...data, ["gold"]: event.target.value });

  const handleSilver = (event) =>
    setData({ ...data, ["silver"]: event.target.value });

  const handleBronze = (event) =>
    setData({ ...data, ["bronze"]: event.target.value });

  // 클릭 시, 데이터값 입력받은 새 데이터로 정의
  const btnClick = () => {
    setScores([...scores, data]);
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
          value={data.addCountry}
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
          value={data.gold}
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
          value={data.silver}
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
          value={data.bronze}
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
