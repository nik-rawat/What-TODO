import AddTodo from "./AddTodo"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Todo = () => {
  return (
    <Card className="w-2/3 border-slate-950 bg-slate-950 opacity-90">
    <CardHeader>
      <CardTitle>Todo List</CardTitle>
      <CardDescription>Manage your tasks efficiently</CardDescription>
    </CardHeader>
    <CardContent>
      
    </CardContent>
    <CardFooter className="flex justify-between">
      <AddTodo />
    </CardFooter>
    </Card>
      

  )
}

export default Todo