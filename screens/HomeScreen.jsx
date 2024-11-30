import {Button, SafeAreaView} from "react-native";
import React from "react";
import MainLayout from '../layouts/MainLayout';
import {ToDoForm} from "@/components/ToDoForm";
import {ToDoList} from "@/components/ToDoList";

export function HomeScreen({ navigation }) {
    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

    return (
        <MainLayout>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
}
