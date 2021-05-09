import React from 'react'
import { Link } from "react-router-dom";
import "../Header/Header.css"
import TodoList from './../TodoList/TodoList';

export default function Header() {
    return (
        <header>
            <h1>#100DaysOfCode</h1>

            <nav>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/todo"> TodoList </Link>
            </nav>
            
        </header>
    )
}
