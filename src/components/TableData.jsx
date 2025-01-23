import React from "react";

const TableData = (props) => {
  // console.log(props);
  const { currentState, setCurrentState } = props;

  const DeleteBtn = (countryName) => {
    // 필터링하여 삭제할 국가를 제외한 새 배열을 만듭니다.
    const updatedState = currentState.filter(
      (item) => item.addCountry !== countryName
    );

    // 필터링된 새로운 상태를 setCurrentState로 설정
    setCurrentState(updatedState);
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
          {currentState.map((currentState) => {
            return (
              <tr key={currentState.id}>
                <td>{currentState.addCountry}</td>
                <td>{currentState.gold}</td>
                <td>{currentState.silver}</td>
                <td>{currentState.bronze}</td>
                <td>
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
