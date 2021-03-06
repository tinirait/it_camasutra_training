import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'This is App Component'}/>
            <PageTitle title={'My Friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Меню 1"} collapsed = {false}/>
            <Accordion titleValue={"Users"} collapsed = {true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title:string

}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}


export default App;
