import React, { useState } from "react";
import styled from "styled-components";
import NoticeItem from "../components/NoticeItem";
import noticeData from "../resource/noticeData.json";

const NoticeBox = styled.div`
  color: white;
  background: var(--color-sub-2);
  display: flex;
  flex-direction: column;
  font-weight: 600;

  max-width: 40%;
  height: 60vh;
  @media (max-width: 900px) {
    max-width: 400px;
    height: 380px;
  }
`;
const NoticeHeader = styled.div`
  padding: 24px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 26px;
`;
const HeaderComplete = styled.button`
  color: #f9d5a2;
  padding-left: 28px;
`;
const NoticeList = styled.ul`
  all: unset;
  list-style: none;
  font-weight: 500;
  height: calc(100% - 59px);
  overflow: auto;

  //   height: 228px;
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;

const NoticeButton = styled.div`
  padding: 20px 0;
  background: var(--color-main-4);
  text-align: center;
  color: #000000;
  margin-top: 36px;
`;

export default function Notice() {
  const [data, setData] = useState(noticeData);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [checked, setChecked] = useState<number[]>([]);

  return (
    <NoticeBox>
      <NoticeHeader>
        <span>전체 알림</span>
        {showDelete ? (
          <div>
            <button
              onClick={() =>
                checked.length
                  ? setChecked([])
                  : setChecked(data.map(({ id }) => id))
              }
            >
              전체 {checked.length ? "취소" : "선택"}
            </button>
            <HeaderComplete onClick={() => setShowDelete(false)}>
              완료
            </HeaderComplete>
          </div>
        ) : (
          <button onClick={() => setShowDelete(true)}>알림 삭제</button>
        )}
      </NoticeHeader>
      <NoticeList>
        {data.map((dt) => (
          <NoticeItem
            key={dt.id}
            {...dt}
            showDelete={showDelete}
            checked={checked}
            setChecked={setChecked}
          />
        ))}
      </NoticeList>
      {showDelete && (
        <NoticeButton
          onClick={() => {
            console.log(checked);
            setShowDelete(false);
            setChecked([]);
          }}
        >
          삭제하기
        </NoticeButton>
      )}
    </NoticeBox>
  );
}
