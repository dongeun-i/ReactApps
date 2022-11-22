import { addNumber } from "./util";
// it , expect, tobe 는 제스트에서 테스트코드를 작성할때 쓰는 함수
it("add tow numbers", () => {
    const result = addNumber(1, 2);
    expect(result).toBe(3);
});
