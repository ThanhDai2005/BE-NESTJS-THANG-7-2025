function BaiTapTypeScript() {
  // Bài 1 Viết closure lưu điểm của từng học sinh và cho phép cập nhật, xem trung bình.

  function createStudentScore(name: string) {
    const scores: number[] = [];

    return {
      addScore(score: number) {
        scores.push(score);
      },
      getAverage() {
        if (scores.length === 0) return 0;
        const total = scores.reduce((sum, s) => sum + s, 0);
        return total / scores.length;
      },
    };
  }

  const student = createStudentScore("Nam");
  student.addScore(8);
  student.addScore(9);
  console.log(student.getAverage());

  // Bài 2 Viết closure giới hạn số lần sử dụng một tính năng (ví dụ dùng thử free 5 lần)
  function createTrialFeature(limit: number) {
    let used = 0;

    return function () {
      if (used < limit) {
        console.log("Ok");
        used++;
      } else {
        console.log("Error: Hết số lần dùng thử");
      }
    };
  }

  const useFeature = createTrialFeature(3);
  useFeature();
  useFeature();
  useFeature();
  useFeature();

  // Bài 3 Viết closure tạo ra ID tăng dần bắt đầu từ một số bất kỳ.

  function createIDGenerator(start: number) {
    return function () {
      return start++;
    };
  }

  const gen = createIDGenerator(1000);
  console.log(gen()); // 1000
  console.log(gen()); // 1001

  return <></>;
}

export default BaiTapTypeScript;
