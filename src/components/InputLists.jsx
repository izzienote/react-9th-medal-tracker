import React, { useState } from "react";

const InputLists = (props) => {
  const { setCurrentState, currentState } = props;
  // 데이터 초기값 정의
  const [data, setData] = useState({
    id: crypto.randomUUID(),
    addCountry: "",
    gold: "",
    silver: "",
    bronze: "",
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

  // [데이터 추가]
  const AddBtn = () => {
    //유효성 검사 _ 빈값
    if (!data.addCountry || !data.gold || !data.silver || !data.bronze) {
      alert("모든 입력 필드를 채워주세요!");
      return;
    }

    //유효성 검사 _ 중복
    const isCountryExist = currentState.some(
      (item) => item.addCountry === data.addCountry
    );

    if (isCountryExist) {
      alert("이미 입력된 국가입니다.");

      setData({
        id: crypto.randomUUID(),
        addCountry: "",
        gold: "",
        silver: "",
        bronze: "",
      });
    } else {
      setCurrentState([data, ...currentState]);

      setData({
        id: crypto.randomUUID(),
        addCountry: "",
        gold: "",
        silver: "",
        bronze: "",
      });
    }
  };

  // [데이터 업데이트]
  const UpdateBtn = () => {
    alert("클릭됨");
    // 국가명이 같은 데이터 찾기
    // 새로 입력한 값으로 없데이트 후,
    // map으로 다시 뿌려주기
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
          <button onClick={AddBtn} className="button-style-yellow">
            국가 추가
          </button>
          <button onClick={UpdateBtn} className="button-style-yellow">
            업데이트
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputLists;
