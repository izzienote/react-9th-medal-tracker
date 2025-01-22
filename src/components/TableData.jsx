import React from "react";

const TableData = (props) => {
  //prop값 가져와서, 구조분해 할당 후 아래 바뀌어야하는 해당 부분에 {}로 바꿔넣기
  console.log(props);
  const { scores } = props;

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
          {/* ---이부분으로 버튼의 props data를 받아와야함--- */}
          {/* <tr>
            <td>{data.addCountry}</td>
            <td>{data.gold}</td>
            <td>{data.silver}</td>
            <td>{data.bronze}</td>
            <td><button className='button-style-red'>삭제</button></td>
          </tr> */}

          {scores.map((scores) => {
            return (
              <tr key={scores.id}>
                <td>{scores.addCountry}</td>
                <td>{scores.gold}</td>
                <td>{scores.silver}</td>
                <td>{scores.bronze}</td>
                <td>
                  <button className="button-style-red">삭제</button>
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
