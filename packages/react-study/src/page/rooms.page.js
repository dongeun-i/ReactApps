import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";

const Rooms = () => {
    return (
        <div>
            <h2>여기는 방을 소개하는 페이지 입니다.</h2>
            <Link to={`/rooms/blueRoom`}>여기는 파란방입니다.</Link>
            <br />
            <Link to={`/rooms/greenRoom`}>여기는 초록방입니다.</Link>
            <br />
            <Routes>
                <Route path={`:roomId`} element={<Room />} />
                <Route path={"*"} element={<Room />} />
            </Routes>
        </div>
    );
    function Room() {
        const { roomId } = useParams();
        return roomId ? (
            <h2>{`${roomId}방을 선택하셨습니다.`}</h2>
        ) : (
            <h3>방을 선택해 주세요.</h3>
        );
    }
};
export default Rooms;
