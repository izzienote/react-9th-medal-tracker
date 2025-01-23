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

  const handleGold = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setData({ ...data, gold: value });
    }
  };

  const handleSilver = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setData({ ...data, silver: value });
    }
  };

  const handleBronze = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setData({ ...data, bronze: value });
    }
  };
  //폼 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 유효성 검사 _ 빈값
    if (!data.addCountry || !data.gold || !data.silver || !data.bronze) {
      alert("모든 입력 필드를 채워주세요!");
      return;
    }

    // 유효성 검사 _ 중복
    const isCountryExist = currentState.some(
      (item) => item.addCountry === data.addCountry
    );

    if (isCountryExist) {
      alert("이미 입력된 국가입니다.");
    } else {
      setCurrentState([data, ...currentState]);
    }

    // 데이터 초기화
    setData({
      id: crypto.randomUUID(),
      addCountry: "",
      gold: "",
      silver: "",
      bronze: "",
    });
  };

  console.log(currentState);
  // [데이터 업데이트]
  const handleUpdate = () => {
    // alert("클릭됨");

    // 유효성 검사 _ 중복값 존재하는지 찾기 (같은 로직 사용)
    const isCountryExist = currentState.some(
      (item) => item.addCountry === data.addCountry
    );
    // 존재하지 않는 국가일 경우, 알림
    if (!isCountryExist) {
      alert("존재하지 않는 국가입니다.");
    }

    // 새로 입력한 값을 map으로 다시 뿌려주기
    setCurrentState((prevState) =>
      prevState.map((item) => {
        if (item.addCountry === data.addCountry) {
          return {
            ...item,
            gold: data.gold,
            silver: data.silver,
            bronze: data.bronze,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <div>
        <img src="https://i.namu.wiki/i/oAOPzGsbvgsvxKCbPBUbpVEdBsJJQJTWEnHuZqt20Uuwp0Uon8pv32dzhHGnUepgmNvRjoLScdaa2leyjd7Snw.svg" />
      </div>
      <div>
        <h1>2024 제33회 파리 올림픽 </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-style">
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
            <button type="submit" className="button-style-yellow">
              국가 추가
            </button>
            <button
              onClick={handleUpdate}
              type="button"
              className="button-style-yellow"
            >
              업데이트
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputLists;
