import config from "./config";

// Adding AssignmentQuestions
export const addAssignmentQuestions = async (data) => {
  return await config.post("/AssignmentQuestions", data);
};

// Get all AssignmentQuestions
export const getAssignmentQuestions = async () => {
  return await config.get("/AssignmentQuestions?sort=createdAt&order=desc");
};

// Get AssignmentQuestions By ID
export const getAssignmentQuestionsById = async (id) => {
  return await config.get("/AssignmentQuestions/" + id);
};

// Update AssignmentQuestions By ID
export const updateAssignmentQuestionsById = async (id, data) => {
  return await config.put("/AssignmentQuestions/" + id, data);
};

// Delete AssignmentQuestions BY ID
export const deleteAssignmentQuestionsById = async (id) => {
  try {
    return await config.delete("/AssignmentQuestions/" + id);
  } catch (error) {
    return error;
  }
};
