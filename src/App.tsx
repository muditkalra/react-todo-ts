import { AppBar, Box, Button, Container, Grid2, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import TodoItem, { TodoItemType } from "./components/TodoItem";

export default function App() {

	const [todos, setTodos] = useState<TodoItemType[]>([]);
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// const form = new FormData(e.target as HTMLFormElement);
		// const title = form.get('title') as string;
		// const content = form.get('content') as string;
		setTodos((prev) => [...prev, { id: Math.random() * 100, content: content, title: title, isCompleted: false }]);
		setContent('');
		setTitle('');
	}

	const handleCompletion = (id: number) => {
		const completedTodo = todos.find((todo) => todo.id === id) as TodoItemType;
		completedTodo.isCompleted = !completedTodo.isCompleted;
		setTodos([...todos]);
	}

	const handleDelete = (id: number): void => {
		const remainingTodos = todos.filter((todo) => todo.id !== id) as TodoItemType[];
		setTodos([...remainingTodos]);
	}

	return (
		<Container maxWidth={'lg'}>
			<AppBar position="static" sx={{ mb: 2, mt: 2, borderRadius: 1 }} >
				<Toolbar sx={{ justifyContent: 'center' }}>
					<Typography>
						Todo App
					</Typography>
				</Toolbar>
			</AppBar>
			<Box mb={5} display={'flex'} justifyContent={{ xs: 'space-around', sm: 'space-evenly', lg: 'space-around' }} alignItems={{ xs: "stretch", sm: 'center' }} component={'form'} onSubmit={handleSubmit} flexDirection={{ xs: 'column', sm: 'row' }} >
				<TextField id="input-todo" label="Enter Todo Title" variant="standard" sx={{ width: { xs: "100%", sm: "30%", md: '30%', lg: '30%' } }} required name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
				<TextField id="input-todo" label="Enter Todo task" variant="standard" sx={{ width: { xs: "100%", sm: "50%", md: '50%', lg: '50%' }, mr: '5px', mb: { xs: '20px', sm: '0px' } }} required name="content" value={content} onChange={(e) => setContent(e.target.value)} />
				<Button variant="contained" color="error" type="submit"> submit</Button>
			</Box>
			<Grid2 container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
				{
					todos.map((todo) => (
						<TodoItem todo={todo} key={todo.id} onComplete={handleCompletion} onDelete={handleDelete} />
					))
				}
			</Grid2>
		</Container >
	)
}
