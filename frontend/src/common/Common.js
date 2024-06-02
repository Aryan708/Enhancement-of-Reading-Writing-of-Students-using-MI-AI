const _user = localStorage.getItem("token");
export const user = JSON.parse(_user);

export const QuestionTypes = ["MCQ", "Audio", "Fill", "Speak"];
