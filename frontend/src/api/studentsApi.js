import config from "./config";

// Adding Students
export const addStudents = async (data) => {
  return await config.post("/students", data);
};

// Get all Students
export const getStudents = async () => {
  return await config.get("/students?sort=createdAt&order=desc");
};

// Get Students By ID
export const getStudentsById = async (id) => {
  return await config.get("/students/" + id);
};

// Update Students By ID
export const updateStudentsById = async (id, data) => {
  return await config.put("/students/" + id, data);
};

// Delete Students BY ID
export const deleteStudentsById = async (id) => {
  try {
    return await config.delete("/students/" + id);
  } catch (error) {
    return error;
  }
};

// Daily completed Normal Questions
export const AddNormalQuestionsDaily = async (id, data) => {
  return await config.post("/students/normal/" + id, data);
};

// Daily completed Assigments Questions
export const AddAssignmentsQuestionsDaily = async (id, data) => {
  return await config.post("/students/assignments/" + id, data);
};

// Change Password
export const changeProfile = async (data) => {
  return await config.post("/students/change", data);
};

// LeaderBoard
export const getLeaderBoard = async () => {
  return await config.get("/students/leaderBoard?sort=score&order=desc");
};
