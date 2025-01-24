import React, { useState } from "react";

const InputLists = (props) => {
  const { setCurrentState, currentState } = props;
  // [input의 초기값 설정] : id, 국가명, 금메달, 은메달, 동메달의 초기값을 설정
  const defaultDataformat = {
    id: crypto.randomUUID(),
    addCountry: "",
    gold: "",
    silver: "",
    bronze: "",
  };

  const [data, setData] = useState(defaultDataformat);

  // [input handler] : 국가명, 금메달, 은메달, 동메달의 값(event.target.value)를 setData에 반영
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
  // [form onsubmit으로 버튼 핸들링 _ "국가추가 : addBtn / 업데이트 : updateBtn"]
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    // console.log(e.nativeEvent);
    // console.log(e.nativeEvent.submitter);

    // [공통 유효성검사] : 빈값 있을 때 알림
    if (!data.addCountry || !data.gold || !data.silver || !data.bronze) {
      alert("모든 입력 필드를 채워주세요!");
      return;
    }

    // [공통 유효성검사] : 입력되어있는 값과 입력할 값이 같은지 중복 검사
    const isCountryExist = currentState.some(
      (item) => item.addCountry === data.addCountry
    );

    const seletedBtnName = e.nativeEvent.submitter;

    switch (seletedBtnName.name) {
      case "addBtn":
        // [유효성검사] : 해당 국가가 존재할 경우, 알림
        if (isCountryExist) {
          alert("이미 입력된 국가입니다.");
        } else {
          // [Create] : setCurrentState에 새로운 리스트 추가
          setCurrentState(
            [data, ...currentState].sort((a, b) => b.gold - a.gold)
          );
        }

        // [유저 편의성] : 동작이 끝난 후, input 값 초기화로 비우기
        setData(defaultDataformat);
        break;

      case "updateBtn":
        // [유효성검사] : 해당 국가가 존재하지 않을 경우, 알림
        if (!isCountryExist) {
          alert("존재하지 않는 국가입니다.");
        }

        // [Update] : 입력된 값으로 변경 반영
        const UpdatedState = currentState.map((item) => {
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
        });
        setCurrentState(UpdatedState.sort((a, b) => b.gold - a.gold));

        // [유저 편의성] : 동작이 끝난 후, input 값 초기화로 비우기
        setData(defaultDataformat);
        break;

      default:
        break;
    }
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
            id="countryName"
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
            <button name="addBtn" type="submit" className="button-style-yellow">
              {/* <button type="submit" className="button-style-yellow"> */}
              국가 추가
            </button>
            <button
              type="submit"
              name="updateBtn"
              // onClick={handleUpdate}
              // type="button"
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
