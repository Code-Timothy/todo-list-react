export const ToTasks = () => "/zadania";
export const ToAuthor = () => "/autor";

export const ToTask = ({ id } = { id: ":id" }) => `/zadania/${id}`;