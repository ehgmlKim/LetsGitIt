import React, { useState } from "react";
import SelectLanguage from "./profile/SelectLanguage";
import CheckButton from "../components/CheckButton";
import styled from "styled-components";
import SelectRegion from "./profile/SelectRegion";

const MatchingHeader = styled.header`
  max-width: var(--width-max);
  margin: 120px auto 55px;
  padding: 0 20px;
  color: var(--color-sub-1);
`;

const MatchingMain = styled.main`
  color: var(--color-sub-1);
  max-width: var(--width-max);
  margin: 30px auto 0;
  font-weight: 500;
`;

const MatchingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: #222222;
  border-top: 3px solid #444444;
  border-bottom: 3px solid #444444;

  & th {
    height: 60px;
  }
`;

const TableBody = styled.tbody`
  & td {
    border-bottom: 2px solid #444444;
    text-align: center;
    height: 80px;
    padding: 0 15px;
  }
`;

const BodyUser = styled.td`
  display: flex;
  align-items: center;
  & > img {
    width: 44px;
    height: 44px;
  }
`;

const BodyTitle = styled.td`
  display: flex;
  align-items: center;
  gap: 24px;
  & > p {
    height: 40px;
    overflow: hidden;
  }

  & > span {
    padding: 10px 14px;
    background: #222222;
    border-radius: 10px;
  }
`;

const MatchingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`;

const MatchField = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 37px;
`;

const FieldBlock = styled.div`
  padding: 20px 0;
  max-width: 180px;
  width: 20%;
  background: #222222;
  text-align: center;
  border-radius: 10px;
`;

const TitleLeft = styled.div`
  display: flex;
`;

const TitleText = styled.span`
  margin-right: 50px;
`;

const CheckText = styled.span`
  margin-left: 10px;
`;

const TableItem = styled.tr``;

const MatchingStart = styled.div`
  border: 1px solid var(--color-main-4);
  padding: 20px 43px;
`;

const MatchingTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & p {
    margin-top: 8px;
    margin-bottom: 24px;
  }
`;

interface fieldInfo {
  name: string;
  Component?: string;
}

export default function Matching() {
  const [region, setRegion] = useState("");
  const sort = [
    { name: "진행기간", Component: <div>진행기간</div> },
    { name: "회의유형" },
    {
      name: "지역",
      Component: <SelectRegion region={region} setRegion={setRegion} />,
    },
    { name: "포지션" },
    { name: "언어" },
    { name: "툴", Component: <div>select</div> },
  ];
  const [checked, setChecked] = useState<number[]>([]);
  return (
    <>
      <MatchingHeader>
        <MatchingTitle>
          <div>
            <h3>팀매칭</h3>
            <p>사이드프로젝트를 통해 개발능력을 업그레이드해보세요</p>
          </div>
          <MatchingStart>팀매칭 시작하기</MatchingStart>
        </MatchingTitle>
      </MatchingHeader>
      <MatchingMain>
        <MatchingInfo>
          <TitleLeft>
            <TitleText>전체글 nn개</TitleText>
            <CheckButton check={false} />
            <CheckText onClick={() => {}}>모집 진행중</CheckText>
          </TitleLeft>
          <div>최신순</div>
        </MatchingInfo>
        <MatchField>
          {sort.map(({ name, Component }) => (
            <FieldBlock key={name}>{Component}</FieldBlock>
          ))}
        </MatchField>
        <MatchingTable>
          <TableHeader>
            <tr>
              <th>작성일</th>
              <th>작성자</th>
              <th>제목</th>
              <th>모집 인원</th>
              <th>스크랩</th>
              <th>댓글</th>
            </tr>
          </TableHeader>
          <TableBody>
            <TableItem>
              <td>2023.3.45</td>
              <td>
                <img />
                <span>username</span>
              </td>
              <BodyTitle>
                <p>
                  사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요
                </p>
                <span>모집완료</span>
              </BodyTitle>

              <td>3/4</td>
              <td>39</td>
              <td>4</td>
            </TableItem>
          </TableBody>
        </MatchingTable>
      </MatchingMain>
    </>
  );
}
