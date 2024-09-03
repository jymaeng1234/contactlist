import { useState } from "react";
import InputEl from "./component/InputEl";
import List from "./component/List";
import SearchEl from "./component/SearchEl";
import SelectEl from "./component/SelectEl";
import "./css/App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [memo, setMemo] = useState("");
  const [group, setGroup] = useState(0);

  const save = () => {
    console.log(`inputName : ${name}`);
    console.log(`phoneNumber : ${phone}`);
    console.log(`memo : ${memo}`);
    console.log(`Group:${group}`);

    //로컬 스토리지에 저장
    const contactData = { name, phone, group, memo };
    localStorage.setItem("contactList", JSON.stringify(contactData));

    //입력 요소 초기화
    setName("");
    setNumber("");
    setMemo("");
    setGroup("가족");
  };

  const ChangeName = (event) => {
    setName(event.target.value);
  };

  const ChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const ChangeMemo = (event) => {
    setMemo(event.target.value);
  };

  const ChangeGroup = (event) => {
    setGroup(event.target.value);
  };

  return (
    <main className="main">
      <h1>연락처 리스트</h1>

      <div>
        <section className="InputCon">
          <InputEl inputName="이름" value={name} onChange={ChangeName} />
          <InputEl inputName="전화번호" value={phone} onChange={ChangeNumber} />
          <SelectEl value={group} onChange={ChangeGroup} />
          <InputEl inputName="간단한기록" value={memo} onChange={ChangeMemo} />
          <button
            onClick={() => {
              save();
            }}
          >
            저장
          </button>
        </section>

        <section className="ListArea">
          <SearchEl
            placeholder="검색어를 입력 후 엔터를 누르세요"
            btnText="전체리스트 보기"
          />
          <List name="홍길동" phone="010-1234-1212" />
          <List name="홍길동" phone="010-1234-1212" />
          <List name="홍길동" phone="010-1234-1212" />
          <List name="홍길동" phone="010-1234-1212" />
          <List name="홍길동" phone="010-1234-1212" />
          <List name="홍길동" phone="010-1234-1212" />
        </section>
      </div>

      <div className="GroupModal"></div>
      <div className="DetailModal"></div>
    </main>
  );
}

export default App;
