import { Box, Button, Card, CardActions, CardContent, Divider, Grid2, Typography } from "@mui/material";

export type TodoItemType = {
	title: string;
	content: string;
	isCompleted: boolean;
	id: number;
}

type PropsType = {
	todo: TodoItemType,
	onComplete: (id: number) => void,
	onDelete: (id: number) => void
}

export default function TodoItem({ todo, onComplete, onDelete }: PropsType) {
	return (
		<Grid2 size={{ xs: 12, sm: 4, md: 3 }}>
			<Box key={todo.id}>
				<Card sx={{ bgcolor: '#fff740', color: 'black', }}>
					<CardContent>
						<Box display={'flex'} justifyContent={'space-between'}>
							<Typography color="textPrimary" sx={{ textDecorationLine: todo.isCompleted ? 'line-through' : 'none' }}>
								{todo.title}
							</Typography>
							<img src="thumbtack-svg.svg" alt="" width={22} height={22} />
						</Box>
						<Divider sx={{ borderWidth: 1.1, borderColor: 'GrayText', mt: 1 }} />
						<Typography mt={1.7} letterSpacing={0.5} sx={{ wordWrap: "break-word" }}>
							{todo.content}
						</Typography>
					</CardContent>
					<Divider />
					<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button size="small" onClick={() => onComplete(todo.id)}>{todo.isCompleted ? "Not Completed?" : "Completed"} </Button>
						<Button size="small" onClick={() => onDelete(todo.id)}>{"Delete "} </Button>
					</CardActions>
				</Card>
			</Box>
		</Grid2>
	)
}
