import React from "react";

const TableData = (props) => {
  const { currentState, setCurrentState } = props;
  // [delete] : 국가명을 기준으로 filter()를 사용하여, 삭제값에 해당하는 아이템만 제외하고 새 배열로 반환
  const DeleteBtn = (countryName) => {
    const updatedState = currentState.filter(
      (item) => item.addCountry !== countryName
    );
    setCurrentState(updatedState); //setCurrentState 에 결과값 전달
  };

  return (
    <>
      <table className="table-style">
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {/* map함수로 테이블 바디 값을 넣어주기 */}
          {currentState.map((currentState) => {
            return (
              <tr key={currentState.id}>
                <td>{currentState.addCountry}</td>
                <td>{currentState.gold}</td>
                <td>{currentState.silver}</td>
                <td>{currentState.bronze}</td>
                <td>
                  {/* 삭제버튼에 현재상태의 국가명 값 받기 */}
                  <button
                    onClick={() => DeleteBtn(currentState.addCountry)}
                    className="button-style-red"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
