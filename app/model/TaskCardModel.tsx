export default interface TaskCardModel {
  id: number;
  priority: string;
  title: string;
  description: string;
  tags: string[];
  finishDate: string;
  status: string;
}
