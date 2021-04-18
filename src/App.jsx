import React from 'react';
import Header from './Dash/Header';
import Content from './Dash/Content';
import Footer from './Dash/Footer';
import Navig from './Dash/navig';
import Form from './Pages/Form_name';
import Todo from './Pages/Todo';
import IncDec from './Pages/Inreament_decreamnet';
import TodoMaterial from './Pages/ToDo_Material';


const App = () => {
    return(
        <>
            {/* <Header />
            <Navig />
            <Content />
            <Footer />  */}
            {/* <Form /> */}
            {/* <Todo /> */}
                {/* <IncDec /> */}
                <TodoMaterial />
        </>
        );
}

export default App;